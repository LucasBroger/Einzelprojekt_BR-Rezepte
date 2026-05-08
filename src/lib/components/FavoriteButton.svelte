<script>
  let { recipeId, initialFavorite = false, large = false } = $props();

  let isFavorite = $state(false);
  let loading = $state(false);

  $effect(() => {
    isFavorite = Boolean(initialFavorite);
  });

  async function toggleFavorite() {
    if (loading) return;

    loading = true;

    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          recipeId,
          action: isFavorite ? 'remove' : 'add'
        })
      });

      if (!response.ok) {
        throw new Error('Favorit konnte nicht aktualisiert werden');
      }

      isFavorite = !isFavorite;
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  }
</script>

<button
  type="button"
  class:large
  class:is-favorite={isFavorite}
  class="favorite-button"
  aria-pressed={isFavorite}
  aria-label={isFavorite ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
  title={isFavorite ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
  onclick={toggleFavorite}
  disabled={loading}
>
  {#if loading}
    <span class="favorite-label">...</span>
  {:else if isFavorite}
    <span class="favorite-icon">♥</span>
    {#if large}
      <span class="favorite-label">Gespeichert</span>
    {/if}
  {:else}
    <span class="favorite-icon">♡</span>
    {#if large}
      <span class="favorite-label">Speichern</span>
    {/if}
  {/if}
</button>