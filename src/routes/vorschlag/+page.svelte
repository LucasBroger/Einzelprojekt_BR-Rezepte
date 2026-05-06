<script>
  import { enhance } from '$app/forms';

  let { form } = $props();
  let submitting = $state(false);
</script>

<svelte:head>
  <title>Rezeptvorschlag | BR Rezepte</title>
</svelte:head>

<section class="section-block">
  <div class="page-intro">
    <h1>Neues Rezept vorschlagen</h1>
    <p>
      Teile ein brasilianisches Rezept mit uns. So hilfst du mit, die Plattform
      zu erweitern und neue Gerichte sichtbar zu machen.
    </p>
  </div>

  <div class="panel form-panel">
    {#if form?.success}
      <div class="alert alert-success">
        {form.message}
      </div>
    {/if}

    <form
      method="POST"
      class="recipe-form"
      use:enhance={() => {
        submitting = true;

        return async ({ update }) => {
          await update();
          submitting = false;
        };
      }}
    >
      <label class="field">
        <span>Rezeptname</span>
        <input
          name="name"
          type="text"
          value={form?.values?.name ?? ''}
          placeholder="z. B. Feijoada"
        />
        {#if form?.errors?.name}
          <small class="error-text">{form.errors.name}</small>
        {/if}
      </label>

      <label class="field">
        <span>Portugiesischer Name</span>
        <input
          name="name_portugiesisch"
          type="text"
          value={form?.values?.name_portugiesisch ?? ''}
          placeholder="Optional"
        />
      </label>

      <div class="form-grid">
        <label class="field">
          <span>Menüart</span>
          <select name="menueart">
            <option value="">Bitte wählen</option>
            <option value="Snack" selected={form?.values?.menueart === 'Snack'}>Snack</option>
            <option value="Hauptgericht" selected={form?.values?.menueart === 'Hauptgericht'}>Hauptgericht</option>
            <option value="Dessert" selected={form?.values?.menueart === 'Dessert'}>Dessert</option>
            <option value="Getränk" selected={form?.values?.menueart === 'Getränk'}>Getränk</option>
          </select>
          {#if form?.errors?.menueart}
            <small class="error-text">{form.errors.menueart}</small>
          {/if}
        </label>

        <label class="field">
          <span>Aufwand</span>
          <select name="aufwand">
            <option value="">Bitte wählen</option>
            <option value="leicht" selected={form?.values?.aufwand === 'leicht'}>leicht</option>
            <option value="mittel" selected={form?.values?.aufwand === 'mittel'}>mittel</option>
            <option value="schwer" selected={form?.values?.aufwand === 'schwer'}>schwer</option>
          </select>
          {#if form?.errors?.aufwand}
            <small class="error-text">{form.errors.aufwand}</small>
          {/if}
        </label>

        <label class="field">
          <span>Zeitaufwand</span>
          <input
            name="zeitaufwand"
            type="text"
            value={form?.values?.zeitaufwand ?? ''}
            placeholder="z. B. 45 Minuten"
          />
          {#if form?.errors?.zeitaufwand}
            <small class="error-text">{form.errors.zeitaufwand}</small>
          {/if}
        </label>
      </div>

      <label class="field">
        <span>Zutaten</span>
        <textarea
          name="zutaten"
          rows="6"
          placeholder="Bitte jede Zutat in eine neue Zeile schreiben"
        >{form?.values?.zutaten ?? ''}</textarea>
        {#if form?.errors?.zutaten}
          <small class="error-text">{form.errors.zutaten}</small>
        {/if}
      </label>

      <label class="field">
        <span>Kurzbeschreibung</span>
        <textarea
          name="beschreibung"
          rows="5"
          placeholder="Wie wird das Rezept zubereitet oder was macht es besonders?"
        >{form?.values?.beschreibung ?? ''}</textarea>
        {#if form?.errors?.beschreibung}
          <small class="error-text">{form.errors.beschreibung}</small>
        {/if}
      </label>

      <label class="field">
        <span>Dein Name</span>
        <input
          name="absenderName"
          type="text"
          value={form?.values?.absenderName ?? ''}
          placeholder="Optional"
        />
      </label>

      <button class="btn btn-primary" type="submit" disabled={submitting}>
        {#if submitting}
          Wird gesendet...
        {:else}
          Rezeptvorschlag absenden
        {/if}
      </button>
    </form>
  </div>
</section>