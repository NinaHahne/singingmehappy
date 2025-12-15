<script lang="ts">
  import type { GalleryPost as GalleryPostData } from '$lib/data/galleryData';
  import GalleryPost from './GalleryPost.svelte';

  let { year, posts, isFirstYear, isLastYear } = $props<{
    year: number;
    posts: GalleryPostData[];
  }>();
</script>

<!-- TODO: add scrollspy? -->
<!-- TODO: replace isFirstYear and isLastYear logic -> css in @layer components -->

<section id={`y_${year}`} class="year relative flex flex-col lg:flex-row lg:gap-8" class:!pt-0={isFirstYear}>
  <div
    class="menu-shadow sticky top-20 z-50 mb-20 flex w-full flex-shrink-0 justify-end self-start text-6xl leading-none lg:top-[calc(50dvh-0.5em)] lg:my-[35px] lg:w-auto lg:justify-start lg:pr-3 lg:text-[100px] xl:text-[120px]"
  >
    <span class="block w-[1em] lg:translate-x-[0.05em]">{year}</span>
  </div>

  <section class="posts-wrapper flex w-full flex-col">
    {#each posts as post (post.id)}
      <GalleryPost {post} {year} index={posts.indexOf(post)} />
    {/each}

    {#if isLastYear}
      <div class="mb-[15dvh] md:mb-[26dvh] lg:mb-[calc(50dvh-358px)]"></div>
    {/if}
  </section>
</section>
