<script lang="ts">
  let { title = 'Seite in Arbeit' } = $props();
</script>

<section class="flex flex-col items-center justify-center pt-20 text-center">
  <h1 class="text-dusty-brown mb-2 text-3xl font-semibold">{title}</h1>
  <p class="text-lg italic text-gray-600">Diese Seite ist noch in Arbeit.</p>
</section>
