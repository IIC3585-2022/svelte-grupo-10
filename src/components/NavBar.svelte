<script>
  let active = false;
</script>

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      on:click={() => (active = !active)}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div class={`navbar-menu ${active ? "is-active" : ""}`}>
    <div class="navbar-start">
      <a class="navbar-item" href="/"> Inicio </a>
      <a class="navbar-item" href="/"> Favoritos </a>
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: #92daba;
  }
  .navbar-burger {
    margin-left: 0;
  }
</style>
