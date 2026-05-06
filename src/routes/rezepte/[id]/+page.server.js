import { error } from '@sveltejs/kit';
import { getCollection } from '$lib/server/db.js';
import { toObjectId } from '$lib/server/auth.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
  const rezepteCol = await getCollection('rezepte');

  let rezeptId;

  try {
    rezeptId = toObjectId(params.id);
  } catch {
    throw error(404, 'Rezept nicht gefunden');
  }

  const rezept = await rezepteCol.findOne({ _id: rezeptId });

  if (!rezept) {
    throw error(404, 'Rezept nicht gefunden');
  }

  await rezepteCol.updateOne(
    { _id: rezeptId },
    { $inc: { views: 1 } }
  );

  let isFavorite = false;

  if (locals.user?._id) {
    const favoritesCol = await getCollection('favorites');

    const favorite = await favoritesCol.findOne({
      userId: toObjectId(locals.user._id),
      recipeId: rezeptId
    });

    isFavorite = !!favorite;
  }

  const normalized = {
    ...rezept,
    _id: String(rezept._id),
    views: (rezept.views || 0) + 1,
    bild: rezept.bild || '/default-recipe.svg',
    beschreibung: rezept.beschreibung || '',
    portionen: Number(rezept.portionen) > 0 ? Number(rezept.portionen) : 2,
    zubereitungsschritte: Array.isArray(rezept.zubereitungsschritte)
      ? rezept.zubereitungsschritte
      : typeof rezept.zubereitungsschritte === 'string' && rezept.zubereitungsschritte.trim()
        ? rezept.zubereitungsschritte
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean)
        : [],
    tipps: Array.isArray(rezept.tipps)
      ? rezept.tipps
      : typeof rezept.tipps === 'string' && rezept.tipps.trim()
        ? rezept.tipps
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean)
        : [],
    zutaten: Array.isArray(rezept.zutaten) ? rezept.zutaten : []
  };

  return {
    rezept: normalized,
    isFavorite
  };
}