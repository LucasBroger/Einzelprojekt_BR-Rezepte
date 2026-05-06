import { getUserFromToken } from '$lib/server/auth.js';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const token = event.cookies.get('session');
  const user = getUserFromToken(token);

  event.locals.user = user;

  return resolve(event);
}