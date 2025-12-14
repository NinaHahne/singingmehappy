<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import Gallery from '$lib/components/gallery/Gallery.svelte';
</script>

<HeaderAbsolute />

<section class="content-wrapper pt-20">
  <section class="content-section relative">
    <div class="left-col left-col-smaller">
      <h1 class="text-left text-4xl font-normal lg:text-right">Bildergalerie</h1>
    </div>
  </section>
</section>

<Gallery />
