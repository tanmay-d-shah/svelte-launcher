<script lang="ts">
  import { fetchIntegrations } from "./api/fetchIntegrations";
  import ItemsList from "./lib/ItemsList.svelte";
  import SearchBar from "./lib/SearchBar.svelte";
  import { formatSearchResults } from "./utils/formatSearchResults";

  let searchQuery = "";
  $: console.log(">>>query", searchQuery);
  $: resultsPromise = fetchIntegrations(searchQuery);
</script>

<div
  class="flex flex-col h-screen bg-white border border-[#EAEAEA] rounded-xl overflow-hidden"
>
  <SearchBar bind:query={searchQuery} />
  {#await resultsPromise then result}
    <ItemsList items={formatSearchResults(result.hits.hits)} />
  {/await}
</div>

<style>
</style>
