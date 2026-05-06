<script>
  let { form } = $props();
</script>

<svelte:head>
  <title>Registrieren | BR Rezepte</title>
</svelte:head>

<section class="section-block" style="max-width: 560px; margin: 0 auto;">
  <div class="panel">
    <div class="page-intro">
      <h1>Registrieren</h1>
      <p>
        Erstelle dein Konto, um Rezepte zu speichern und deine Favoriten
        jederzeit wiederzufinden.
      </p>
    </div>

    <form method="POST" class="auth-form">
      <label class="field">
        <span>Vorname</span>
        <input
          type="text"
          name="vorname"
          required
          value={form?.vorname ?? ""}
          placeholder="Dein Vorname"
        />
      </label>

      <label class="field">
        <span>Nachname</span>
        <input
          type="text"
          name="nachname"
          required
          value={form?.nachname ?? ""}
          placeholder="Dein Nachname"
        />
      </label>

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
          placeholder="Mindestens 6 Zeichen"
        />
      </label>

      <label class="field">
        <span>Passwort wiederholen</span>
        <input
          type="password"
          name="password2"
          required
          placeholder="Passwort erneut eingeben"
        />
      </label>

      {#if form?.error}
        <p class="form-error">{form.error}</p>
      {/if}

      {#if form?.success}
        <p class="form-success">{form.success}</p>
      {/if}

      <button class="btn btn-primary" type="submit">Konto erstellen</button>
    </form>

    <p class="auth-switch">
      Bereits registriert? <a href="/auth/login">Zum Login</a>
    </p>
  </div>
</section>
