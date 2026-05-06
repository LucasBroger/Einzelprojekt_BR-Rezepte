import { fail, redirect } from '@sveltejs/kit';
import { getCollection } from '$lib/server/db.js';
import bcrypt from 'bcryptjs';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const vorname = data.get('vorname')?.toString().trim();
    const nachname = data.get('nachname')?.toString().trim();
    const email = data.get('email')?.toString().trim().toLowerCase();
    const pass = data.get('password')?.toString();
    const pass2 = data.get('password2')?.toString();

    if (!vorname || !nachname || !email || !pass || !pass2) {
      return fail(400, {
        vorname,
        nachname,
        email,
        error: 'Bitte alle Felder ausfüllen.'
      });
    }

    if (pass.length < 6) {
      return fail(400, {
        vorname,
        nachname,
        email,
        error: 'Das Passwort muss mindestens 6 Zeichen lang sein.'
      });
    }

    if (pass !== pass2) {
      return fail(400, {
        vorname,
        nachname,
        email,
        error: 'Passwörter stimmen nicht überein.'
      });
    }

    const users = await getCollection('users');
    const existing = await users.findOne({ email });

    if (existing) {
      return fail(400, {
        vorname,
        nachname,
        email,
        error: 'Ein Konto mit dieser E-Mail existiert bereits.'
      });
    }

    const hash = await bcrypt.hash(pass, 10);

    await users.insertOne({
      vorname,
      nachname,
      email,
      passwordHash: hash,
      favorites: [],
      createdAt: new Date()
    });

    throw redirect(303, '/auth/login?registered=1');
  }
};