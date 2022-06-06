<script>
  import { useParams } from "svelte-navigator";
  import { fetchBird } from "../api/index";

  export let uid;
  //const params = useParams();
  let birdReq = fetchBird(uid);

</script>

<div>
  <section class="hero is-medium is-success">
    <div class="hero-body">
      <div class="container has-text-centered">
        {#await birdReq}
          <p>...cargando</p>
        {:then bird}
          <header><p class="title">{bird.data.name.spanish}</p></header>
        {:catch error}
          <div class="notificaion is-danger">{error}</div>
        {/await}
      </div>
    </div>
  </section>

  <hr />

  <section class="blog-posts">
    <div class="container">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="columns featured-post is-multiline">
            <div class="column is-12 post">
              <article class="columns featured">
                <div class="column is-7 post-img ">
                  {#await birdReq}
                    <p>...cargando</p>
                  {:then bird}
                    <img src={bird.data.images.main} alt="pájaro" />
                  {:catch error}
                    <div class="notificaion is-danger">{error}</div>
                  {/await}
                </div>
                <div class="column is-5 featured-content va">
                  <div>
                    {#await birdReq}
                      <p>...cargando</p>
                    {:then bird}
                      <h3 class="heading post-category">
                        {bird.data.name.latin}
                      </h3>
                      <hr />
                      <h2 class="subtitle">Descripción</h2>
                      <p class="post-excerpt">
                        {bird.data.iucn.description ||
                          "Descripción no disponible"}
                      </p>
                      <hr />
                      <h2 class="subtitle">Habitat</h2>
                      <p class="post-excerpt">{bird.data.habitat}</p>
                    {:catch error}
                      <div class="notificaion is-danger">{error}</div>
                    {/await}
                  </div>
                  <br />
                  <div class="buttons">
                    <a href="/" class="button is-success">Regresar</a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <hr />
          <hr />
        </div>
      </div>
    </div>
  </section>
</div>
