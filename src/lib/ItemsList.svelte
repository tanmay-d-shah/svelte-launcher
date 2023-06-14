<script lang="ts">
  import type { SearchHits, SearchItem } from "../types/index";
  import ItemsRow from "./ItemsRow.svelte";
  export let items: SearchItem[] = [];
  console.log(">>>items", items);
</script>

<div>
  <ul
    class="space-y-1 p-2 border-t border-t-gray-200 bg-white overflow-y-auto hide-scroll-bar"
  >
    {#each items as item}
      <li
        class="flex h-[68px] w-full cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors bg-white hover:bg-gray-100"
      >
        <div>
          <img src={item.iconURL} alt="logo" class="h-5 w-5 flex-shrink-0" />
        </div>
        <div class="min-w-0 flex-1">
          <ItemsRow title={item.title} description={item.description} />
        </div>
      </li>
    {/each}
  </ul>
</div>
