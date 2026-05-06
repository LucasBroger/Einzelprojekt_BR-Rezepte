import { getCollection } from '$lib/server/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const col = await getCollection('rezepte');

  const rawTrending = await col
    .find({})
    .sort({ views: -1, name: 1 })
    .limit(5)
    .toArray();

  const rawFeatured = await col
    .find({})
    .sort({ name: 1 })
    .limit(6)
    .toArray();

  const trending = rawTrending.map((it) => ({
    ...it,
    _id: String(it._id),
    views: it.views || 0
  }));

  const featured = rawFeatured.map((it) => ({
    ...it,
    _id: String(it._id)
  }));

  return {
    trending,
    featured
  };
}