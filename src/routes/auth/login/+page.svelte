<script>
  let { form, data } = $props();
</script>

<svelte:head>
  <title>Login | BR Rezepte</title>
</svelte:head>

<section class="section-block" style="max-width: 560px; margin: 0 auto;">
  <div class="panel">
    <div class="page-intro">
      <h1>Anmelden</h1>
      <p>
        Melde dich an, um Favoriten zu speichern und dein persönliches Kochbuch
        zu verwalten.
      </p>
    </div>

    {#if data?.registered}
      <p class="form-success">
        Registrierung erfolgreich. Du kannst dich jetzt einloggen.
      </p>
    {/if}

    <form method="POST" class="auth-form">
      <label class="field">
        <span>E-Mail</span>
        <input
          type="email"
          name="email"
          required
          value={form?.email ?? ""}
          placeholder="name@beispiel.ch"
        />
      </label>

      <label class="field">
        <span>Passwort</span>
        <input
          type="password"
          name="password"
          required
          placeholder="Dein Passwort"
        />
      </label>

      {#if form?.error}
        <p class="form-error">{form.error}</p>
      {/if}

      <button class="btn btn-primary" type="submit">Anmelden</button>
    </form>

    <p class="auth-switch">
      Noch kein Konto? <a href="/auth/register">Jetzt registrieren</a>
    </p>
  </div>
</section>
