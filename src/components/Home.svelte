<script>
  import { fetchBirds, birdsDummies } from "../api/index";
  import Birds from "./Birds.svelte";
  let birdsRequest = fetchBirds();
  //let birdsRequest = Promise.resolve({ data: birdsDummies });
  let query = "";
</script>

<div>
  <h1 class="title">Pajaros de Chile</h1>
  <p class="control has-icons-left has-icons-right">
    <input
      class="input"
      type="text"
      placeholder="picaflor"
      bind:value={query}
    />
    <span class="icon is-small is-left">
      <i class="fas fa-search" />
    </span>
  </p>
  {#await birdsRequest}
    <p>...cargando</p>
  {:then birds}
    <Birds birds={birds.data} {query} />
  {:catch error}
    <div class="notificaion is-danger">{error}</div>
  {/await}
</div>

<style>
  .title {
    text-align: center;
  }
</style>
