<script>
  import FavoriteButton from '$lib/components/FavoriteButton.svelte';

  let { data } = $props();

  const rezept = $derived(data.rezept);
  let personen = $state(data.rezept.portionen || 2);

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