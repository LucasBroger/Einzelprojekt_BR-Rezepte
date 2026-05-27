import { fail, redirect } from '@sveltejs/kit';
import { getCollection } from '$lib/server/db.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
    throw redirect(303, '/auth/login?redirectTo=/vorschlag');
  }

  return {
    userName: locals.user.name || locals.user.username || locals.user.email || ''
  };
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
    const absenderName =
      locals.user.name || locals.user.username || locals.user.email || '';

    const errors = {};
    let firstErrorField = null;

    if (!name) {
      errors.name = 'Bitte gib einen Rezeptnamen ein.';
      firstErrorField ??= 'name';
    }

    if (!menueart) {
      errors.menueart = 'Bitte wähle eine Menüart aus.';
      firstErrorField ??= 'menueart';
    }

    if (!aufwand) {
      errors.aufwand = 'Bitte wähle den Aufwand für das Rezept aus.';
      firstErrorField ??= 'aufwand';
    }

    if (!zeitaufwand) {
      errors.zeitaufwand = 'Bitte wähle den Zeitaufwand für das Rezept aus.';
      firstErrorField ??= 'zeitaufwand';
    }

    if (!zutatenText) {
      errors.zutaten = 'Bitte trage mindestens eine Zutat ein, idealerweise eine pro Zeile.';
      firstErrorField ??= 'zutaten';
    }

    if (!beschreibung) {
      errors.beschreibung = 'Bitte beschreibe kurz, was das Rezept ausmacht oder wie es zubereitet wird.';
      firstErrorField ??= 'beschreibung';
    }

    if (Object.keys(errors).length > 0) {
      return fail(422, {
        success: false,
        errors,
        firstErrorField,
        values: {
          name,
          name_portugiesisch,
          menueart,
          aufwand,
          zeitaufwand,
          zutaten: zutatenText,
          beschreibung
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
      message: 'Dein Rezeptvorschlag wurde erfolgreich gespeichert.',
      values: {
        name: '',
        name_portugiesisch: '',
        menueart: '',
        aufwand: '',
        zeitaufwand: '',
        zutaten: '',
        beschreibung: ''
      }
    };
  }
};