declare global {
  namespace App {
    interface Locals {
      user: {
        uid: string | null;
        email: string | null;
      } | null;
    }
  }
}

export {};