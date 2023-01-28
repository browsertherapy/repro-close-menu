<script>

  export let card;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
  <article class="card" on:click>
      <h3>{card.label}</h3>
  </article>

<style>
  article.card {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 200px;
    font-size: 20px;

    background: #e8e8e8;

    border-radius: 1rem;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.08),
    0px 2px 2px rgba(0,0,0,0.08),
    0px 4px 4px rgba(0,0,0,0.08),
    0px 8px 8px rgba(0,0,0,0.08);
  }

</style>
