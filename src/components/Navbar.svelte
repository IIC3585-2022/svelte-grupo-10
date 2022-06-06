<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./Home.svelte";
  import Favorites from "./Favorites.svelte";

  export let menu = 1;
</script>

<div class="container">
  <div class="navbar-brand">
    <a href="/" class="navbar-item">
      <h1 class="is-size-4">Aves de Chile</h1>
    </a>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      data-target="collapse"
    >
      <span aria-hidden="true" />

      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div id="collapse" class="navbar-menu is-paddingless">
    <nav class="navbar-end">
      <a href="/" class="navbar-item">Inicio</a>
      <a href="favorites" class="navbar-item">Favoritos</a>
    </nav>
  </div>
</div>

<style>
  ul#menu li {
    display: inline;
  }
</style>
