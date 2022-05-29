<script>
  import { searchRequest } from "./api/index";
  import Recipes from "./Recipes.svelte";
  let ingredients = [];
  let getRecipes;
  const handleDelete = (index) => {
    const ingredientsCopy = [...ingredients];
    ingredientsCopy.splice(index, 1);
    ingredients = ingredientsCopy;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    getRecipes = searchRequest(ingredients.join(","));
  };
</script>

<div class="container is-fluid main">
  <h1 class="title">Ingresa tus ingredientes</h1>
  <button
    class="button is-primary"
    type="button"
    on:click={() => (ingredients = [...ingredients, ""])}
  >
    Agregar Ingredientes +
  </button>
  <form on:submit={onSubmit}>
    {#each ingredients as ingredient, index}
      <div class="input-container" key={index}>
        <input
          class="input"
          type="text"
          bind:value={ingredient}
          placeholder="onion"
          required="true"
        />
        <button
          type="button"
          class="button is-danger"
          on:click={() => handleDelete(index)}
        >
          -
        </button>
      </div>
    {/each}
    {#if ingredients.length}
      <div class="input-container horizontal">
        <button class="divisor button is-success"> Buscar Receta </button>
      </div>
    {/if}
  </form>
  {#if getRecipes}
    {#await getRecipes}
      <div class="container">...cargando</div>
    {:then response}
      <Recipes recipes={response.data} />
    {:catch error}
      <div class="notification is-danger">{error}</div>
    {/await}
  {/if}
</div>

<style>
  .main {
    text-align: center;
  }
  .input-container {
    display: flex;
    justify-content: center;
    margin: 5px;
  }
  .horizontal {
    flex-direction: row;
    justify-content: center;
  }
</style>
