<script>
  export let bird;
  import { navigate } from "svelte-navigator";

  import { store, menu } from "../stores/store.js";

  const addToArray = (item) => {
    console.log(item);
    $store = [
      ...$store,
      {
        item,
      },
    ];
  };
  let storeIds;
  $: storeIds = $store.map((item) => {
    return item.item.uid;
  });

  function removeFromFavorites(toRemove) {
    $store = $store.filter(function (value, index, arr) {
      if (value.item.uid != toRemove.uid) return value;
    });
  }

  let countValue;

  menu.subscribe(value => {
    countValue = value;
  });
  const editMenu = (item) => {
  console.log("menu aaa")
    $menu = item;
  };


</script>

<div class={$$props.class} key={bird.uid}>
  <header class="card-header">
    <p class="card-header-title is-centered">
      {bird.name.spanish}
    </p>
  </header>
  <div
    class="card-image is-clickable"
    on:click={() => {
      editMenu(2);
      navigate(`/${bird.uid}`);
      }}
  >
    <figure class="image is-square">
      <img src={bird.images.full} alt="pájaro" />
    </figure>
  </div>
  <footer class="card-footer">
    <div
      class="card-footer-item notification is-success is-clickable"
      on:click={storeIds.includes(bird.uid)
        ? removeFromFavorites(bird)
        : addToArray(bird)}
    >
      <span class="icon">
        <i
          class="fas fa-light fa-heart"
          class:favourite={storeIds.includes(bird.uid)}
        />
      </span>
    </div>
  </footer>
</div>

<style>
  .card-header {
    min-height: 4.5rem;
    background-color: #92daba;
  }
  .favourite {
    color: rgb(230, 85, 85);
  }
</style>
