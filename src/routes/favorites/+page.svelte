<script>
  import RecipeCard from "$lib/components/RecipeCard.svelte";
  let { data } = $props();
</script>

<svelte:head>
  <title>Favoriten | BR Rezepte</title>
</svelte:head>

<section class="hero-panel">
  <h1>Deine Favoriten</h1>
  <p>
    Hier findest du alle brasilianischen Rezepte, die du für später gespeichert
    hast.
  </p>
</section>

<section class="section-block">
  <div class="page-intro">
    <h2>Gespeicherte Rezepte</h2>
    <p>
      Behalte deine Lieblingsgerichte an einem Ort und greife schnell darauf zu.
    </p>
  </div>

  {#if data.rezepte?.length}
    <div class="favorites-grid">
      {#each data.rezepte as r}
        <div class="favorites-grid-item">
          <RecipeCard recipe={r} initialFavorite={true} />
        </div>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <p>Du hast noch keine Favoriten gespeichert.</p>
    </div>
  {/if}
</section>