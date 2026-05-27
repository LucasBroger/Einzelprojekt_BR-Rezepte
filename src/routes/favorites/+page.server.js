import { redirect } from '@sveltejs/kit';
import { getCollection } from '$lib/server/db.js';
import { getUidFromToken, toObjectId } from '$lib/server/auth.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, url }) {
  const token = cookies.get('session');
  const uid = getUidFromToken(token);

  if (!uid) {
    throw redirect(303, `/auth/login?redirectTo=${encodeURIComponent(url.pathname)}`);
  }

  const usersCol = await getCollection('users');
  const userId = toObjectId(uid);
  const user = await usersCol.findOne({ _id: userId });

  if (!user) {
    throw redirect(303, `/auth/login?redirectTo=${encodeURIComponent(url.pathname)}`);
  }

  const favRaw = user.favorites || [];

  if (favRaw.length === 0) {
    return { rezepte: [] };
  }

  const favoriteMeta = favRaw.map((fav) => {
    if (typeof fav === 'string') {
      return {
        recipeId: String(fav),
        portionen: null
      };
    }

    return {
      recipeId: String(fav.recipeId),
      portionen: fav.portionen ?? null
    };
  });

  const favIds = favoriteMeta.map((fav) => {
    try {
      return toObjectId(fav.recipeId);
    } catch {
      return fav.recipeId;
    }
  });

  const rezepteCol = await getCollection('rezepte');
  const items = await rezepteCol.find({ _id: { $in: favIds } }).toArray();

  const metaMap = new Map(
    favoriteMeta.map((fav) => [String(fav.recipeId), fav.portionen])
  );

  const rezepte = items.map((it) => ({
    ...it,
    _id: String(it._id),
    favoritePortionen: metaMap.get(String(it._id)) ?? null
  }));

  return { rezepte };
}