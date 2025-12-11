<script lang="ts">
  import type { GalleryPost as GalleryPostData } from '$lib/data/galleryData';
  import GalleryPost from './GalleryPost.svelte';

  let { year, posts, isFirstYear, isLastYear } = $props<{
    year: number;
    posts: GalleryPostData[];
    isFirstYear: boolean;
    isLastYear: boolean;
  }>();
</script>

<section id={`y_${year}`} class="year relative flex flex-col lg:flex-row lg:gap-8" class:!pt-0={isFirstYear}>
  <div
    class="menu-shadow sticky top-20 mb-20 flex w-full flex-shrink-0 justify-end self-start text-7xl leading-none lg:top-[calc(50dvh-0.5em)] lg:mb-0 lg:w-auto lg:justify-start lg:pr-3 lg:text-[200px]"
  >
    <span class="block w-[1em] lg:translate-x-3">{year}</span>
  </div>

  <div class="flex w-full flex-col gap-4 lg:gap-8">
    {#each posts as post}
      <GalleryPost {post} {isFirstYear} {isLastYear} />
    {/each}

    {#if isLastYear}
      <div class="mb-[15dvh] md:mb-[26dvh] lg:mb-[calc(50dvh-358px)]"></div>
    {/if}
  </div>
</section>
