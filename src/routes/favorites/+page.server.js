import { redirect } from '@sveltejs/kit';
import { getCollection } from '$lib/server/db.js';
import { getUidFromToken, toObjectId } from '$lib/server/auth.js';

export async function load({ cookies, url }) {
  const token = cookies.get('session');
  const uid = getUidFromToken(token);

  if (!uid) {
    throw redirect(303, `/auth/login?redirectTo=${encodeURIComponent(url.pathname)}`);
  }

  const users = await getCollection('users');
  const user = await users.findOne({ _id: toObjectId(uid) });
  const favIds = (user?.favorites || []).map((id) => {
    try {
      return toObjectId(id);
    } catch {
      return id;
    }
  });

  const rezepteCol = await getCollection('rezepte');
  const items = await rezepteCol.find({ _id: { $in: favIds } }).toArray();

  const rezepte = items.map((it) => ({
    ...it,
    _id: String(it._id)
  }));

  const favRaw = user?.favorites || [];
if (favRaw.length === 0) {
  return { rezepte: [] };
}

const favIds = favRaw.map((id) => {
  try {
    return toObjectId(id);
  } catch {
    return id;
  }
});

  return { rezepte };
}