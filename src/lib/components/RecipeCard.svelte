<script>
  import FavoriteButton from '$lib/components/FavoriteButton.svelte';

  let { recipe, initialFavorite = false } = $props();

  const bildPfad = $derived(
    recipe?.bild ? `/images/${recipe.bild}` : '/default-recipe.svg'
  );
</script>

<article class="recipe-card">
  <a class="thumb" href={`/rezepte/${recipe._id}`}>
    <img
      src={bildPfad}
      alt={recipe.name}
      loading="lazy"
    />
  </a>

  <div class="info">
    <div class="recipe-card-head">
      <a class="title" href={`/rezepte/${recipe._id}`}>
        <h3>{recipe.name}</h3>
      </a>

      <FavoriteButton recipeId={recipe._id} initialFavorite={initialFavorite} />
    </div>

    {#if recipe.name_portugiesisch}
      <small class="sub">{recipe.name_portugiesisch}</small>
    {/if}

    <p class="meta">
      {recipe.menueart} • {recipe.aufwand} • {recipe.zeitaufwand}
    </p>
  </div>
</article>