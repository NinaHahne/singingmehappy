<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';

  let { title = 'Seite in Arbeit' } = $props();
</script>

<HeaderAbsolute />
<section class="flex flex-col items-center justify-center pt-20 text-center">
  <h1 class="text-black">{title}</h1>
  <p class="text-xl font-light italic text-gray-600 md:text-2xl">Diese Seite ist noch in Arbeit.</p>
</section>
