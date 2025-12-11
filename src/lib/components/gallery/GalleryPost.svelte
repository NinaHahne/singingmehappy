<script lang="ts">
  import type { GalleryPost as GalleryPostData } from '$lib/data/galleryData';

  let { post, isFirstYear, isLastYear } = $props<{
    post: GalleryPostData;
    isFirstYear: boolean;
    isLastYear: boolean;
  }>();
</script>

<section
  class="post flex w-full flex-col gap-4 border-b border-black py-4 lg:flex-row-reverse lg:items-end lg:justify-between lg:py-14"
  class:!border-0={isLastYear}
  class:!pt-0={isFirstYear}
>
  <picture>
    <img src={post.image} alt={post.alt} class={post.class ?? 'lg:max-w-md'} />
  </picture>

  <aside class="lg:max-w-40">{post.caption}</aside>
</section>
