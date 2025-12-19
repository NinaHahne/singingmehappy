<script lang="ts">
  import { galleryData } from '$lib/data/galleryData';
  import GalleryYear from './GalleryYear.svelte';
</script>

<section class="gallery content-wrapper">
  <section class="content-section relative">
    <div
      class="left-col left-col-smaller menu-shadow sticky top-20 z-20 -mb-[1lh] mr-[1em] self-end text-right text-6xl leading-none lg:top-[calc(50dvh-0.5em)] lg:my-[35px] lg:mr-0 lg:self-start lg:text-[100px] xl:text-[120px]"
    >
      <span class="block lg:translate-x-[0.05em]">20</span>
    </div>

    <div class="flex w-full flex-col gap-4 lg:gap-0">
      {#each galleryData as yearData, index}
        <GalleryYear year={yearData.year} posts={yearData.posts} />
      {/each}
    </div>
  </section>
</section>

<style>
  .content-section {
    @apply gap-0 pt-0 md:flex-col md:pt-0 lg:flex-row;
  }
</style>
