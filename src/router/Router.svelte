<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "../components/Home.svelte";
  import BirdDetail from "../components/BridDetail.svelte";
</script>

<div>
  <Router>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/:uid" component={BirdDetail} primary={false} />
  </Router>
</div>
