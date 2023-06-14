<script>
  export let query = "";
</script>

<div class="sticky top-0 flex p-2">
  <div class="flex flex-1">
    <textarea
      class="flex-1 resize-none overflow-x-hidden border-0 bg-white p-2 pl-10 text-base font-medium text-gray-900 outline-none ring-0 placeholder:text-[#868E9B] focus:outline-none"
      name="search"
      placeholder="⌘ + Space for Clyde"
      bind:value={query}
    />
  </div>
</div>
