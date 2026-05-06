<script>
  import FavoriteButton from '$lib/components/FavoriteButton.svelte';

  let { data } = $props();
  let rezept = data.rezept;

  let personen = $state(rezept.portionen || 2);

  function normalizeNumber(value) {
    const num = Number(value);
    return Number.isFinite(num) ? num : null;
  }

  function formatScaledNumber(value, basePortionen, zielPortionen) {
    const num = normalizeNumber(value);
    if (num === null || !basePortionen) return null;

    const scaled = (num / basePortionen) * zielPortionen;
    return scaled.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
  }

  function formatZutat(zutat) {
    if (typeof zutat === 'string') {
      return zutat;
    }

    if (zutat && typeof zutat === 'object') {
      const scaledMenge = formatScaledNumber(zutat.menge, rezept.portionen, personen);

      if (scaledMenge !== null) {
        return `${scaledMenge} ${zutat.einheit || ''} ${zutat.name || ''}`.trim();
      }

      return [zutat.menge, zutat.einheit, zutat.name].filter(Boolean).join(' ').trim() || 'Zutat';
    }

    return String(zutat);
  }

  function updatePersonen(delta) {
    const next = personen + delta;
    if (next >= 1 && next <= 20) {
      personen = next;
    }
  }
</script>

<svelte:head>
  <title>{rezept.name} | BR Rezepte</title>
</svelte:head>

<section class="recipe-detail">
  <div class="recipe-hero">
    <div class="recipe-image-wrap">
      <img class="recipe-image" src={rezept.bild} alt={rezept.name} loading="lazy" />
    </div>

    <div class="recipe-summary panel">
      <p class="eyebrow">Brasilianisches Rezept</p>
      <h1>{rezept.name}</h1>

      {#if rezept.name_portugiesisch}
        <p class="recipe-portuguese">{rezept.name_portugiesisch}</p>
      {/if}

      {#if rezept.beschreibung}
        <p class="recipe-description">{rezept.beschreibung}</p>
      {/if}

      <FavoriteButton
        recipeId={rezept._id}
        initialFavorite={data.isFavorite}
        large={true}
      />

      <div class="recipe-facts">
        <div class="fact-card">
          <span>Menüart</span>
          <strong>{rezept.menueart || 'Keine Angabe'}</strong>
        </div>
        <div class="fact-card">
          <span>Typ</span>
          <strong>{rezept.typ || 'Keine Angabe'}</strong>
        </div>
        <div class="fact-card">
          <span>Aufwand</span>
          <strong>{rezept.aufwand || 'Keine Angabe'}</strong>
        </div>
        <div class="fact-card">
          <span>Zeitaufwand</span>
          <strong>{rezept.zeitaufwand || 'Keine Angabe'}</strong>
        </div>
        <div class="fact-card">
          <span>Aufrufe</span>
          <strong>{rezept.views || 0}</strong>
        </div>
      </div>
    </div>
  </div>

  <div class="recipe-content-grid">
    <section class="panel">
      <div class="section-heading">
        <h2>Zutaten</h2>

        <div class="portion-control" aria-label="Portionen anpassen">
          <button type="button" class="portion-btn" onclick={() => updatePersonen(-1)}>-</button>
          <span>{personen} Personen</span>
          <button type="button" class="portion-btn" onclick={() => updatePersonen(1)}>+</button>
        </div>
      </div>

      {#if rezept.zutaten?.length}
        <ul class="ingredients-list">
          {#each rezept.zutaten as zutat}
            <li>{formatZutat(zutat)}</li>
          {/each}
        </ul>
      {:else}
        <p class="empty-inline">Für dieses Rezept wurden noch keine Zutaten hinterlegt.</p>
      {/if}
    </section>

    <section class="panel">
      <div class="section-heading">
        <h2>Zubereitung</h2>
      </div>

      {#if rezept.zubereitungsschritte?.length}
        <ol class="steps-list">
          {#each rezept.zubereitungsschritte as schritt}
            <li>{schritt}</li>
          {/each}
        </ol>
      {:else}
        <p class="empty-inline">
          Für dieses Rezept sind noch keine Zubereitungsschritte vorhanden.
        </p>
      {/if}
    </section>
  </div>

  {#if rezept.tipps?.length}
    <section class="panel">
      <div class="section-heading">
        <h2>Tipps</h2>
      </div>

      <ul class="tips-list">
        {#each rezept.tipps as tipp}
          <li>{tipp}</li>
        {/each}
      </ul>
    </section>
  {/if}
</section>