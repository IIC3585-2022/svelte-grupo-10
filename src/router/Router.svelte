<script>
  import { Router, Route, link } from "svelte-navigator";
  import Home from "../components/Home.svelte";
  import BirdDetail from "../components/BridDetail.svelte";
  import Favorites from "../components/Favorites.svelte";
  import Navbar from "../components/Navbar.svelte";

  import { menu } from "../stores/store.js";

  let countValue;

  menu.subscribe(value => {
    console.log("menu es")
    console.log(value)
    countValue = value;
  });

</script>

<Router>
  <header class="navbar  is-spaced">
    <Navbar />
  </header>

  <main>
    <Route path="/">
    {#if countValue == 0}
      <Home />
    {:else if countValue==1}
      <Favorites />
    {/if}

    </Route>

    <Route path="/:uid" component={BirdDetail} primary={false} />

  </main>
</Router>
