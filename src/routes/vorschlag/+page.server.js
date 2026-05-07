import { fail, redirect } from '@sveltejs/kit';
import { getCollection } from '$lib/server/db.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
    throw redirect(303, '/auth/login?redirectTo=/vorschlag');
  }

  return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals }) => {
    if (!locals.user) {
      throw redirect(303, '/auth/login?redirectTo=/vorschlag');
    }

    const data = await request.formData();

    const name = data.get('name')?.toString().trim() || '';
    const name_portugiesisch = data.get('name_portugiesisch')?.toString().trim() || '';
    const menueart = data.get('menueart')?.toString().trim() || '';
    const aufwand = data.get('aufwand')?.toString().trim() || '';
    const zeitaufwand = data.get('zeitaufwand')?.toString().trim() || '';
    const zutatenText = data.get('zutaten')?.toString().trim() || '';
    const beschreibung = data.get('beschreibung')?.toString().trim() || '';
    const absenderName = data.get('absenderName')?.toString().trim() || '';

    const errors = {};

    if (!name) errors.name = 'Bitte gib einen Rezeptnamen ein.';
    if (!menueart) errors.menueart = 'Bitte wähle eine Menüart aus.';
    if (!aufwand) errors.aufwand = 'Bitte wähle einen Aufwand aus.';
    if (!zeitaufwand) errors.zeitaufwand = 'Bitte wähle einen Zeitaufwand aus.';
    if (!zutatenText) errors.zutaten = 'Bitte gib mindestens eine Zutat ein.';
    if (!beschreibung) errors.beschreibung = 'Bitte beschreibe das Rezept kurz.';

    if (Object.keys(errors).length > 0) {
      return fail(422, {
        success: false,
        errors,
        values: {
          name,
          name_portugiesisch,
          menueart,
          aufwand,
          zeitaufwand,
          zutaten: zutatenText,
          beschreibung,
          absenderName
        }
      });
    }

    const zutaten = zutatenText
      .split('\n')
      .map((z) => z.trim())
      .filter(Boolean);

    const col = await getCollection('vorschlaege');

    await col.insertOne({
      name,
      name_portugiesisch,
      menueart,
      aufwand,
      zeitaufwand,
      zutaten,
      beschreibung,
      absenderName,
      userEmail: locals.user.email,
      status: 'neu',
      createdAt: new Date()
    });

    return {
      success: true,
      message: 'Dein Rezeptvorschlag wurde erfolgreich gespeichert.'
    };
  }
};