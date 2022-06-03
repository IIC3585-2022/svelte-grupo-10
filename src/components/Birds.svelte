<script>
  import BirdCard from "./BirdCard.svelte";
  export let birds;
</script>

<div class="birds">
  <!-- {#each birds as bird}
    <BirdCard {bird} class="card box" />
  {/each} -->
  <section class="section">

    <div class="columns is-multiline is-mobile">
      {#each birds as bird}
      <div class="column is-one-quarter">
        <code>  <BirdCard {bird} class="card box" /></code>
      </div>
      {/each} 
    </div>

 </section>
  
</div>

<style>
  .birds {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
  }
  .birds :global(.card) {
    width: 50vw;
    height: min-content;
  }
</style>
