<script>
  export let bird;
  import { navigate } from "svelte-navigator";
</script>

<div class={$$props.class} key={bird.uid}>
  <header class="card-header">
    <p class="card-header-title is-centered">
      {bird.name.spanish}
    </p>
  </header>
  <div
    class="card-image is-clickable"
    on:click={() => navigate(`/${bird.uid}`)}
  >
    <figure class="image is-square">
      <img src={bird.images.full} alt="pájaro" />
    </figure>
  </div>
  <footer class="card-footer">
    <div class="card-footer-item notification is-success is-clickable">
      <span class="icon">
        <i class="fas fa-light fa-heart" />
      </span>
    </div>
  </footer>
</div>

<style>
  .card-header {
    min-height: 4.5rem;
    background-color: #92daba;
  }
</style>
