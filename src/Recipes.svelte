<script>
  import RecipeCard from "./RecipeCard.svelte";
  export let recipes;
</script>

<div>
  <ul>
    {#each recipes as recipe}
      <RecipeCard {recipe} />
    {/each}
  </ul>
</div>
