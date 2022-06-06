<script>
    import {store} from "../stores/store.js"
    import BirdCard from "./BirdCard.svelte";

</script>


<div>
    <div class="birds container">
        {#each $store.map((item) => {return item.item}) as bird}
        <BirdCard {bird} class="card" />
    {/each}
    </div>
</div>

<style>
    .birds {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      text-align: center;
    }
    @media only screen and (max-width: 768px) {
      .birds {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        text-align: center;
      }
    }
  </style>
