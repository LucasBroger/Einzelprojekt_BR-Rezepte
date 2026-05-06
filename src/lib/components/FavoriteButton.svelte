<script>
  import { openLoginPrompt } from '$lib/stores/ui';

  let { recipeId, initialFavorite = false, large = false } = $props();

  let isFavorite = $state(!!initialFavorite);
  let loading = $state(false);

  async function toggleFavorite() {
    if (loading) return;

    loading = true;

    try {
      const res = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipeId })
      });

      if (res.status === 401) {
        openLoginPrompt({
          title: 'Login erforderlich',
          message:
            'Bitte melde dich an, um dieses Rezept zu deinen Favoriten hinzuzufügen.'
        });
        return;
      }

      if (!res.ok) {
        throw new Error('Favorit konnte nicht geändert werden');
      }

      const json = await res.json();
      isFavorite = !!json.favorited;
    } catch (err) {
      console.error(err);
    } finally {
      loading = false;
    }
  }
</script>

<button
  type="button"
  class="favorite-toggle"
  class:large={large}
  onclick={toggleFavorite}
  disabled={loading}
  aria-pressed={isFavorite}
  aria-label={isFavorite ? 'Aus Favoriten entfernen' : 'Als Favorit speichern'}
>
  <span class="favorite-icon">
    {isFavorite ? '♥' : '♡'}
  </span>

  {#if large}
    <span class="favorite-text">
      {#if isFavorite}
        Als Favorit gespeichert
      {:else}
        Als Favorit merken
      {/if}
    </span>
  {/if}
</button>