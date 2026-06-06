<script>
  import { onMount } from 'svelte';

  let { recipes = [] } = $props();
  let current = $state(0);

  function next() {
    if (!recipes.length) return;
    current = (current + 1) % recipes.length;
  }

  function prev() {
    if (!recipes.length) return;
    current = (current - 1 + recipes.length) % recipes.length;
  }

  function getBildPfad(recipe) {
    return recipe?.bild ? `/images/${recipe.bild}` : '/default-recipe.svg';
  }

  onMount(() => {
    if (recipes.length <= 1) return;

    const interval = setInterval(() => {
      next();
    }, 4500);

    return () => clearInterval(interval);
  });
</script>

{#if recipes?.length}
  <section class="section-block">
    <div class="page-intro">
      <h2>Angesagte Rezepte</h2>
      <p>
        Die beliebtesten Rezepte auf unserer Website.
      </p>
    </div>

    <div class="trending-slider">
      {#each recipes as recipe, index}
        <a
          href={`/rezepte/${recipe._id}`}
          class:active={index === current}
          class="slide"
          aria-hidden={index === current ? 'false' : 'true'}
        >
          <img
            src={getBildPfad(recipe)}
            alt={recipe.name}
            loading="lazy"
          />

          <div class="slide-overlay">
            <span class="slide-badge">Top Rezept</span>
            <h3>{recipe.name}</h3>

            {#if recipe.name_portugiesisch}
              <p class="slide-sub">{recipe.name_portugiesisch}</p>
            {/if}

            <p class="slide-meta">
              {recipe.menueart} • {recipe.aufwand} • {recipe.zeitaufwand}
              {#if recipe.views !== undefined}
                • {recipe.views} Aufrufe
              {/if}
            </p>
          </div>
        </a>
      {/each}

      <button
        class="slider-btn prev"
        type="button"
        onclick={prev}
        aria-label="Vorheriges Rezept"
      >
        ‹
      </button>

      <button
        class="slider-btn next"
        type="button"
        onclick={next}
        aria-label="Nächstes Rezept"
      >
        ›
      </button>

      <div class="slider-dots">
        {#each recipes as _, index}
          <button
            type="button"
            class:active={index === current}
            aria-label={`Zu Rezept ${index + 1}`}
            onclick={() => (current = index)}
          ></button>
        {/each}
      </div>
    </div>
  </section>
{/if}