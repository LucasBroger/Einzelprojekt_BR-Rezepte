<script>
  import RecipeCard from '$lib/components/RecipeCard.svelte';

  let { data } = $props();

  let filters = $derived(data.filters);
</script>

<svelte:head>
  <title>Rezepte | BR Rezepte</title>
</svelte:head>

<section class="section-block">
  <div class="page-intro">
    <h1>Alle Rezepte</h1>
    <p>Finde passende brasilianische Gerichte über Suche, Menüart, Aufwand und Zeitaufwand.</p>
  </div>

  <form class="filters" method="GET">
    <div class="field">
      <span>Suche</span>
      <input
        type="search"
        name="q"
        placeholder="Rezeptname oder portugiesischer Name"
        value={filters.search}
      />
    </div>

    <div class="field">
      <span>Menüart</span>
      <select name="menueart" value={filters.menueart}>
        <option value=''>Alle</option>
        <option value="Vorspeise">Vorspeise</option>
        <option value="Hauptgericht">Hauptgericht</option>
        <option value="Snack">Snack</option>
        <option value="Dessert">Dessert</option>
        <option value="Getränk">Getränk</option>
      </select>
    </div>

    <div class="field">
      <span>Aufwand</span>
      <select name="aufwand" value={filters.aufwand}>
        <option value=''>Alle</option>
        <option value="leicht">leicht</option>
        <option value="mittel">mittel</option>
        <option value="aufwendig">aufwendig</option>
      </select>
    </div>

    <div class="field">
      <span>Zeitaufwand</span>
      <select name="zeitaufwand" value={filters.zeitaufwand}>
        <option value=''>Alle</option>
        <option value="kurz">kurz</option>
        <option value="mittel">mittel</option>
        <option value="lang">lang</option>
      </select>
    </div>

    <div class="field">
      <span>Sortierung</span>
      <select name="sort" value={filters.sort}>
        <option value="name_asc">Name A–Z</option>
        <option value="name_desc">Name Z–A</option>
        <option value="aufwand_asc">Aufwand aufsteigend</option>
        <option value="aufwand_desc">Aufwand absteigend</option>
        <option value="zeitaufwand_asc">Zeitaufwand aufsteigend</option>
        <option value="zeitaufwand_desc">Zeitaufwand absteigend</option>
      </select>
    </div>

    <div class="filter-actions">
      <button class="btn btn-primary" type="submit">Filter anwenden</button>
      <a class="btn btn-secondary" href="/rezepte">Filter zurücksetzen</a>
    </div>
  </form>
</section>

{#if data.rezepte.length > 0}
  <section class="section-block">
    <div class="card-grid">
      {#each data.rezepte as recipe}
        <RecipeCard recipe={recipe} initialFavorite={recipe.initialFavorite} />
      {/each}
    </div>
  </section>
{:else}
  <section class="section-block">
    <div class="empty-state">
      <p>Keine Rezepte gefunden. Passe deine Filter an oder setze sie zurück.</p>
    </div>
  </section>
{/if}