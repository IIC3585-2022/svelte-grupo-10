<script>
  import { useParams } from "svelte-navigator";
  import { fetchBird } from "../api/index";

  export let uid;
  //const params = useParams();
  let birdReq = fetchBird(uid);
  export let location;
  export let navigate;
</script>

<div>
  {#await birdReq}
    <p>...cargando</p>
  {:then bird}
    <header><p class="title">{bird.data.name.spanish}</p></header>
  {:catch error}
    <div class="notificaion is-danger">{error}</div>
  {/await}
</div>
