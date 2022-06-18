<script>
  import Link from './Link.svelte';

  export let drafts;
</script>

<div class="container">
  {#each drafts as draft}
    <div class="row mb-1">
      <h4>{draft.type}</h4>
    </div>
    <div class="row mb-1 p-1">
      {#each draft.projects as { id, title, shortDescription, stack }}
        <div class="col-12 mb-1">
          <h5>{title}</h5>
          <Link {id} />
          <p>{shortDescription}</p>
          {#if id === 'resume' || id === 'brainGame' || id === 'cognitiveDistortions'}
            <p class="html2pdf__page-break mb-5"><i>{stack}</i></p>
          {:else}
            <p><i>{stack}</i></p>
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
</style>
