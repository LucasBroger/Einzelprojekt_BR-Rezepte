import dns from 'node:dns';
import { MongoClient } from 'mongodb';
import { MONGODB_URI, MONGODB_DB } from '$env/static/private';

dns.setServers(['1.1.1.1', '8.8.8.8']);

const uri = MONGODB_URI;
const dbName = MONGODB_DB || 'BrasilianischeRezepte';

let client;
let db;
let connectingPromise;

async function createClient() {
  if (!uri) {
    throw new Error('MONGODB_URI ist nicht gesetzt.');
  }

  const mongoClient = new MongoClient(uri);
  await mongoClient.connect();

  const database = mongoClient.db(dbName);

  client = mongoClient;
  db = database;

  console.log(`[MongoDB] Verbunden mit ${dbName}`);
  return db;
}

export async function connect() {
  if (db) return db;

  if (!connectingPromise) {
    connectingPromise = createClient().catch((error) => {
      client = null;
      db = null;
      throw error;
    }).finally(() => {
      connectingPromise = null;
    });
  }

  return await connectingPromise;
}

export async function getCollection(name) {
  const database = await connect();

  if (!database) {
    throw new Error('MongoDB-Verbindung konnte nicht hergestellt werden.');
  }

  return database.collection(name);
}

export async function close() {
  if (client) {
    await client.close();
  }

  client = null;
  db = null;
  connectingPromise = null;
}

export default { connect, getCollection, close };