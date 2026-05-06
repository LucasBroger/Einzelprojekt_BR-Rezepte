import { writable } from 'svelte/store';

const initialLoginPrompt = {
  open: false,
  title: 'Login erforderlich',
  message: 'Du musst eingeloggt sein, um Rezepte zu Favoriten hinzuzufügen.'
};

export const loginPrompt = writable(initialLoginPrompt);

export function openLoginPrompt(payload = {}) {
  loginPrompt.set({
    ...initialLoginPrompt,
    ...payload,
    open: true
  });
}

export function closeLoginPrompt() {
  loginPrompt.set({
    ...initialLoginPrompt,
    open: false
  });
}