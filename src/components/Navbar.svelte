<script>
  let active = false;
  import { menu } from "../stores/store.js";
  import { navigate } from "svelte-navigator";

  const editMenu = (item) => {
  console.log("menu aaa")
    $menu = item;
  };

</script>

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="navbar-item" href="/">Aves de Chile</a>
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
      <p
        class="navbar-item is-clickable"
        on:click={() => {
          editMenu(0)
          navigate(`/`);
          }}
      >Inicio</p>
      <p
        class="navbar-item is-clickable"
        on:click={() => {
          editMenu(1)
          navigate(`/`);
}}
      >Favoritos</p>
  </div>
</nav>

<style>
  nav {
    background-color: #92daba;
  }
</style>
