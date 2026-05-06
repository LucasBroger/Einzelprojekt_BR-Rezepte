import { json } from '@sveltejs/kit';
import { getCollection } from '$lib/server/db.js';
import { getUidFromToken, toObjectId } from '$lib/server/auth.js';

export async function POST({ request, cookies }) {
  const token = cookies.get('session');
  const uid = getUidFromToken(token);

  if (!uid) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.json();
  const recipeId = data.recipeId;

  if (!recipeId) {
    return json({ error: 'recipeId missing' }, { status: 400 });
  }

  const users = await getCollection('users');
  const userId = toObjectId(uid);

  const user = await users.findOne({ _id: userId });

if (!user) {
  return json({ error: 'User nicht gefunden' }, { status: 404 });
}

const favorites = (user.favorites || []).map(String);
  const alreadyFavorite = favorites.includes(String(recipeId));

  if (alreadyFavorite) {
    await users.updateOne(
      { _id: userId },
      { $pull: { favorites: String(recipeId) } }
    );

    return json({ success: true, favorited: false });
  }

  await users.updateOne(
    { _id: userId },
    { $addToSet: { favorites: String(recipeId) } }
  );

  return json({ success: true, favorited: true });
}

export async function GET({ cookies }) {
  const token = cookies.get('session');
  const uid = getUidFromToken(token);

  if (!uid) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const users = await getCollection('users');
  const user = await users.findOne({ _id: toObjectId(uid) });

  return json({ favorites: user?.favorites || [] });
}