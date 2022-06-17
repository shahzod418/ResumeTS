<script>
  export let skills;
</script>

<div class="col-6">
  <table class="table align-middle">
    <tbody>
      {#each skills as { title, list }}
        <tr>
          <td>{title}</td>
          <td>{list.join(', ')}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<div class="col-6 align-self-center">
  <p>{skills[0].description}</p>
  <p>{skills[2].description}</p>
</div>

<style>
  td {
    font-size: 12px;
  }
  p {
    font-size: 12px;
  }
</style>
