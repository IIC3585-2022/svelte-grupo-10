<script>
  import { fetchBirds, birdsDummies } from "../api/index";
  import Birds from "./Birds.svelte";
  let birdsRequest = fetchBirds();
  //let birdsRequest = Promise.resolve({ data: birdsDummies });
</script>

<div class="container is-fluid main">
  <h1 class="title">Pajaros de Chile</h1>
  {#await birdsRequest}
    <p>...cargando</p>
  {:then birds}
    <Birds birds={birds.data} />
  {:catch error}
    <div class="notificaion is-danger">{error}</div>
  {/await}
</div>

<style>
  .main {
    text-align: center;
  }
</style>
