<script>
  import getLinks from '../../../../api/getLinks';

  export let id;

  const links = getLinks(id);
</script>

<div class="p-1">
  {#each links as { name, link }}
    <p class="small text-muted">{`${name}: ${link}`}</p>
  {/each}
</div>
