<script lang="ts">
let count = $state(0);
</script>

<button class="bg-gray-300" type="button" onclick={() => count++}>
  Count: {count}
</button>
