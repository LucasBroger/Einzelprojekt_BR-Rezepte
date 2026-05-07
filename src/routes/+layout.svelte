<script>
  import '../app.css';
  import { page } from '$app/state';
  import favicon from '$lib/assets/favicon.svg';
  import { loginPrompt } from '$lib/stores/ui';
  import LoginPrompt from '$lib/components/LoginPrompt.svelte';

  let { data, children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
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
        <span class="brand-title">BR Rezepte</span>
        <span class="brand-subtitle">Brasilianisches Kochbuch</span>
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
      {@render children?.()}
    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© BR Rezepte — Dein brasilianisches Kochbuch mit Geschmack und Stil.</p>
    </div>
  </footer>

  <LoginPrompt
    open={$loginPrompt.open}
    title={$loginPrompt.title}
    message={$loginPrompt.message}
  />
</div>