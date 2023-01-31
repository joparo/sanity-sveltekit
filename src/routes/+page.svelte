<script>
  export let data;
</script>

<header>
  <h1>Sanity + SvelteKit</h1>
</header>
<main>
  <h2>Pets</h2>
  {#if data.pets && data.pets.length}
    <ul>
      {#each data.pets as animal}
        <li>{animal.name}</li>
      {/each}
    </ul>
  {:else}
    <p>No pets to show</p>
  {/if}
  <h2>Data</h2>
  <div>
    {#if data.pets && data.pets.length}
      <pre>
    {JSON.stringify(data.pets, null, 2)}
    </pre>
    {:else}
      <p>
        Your data will show up here when you've configured everything correctly
      </p>
    {/if}
  </div>
</main>
