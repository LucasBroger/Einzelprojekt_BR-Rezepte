<script>
  import RecipeCard from "$lib/components/RecipeCard.svelte";
  import TrendingSlider from "$lib/components/TrendingSlider.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Startseite | BR Rezepte</title>
</svelte:head>

<section class="hero-panel">
  <h1>Brasilianisch kochen mit Stil</h1>
  <p>
    Entdecke traditionelle brasilianische Rezepte, speichere deine Favoriten und
    finde neue Gerichte für Alltag, Familie und besondere Anlässe.
  </p>

  <div class="searchbar">
    <a class="btn btn-primary" href="/rezepte">Rezepte entdecken</a>
    <a class="btn btn-secondary" href="/favorites">Zu den Favoriten</a>
  </div>
</section>

<TrendingSlider recipes={data.trending} />

<section class="section-block">
  <div class="card-grid">
    <article class="panel">
      <div class="page-intro">
        <h2>Authentische Küche</h2>
        <p>
          Von herzhaften Klassikern bis zu süssen Spezialitäten findest du
          Gerichte mit brasilianischem Charakter.
        </p>
      </div>
    </article>

    <article class="panel">
      <div class="page-intro">
        <h2>Einfach stöbern</h2>
        <p>
          Suche gezielt nach Rezeptnamen und navigiere schnell durch die
          Sammlung.
        </p>
      </div>
    </article>

    <article class="panel">
      <div class="page-intro">
        <h2>Favoriten speichern</h2>
        <p>
          Favorisiere Rezepte, die du später wiederanschauen willst, und baue dir dein
          eigenes brasilianisches Kochbuch auf.
        </p>
      </div>
    </article>
  </div>
</section>