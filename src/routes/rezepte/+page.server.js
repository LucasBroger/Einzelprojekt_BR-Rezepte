import db from '$lib/server/db';
import { ObjectId } from 'mongodb';

export async function load({ locals, url }) {
  const search = url.searchParams.get('q')?.trim() ?? '';
  const menueart = url.searchParams.get('menueart')?.trim() ?? '';
  const aufwand = url.searchParams.get('aufwand')?.trim() ?? '';
  const zeitaufwand = url.searchParams.get('zeitaufwand')?.trim() ?? '';
  const sortParam = url.searchParams.get('sort') ?? 'name_asc';

  const filter = {};

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: 'i' } },
      { name_portugiesisch: { $regex: search, $options: 'i' } }
    ];
  }

  if (menueart) filter.menueart = menueart;
  if (aufwand) filter.aufwand = aufwand;
  if (zeitaufwand) filter.zeitaufwand = zeitaufwand;

  // Sortierlogik
  let sort = {};
  switch (sortParam) {
    case 'name_desc':
      sort = { name: -1 };
      break;
    case 'aufwand_asc':
      sort = { aufwand: 1, name: 1 };
      break;
    case 'aufwand_desc':
      sort = { aufwand: -1, name: 1 };
      break;
    case 'zeitaufwand_asc':
      sort = { zeitaufwand: 1, name: 1 };
      break;
    case 'zeitaufwand_desc':
      sort = { zeitaufwand: -1, name: 1 };
      break;
    case 'name_asc':
    default:
      sort = { name: 1 };
      break;
  }

  const rezepteCollection = await db.getCollection('rezepte');

  const rezepte = await rezepteCollection.find(filter).sort(sort).toArray();

  let favoriteIds = new Set();

  if (locals.user?.uid) {
    const usersCollection = await db.getCollection('users');
    const user = await usersCollection.findOne({
      _id: new ObjectId(locals.user.uid)
    });

    const favorites = (user?.favorites || []).map(String);
    favoriteIds = new Set(favorites);
  }

  const rezepteMitFavoriten = rezepte.map((rezept) => ({
    ...rezept,
    _id: String(rezept._id),
    initialFavorite: favoriteIds.has(String(rezept._id))
  }));

  return {
    rezepte: rezepteMitFavoriten,
    filters: {
      search,
      menueart,
      aufwand,
      zeitaufwand,
      sort: sortParam
    }
  };
}