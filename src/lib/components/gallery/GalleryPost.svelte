<script lang="ts">
  import type { GalleryPost as GalleryPostData } from '$lib/data/galleryData';

  let { post, year, index } = $props<{
    post: GalleryPostData;
    year: number;
    index: number;
  }>();

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const derivedId = post.id ?? slugify(`${post.title ?? post.description ?? 'post'}-${year}-${index}`);

  const basePostClass = 'flex w-full flex-col gap-4 lg:flex-row lg:justify-between ';
  const baseAsideClass = 'flex flex-col';
  const baseItemsWrapClass = 'flex w-full gap-4 lg:gap-8';
  const baseItemClass = 'flex flex-col gap-2';
  const baseImageClass = 'inline-block';
  const baseCaptionClass = 'whitespace-pre-line';
</script>

<section id={derivedId} class="post border-b border-black py-4 lg:py-14">
  {#if post.title}
    <h3 class="bigger-text mb-4 lg:mb-8 lg:whitespace-pre-line">{post.title}</h3>
  {/if}
  <section class={`${basePostClass} ${post.postClass ?? ''}`}>
    <aside class={`${baseAsideClass} ${post.asideClass ?? 'lg:justify-center'}`}>
      {#if post.description}
        <p class="bigger-text whitespace-pre-line">{post.description}</p>
      {/if}
    </aside>
    <div class={`${baseItemsWrapClass} ${post.itemsWrapClass ?? 'items-end'} ${post.alignItems ?? 'flex-col'}`}>
      {#each post.items as item, i (item.image + i)}
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
