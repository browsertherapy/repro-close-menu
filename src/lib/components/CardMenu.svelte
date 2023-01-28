<script>

  export let card;

  const closeMenu = () => {
    card.status = 'active';
    console.log('closed');
  }

</script>

<article class="card-menu">
  <button on:click={closeMenu}>Close</button>
</article>

<style>

  article.card-menu {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    border-radius: 1rem;
  }

</style>
