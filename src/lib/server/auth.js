import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export function getUidFromToken(token) {
  if (!token) return null;

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload?.uid || null;
  } catch {
    return null;
  }
}

export function getUserFromToken(token) {
  if (!token) return null;

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return {
      uid: payload?.uid || null,
      email: payload?.email || null
    };
  } catch {
    return null;
  }
}

export function toObjectId(value) {
  if (value instanceof ObjectId) return value;
  if (ObjectId.isValid(value)) return new ObjectId(value);
  throw new Error('Ungültige ObjectId');
}