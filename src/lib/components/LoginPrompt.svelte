<script>
  import { goto } from "$app/navigation";

  let {
    open = false,
    title = "Login erforderlich",
    message = "Du musst eingeloggt sein.",
    onClose = () => {},
  } = $props();

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  function goTo(path) {
    onClose();
    goto(path);
  }
</script>

{#if open}
  <div
    class="modal-backdrop"
    role="presentation"
    onclick={handleBackdropClick}
    onkeydown={handleKeydown}
  >
    <div
      class="modal-card login-prompt"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-prompt-title"
      aria-describedby="login-prompt-message"
    >
      <h2 id="login-prompt-title">{title}</h2>
      <p id="login-prompt-message">{message}</p>

      <div class="modal-actions">
        <button
          type="button"
          class="btn btn-primary"
          onclick={() => goTo("/auth/login")}
        >
          Login
        </button>

        <button type="button" class="btn btn-secondary" onclick={onClose}>
          Schliessen
        </button>
      </div>
    </div>
  </div>
{/if}
