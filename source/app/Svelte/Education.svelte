<script>
  export let education;

  const { higher, additional } = education;
</script>

<div class="table-responsive">
  <table class="table align-middle">
    <thead>
      <tr>
        <th>{higher.title}</th>
        <th>{additional.title}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {#each higher.universities as { university, faculty, specialisation, date }}
            <div class="p-1">
              <h5>{university}</h5>
              <p>{faculty}</p>
              <p>{specialisation}</p>
              <p><i>{date}</i></p>
            </div>
          {/each}
        </td>
        <td>
          <div class="p-1">
            {#each additional.schools as { school, courses }}
              {#each courses as { name, date }}
                <div class="mb-1">
                  <h5>{school}</h5>
                  <p>{name}</p>
                  <p><i>{date}</i></p>
                </div>
              {/each}
            {/each}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  h5 {
    font-size: 16px;
  }

  td {
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }
</style>
