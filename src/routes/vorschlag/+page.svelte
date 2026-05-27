<script>
  import { enhance } from '$app/forms';
  import { tick } from 'svelte';

  let { data, form } = $props();
  let submitting = $state(false);
  let successDialog;
  let formElement;

  async function focusFirstError(fieldName) {
    if (!fieldName || !formElement) return;

    await tick();

    const target = formElement.querySelector(`[name="${fieldName}"]`);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
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
    {#if form?.errors}
      <div class="alert alert-error" role="alert" tabindex="-1">
        Bitte prüfe deine Eingaben. Die markierten Felder sind noch nicht korrekt ausgefüllt.
      </div>
    {/if}

    <form
      method="POST"
      class="recipe-form"
      bind:this={formElement}
      use:enhance={() => {
        submitting = true;

        return async ({ result, update }) => {
          await update();
          submitting = false;

          if (result.type === 'failure') {
            await focusFirstError(result.data?.firstErrorField);
          }

          if (result.type === 'success' && successDialog) {
            successDialog.showModal();
          }
        };
      }}
    >
      <input type="hidden" name="absenderName" value={data.userName} />

      <div class="field field-readonly">
        <span>Eingereicht von</span>
        <div class="readonly-value">{data.userName}</div>
      </div>

      <label class="field">
        <span>Rezeptname</span>
        <input
          name="name"
          type="text"
          value={form?.values?.name ?? ''}
          placeholder="z. B. Feijoada"
          aria-invalid={form?.errors?.name ? 'true' : 'false'}
          aria-describedby={form?.errors?.name ? 'name-error' : undefined}
        />
        {#if form?.errors?.name}
          <small class="error-text" id="name-error">{form.errors.name}</small>
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
          <select
            name="menueart"
            aria-invalid={form?.errors?.menueart ? 'true' : 'false'}
            aria-describedby={form?.errors?.menueart ? 'menueart-error' : undefined}
          >
            <option value="">Bitte wählen</option>
            <option value="Snack" selected={form?.values?.menueart === 'Snack'}>Snack</option>
            <option value="Hauptgericht" selected={form?.values?.menueart === 'Hauptgericht'}>Hauptgericht</option>
            <option value="Dessert" selected={form?.values?.menueart === 'Dessert'}>Dessert</option>
            <option value="Getränk" selected={form?.values?.menueart === 'Getränk'}>Getränk</option>
          </select>
          {#if form?.errors?.menueart}
            <small class="error-text" id="menueart-error">{form.errors.menueart}</small>
          {/if}
        </label>

        <label class="field">
          <span>Aufwand</span>
          <select
            name="aufwand"
            aria-invalid={form?.errors?.aufwand ? 'true' : 'false'}
            aria-describedby={form?.errors?.aufwand ? 'aufwand-error' : undefined}
          >
            <option value="">Bitte wählen</option>
            <option value="leicht" selected={form?.values?.aufwand === 'leicht'}>leicht</option>
            <option value="mittel" selected={form?.values?.aufwand === 'mittel'}>mittel</option>
            <option value="aufwendig" selected={form?.values?.aufwand === 'aufwendig'}>aufwendig</option>
          </select>
          {#if form?.errors?.aufwand}
            <small class="error-text" id="aufwand-error">{form.errors.aufwand}</small>
          {/if}
        </label>

        <label class="field">
          <span>Zeitaufwand</span>
          <select
            name="zeitaufwand"
            aria-invalid={form?.errors?.zeitaufwand ? 'true' : 'false'}
            aria-describedby={form?.errors?.zeitaufwand ? 'zeitaufwand-error' : undefined}
          >
            <option value="">Bitte wählen</option>
            <option value="kurz" selected={form?.values?.zeitaufwand === 'kurz'}>kurz</option>
            <option value="mittel" selected={form?.values?.zeitaufwand === 'mittel'}>mittel</option>
            <option value="lang" selected={form?.values?.zeitaufwand === 'lang'}>lang</option>
          </select>
          {#if form?.errors?.zeitaufwand}
            <small class="error-text" id="zeitaufwand-error">{form.errors.zeitaufwand}</small>
          {/if}
        </label>
      </div>

      <label class="field">
        <span>Zutaten</span>
        <textarea
          name="zutaten"
          rows="6"
          placeholder="Bitte jede Zutat in eine neue Zeile schreiben"
          aria-invalid={form?.errors?.zutaten ? 'true' : 'false'}
          aria-describedby={form?.errors?.zutaten ? 'zutaten-error' : undefined}
        >{form?.values?.zutaten ?? ''}</textarea>
        {#if form?.errors?.zutaten}
          <small class="error-text" id="zutaten-error">{form.errors.zutaten}</small>
        {/if}
      </label>

      <label class="field">
        <span>Kurzbeschreibung</span>
        <textarea
          name="beschreibung"
          rows="5"
          placeholder="Wie wird das Rezept zubereitet oder was macht es besonders?"
          aria-invalid={form?.errors?.beschreibung ? 'true' : 'false'}
          aria-describedby={form?.errors?.beschreibung ? 'beschreibung-error' : undefined}
        >{form?.values?.beschreibung ?? ''}</textarea>
        {#if form?.errors?.beschreibung}
          <small class="error-text" id="beschreibung-error">{form.errors.beschreibung}</small>
        {/if}
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

<dialog class="success-dialog" bind:this={successDialog}>
  <div class="success-dialog-content">
    <h2>Erfolgreich gesendet</h2>
    <p>{form?.message || 'Dein Rezeptvorschlag wurde erfolgreich gespeichert.'}</p>
    <form method="dialog">
      <button class="btn btn-primary" type="submit">Schliessen</button>
    </form>
  </div>
</dialog>