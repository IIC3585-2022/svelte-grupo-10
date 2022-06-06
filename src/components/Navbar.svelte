<script>
    import { Router, Route, Link } from "svelte-navigator";
	import Home from "./Home.svelte";
	import Favorites from "./Favorites.svelte";
	
	export let menu = 1;
</script>

<style>
	ul#menu li{
		display : inline;
	}
</style>


<div class="container">
    <div class="navbar-brand">
    <a href="/" class="navbar-item">
        <h1 class="is-size-4">Pajaros de Chile
        </h1>
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" data-target="collapse" >
        <span aria-hidden="true" />
        
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="collapse" class="navbar-menu is-paddingless">
    <nav class="navbar-end">
        <Link to="/" class="navbar-item">Home</Link>
        <Link to="favorites" class="navbar-item">Favorites</Link>
    </nav>
    </div>
</div>



