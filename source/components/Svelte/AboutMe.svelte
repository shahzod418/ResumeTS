<script>
  export let about;

  const { nationality, age, birthday, description } = about;
</script>

<div class="col-6">
  <table class="table">
    <tbody>
      <tr>
        <td>{nationality.title}</td>
        <td>{nationality.text}</td>
      </tr>
      <tr>
        <td>{age.title}</td>
        <td>{age.text}</td>
      </tr>
      <tr>
        <td>{birthday.title}</td>
        <td>{birthday.text}</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="col-6 align-self-center">
  {#each description.split('\n') as text}
    <p>{text}</p>
  {/each}
</div>

<style>
  td {
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }
</style>
