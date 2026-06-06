<script>
  import '../app.css';
  import { page } from '$app/state';
  import { loginPrompt, closeLoginPrompt } from '$lib/stores/ui';
  import LoginPrompt from '$lib/components/LoginPrompt.svelte';

  let { data, children } = $props();
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Brasilianische Rezepte entdecken, speichern und einfach nachkochen."
  />
</svelte:head>

<a class="skip-link" href="#main-content">Direkt zum Inhalt springen</a>

<div class="site-shell">
  <header class="site-header">
    <div class="site-header-inner">
      <a href="/" class="brand" aria-label="Zur Startseite">
        <img
          src="/br-rezepte-logo.svg"
          alt="BR Rezepte Logo"
          class="brand-logo"
        />
        <div class="brand-copy">
          <span class="brand-title">BR Rezepte</span>
          <span class="brand-subtitle">Brasilianisches Kochbuch</span>
        </div>
      </a>

      <div class="nav-side">
        {#if data.user}
          <p class="user-badge">
            Eingeloggt als <strong>{data.user.email}</strong>
          </p>
        {/if}

        <nav class="site-nav" aria-label="Hauptnavigation">
          <a href="/" class:active={page.url.pathname === '/'}>Startseite</a>

          <a href="/rezepte" class:active={page.url.pathname.startsWith('/rezepte')}>
            Rezepte
          </a>

          <a href="/vorschlag" class:active={page.url.pathname.startsWith('/vorschlag')}>
            Vorschlag
          </a>

          {#if data.user}
            <a href="/favorites" class:active={page.url.pathname === '/favorites'}>
              Favoriten
            </a>
            <a href="/auth/logout">Logout</a>
          {:else}
            <a href="/auth/login" class:active={page.url.pathname.startsWith('/auth/login')}>
              Login
            </a>

            <a href="/auth/register" class:active={page.url.pathname.startsWith('/auth/register')}>
              Registrieren
            </a>
          {/if}
        </nav>
      </div>
    </div>
  </header>

  <main id="main-content" class="page-main">
    <div class="container">
      {@render children()}
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="/" class="footer-brand-link" aria-label="Zur Startseite">
          <img
            src="/br-rezepte-logo.svg"
            alt="BR Rezepte Logo"
            class="footer-logo"
          />
          <div class="footer-brand-copy">
            <span class="footer-title">BR Rezepte</span>
            <span class="footer-subtitle">Brasilianisches Kochbuch</span>
          </div>
        </a>

        <p class="footer-text">
          Entdecke brasilianische Klassiker, speichere deine Favoriten und finde
          neue Rezepte für Alltag, Familie und besondere Anlässe an einem Ort.
        </p>
      </div>

      <nav class="footer-nav" aria-label="Footer Navigation">
        <h2>Navigation</h2>
        <a href="/">Startseite</a>
        <a href="/rezepte">Rezepte</a>
        <a href="/vorschlag">Vorschlag</a>
        <a href="/favorites">Favoriten</a>
      </nav>

      <nav class="footer-nav" aria-label="Rechtliches">
        <h2>Rechtliches</h2>
        <a href="/footer/impressum">Impressum</a>
        <a href="/footer/datenschutz">Datenschutz</a>
        <a href="/footer/nutzungsbedingungen">Nutzungsbedingungen</a>
      </nav>
    </div>

    <div class="container footer-bottom">
      <p>© BR Rezepte — Hochschulprojekt im Modul Prototyping</p>
    </div>
  </footer>

  <LoginPrompt
    open={$loginPrompt.open}
    title={$loginPrompt.title}
    message={$loginPrompt.message}
    onClose={closeLoginPrompt}
  />
</div>