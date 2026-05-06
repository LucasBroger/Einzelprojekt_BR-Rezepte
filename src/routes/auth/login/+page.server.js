import { fail, redirect } from '@sveltejs/kit';
import { getCollection } from '$lib/server/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies, url }) => {
    const data = await request.formData();
    const email = data.get('email')?.toString().trim().toLowerCase();
    const pass = data.get('password')?.toString();

    if (!email || !pass) {
      return fail(400, {
        email,
        error: 'Bitte E-Mail und Passwort angeben.'
      });
    }

    const users = await getCollection('users');
    const user = await users.findOne({ email });

    if (!user) {
      return fail(400, {
        email,
        error: 'Ungültige Anmeldedaten.'
      });
    }

    const ok = await bcrypt.compare(pass, user.passwordHash || '');

    if (!ok) {
      return fail(400, {
        email,
        error: 'Ungültige Anmeldedaten.'
      });
    }

    const token = jwt.sign(
      { uid: String(user._id), email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    cookies.set('session', token, {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7
    });

    const redirectTo = url.searchParams.get('redirectTo') || '/favorites';
    throw redirect(303, redirectTo);
  }
};