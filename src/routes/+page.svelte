<script>
  import {cardInfo} from '$lib/store.js';
  import Card from '$lib/components/Card.svelte';
  import CardMenu from '$lib/components/CardMenu.svelte';

  const handleClick = () => {
    $cardInfo.status = 'open';
    console.log('opened');
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div>
  <Card bind:card={$cardInfo} on:click={handleClick}/>
  {#if $cardInfo.status === 'open'}
  <CardMenu bind:card={$cardInfo} />
  {/if}
</div>

<style>
  div {
    position: relative;
    min-height: 200px;
    width: 30ch;
    margin: auto;
  }
</style>