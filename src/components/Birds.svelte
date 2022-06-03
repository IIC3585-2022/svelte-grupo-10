<script>
  import BirdCard from "./BirdCard.svelte";
  export let birds;
  export let query;
  const searchText = (text, query) => {
    const textFormatted = text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/gi, "")
      .replaceAll(".", "");
    const queryFormatted = query
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/gi, "");
    const regex = new RegExp(queryFormatted, "gi");
    if (textFormatted.search(regex) !== -1) {
      return true;
    }
    return false;
  };
</script>

<div class="birds container">
  {#each birds.filter((bird) => searchText(bird.name.spanish, query)) as bird}
    <BirdCard {bird} class="card" />
  {/each}
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
