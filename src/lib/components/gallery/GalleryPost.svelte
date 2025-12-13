<script lang="ts">
  import type { GalleryPost as GalleryPostData } from '$lib/data/galleryData';

  let { post, isFirstYear, isLastYear } = $props<{
    post: GalleryPostData;
    isFirstYear: boolean;
    isLastYear: boolean;
  }>();
  const basePostClass =
    'post flex w-full flex-col gap-4 border-b border-black py-4 lg:flex-row lg:justify-between lg:py-14';
  const baseAsideClass = 'flex flex-col';
  const baseItemsWrapClass = 'flex w-full flex-col gap-4 lg:gap-8';
  const baseItemClass = 'flex flex-col';
  const baseImageClass = 'inline-block';
  const baseCaptionClass = 'mt-2';
</script>

<section id={post.id}>
  {#if post.title}
    <h3 class="">{post.title}</h3>
  {/if}
  <section class={`${basePostClass} ${post.postClass ?? ''}`} class:!border-0={isLastYear}>
    <aside class={`${baseAsideClass} ${post.asideClass ?? 'lg:justify-end'}`}>
      {#if post.description}
        <p>{post.description}</p>
      {/if}
    </aside>
    <div class={`${baseItemsWrapClass} ${post.itemsWrapClass ?? 'items-end'}`}>
      {#each post.items as item (item.id)}
        <figure class={`${baseItemClass} ${item.itemClass ?? 'items-end'}`}>
          <picture class={`${baseImageClass} ${item.imageClass ?? 'max-w-md'}`}>
            <img src={item.image} alt={item.alt} class="block h-auto w-full" />
          </picture>

          {#if item.caption}
            <figcaption class={`${baseCaptionClass} ${item.captionClass ?? ''}`}>
              {item.caption}
            </figcaption>
          {/if}
        </figure>
      {/each}
    </div>
  </section>
</section>
