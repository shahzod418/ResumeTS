<script>
  import projectsLinks from '../../assets/links/projectsLinks';

  export let id;

  const links = projectsLinks.find((project) => project.id === id).links;
</script>

{#each links as { name, link }}
  <p class="small text-muted">{`${name}: ${link}`}</p>
{/each}

<style>
  .small {
    margin-bottom: 0;
  }
</style>
