<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import PortableTextLink from '$lib/components/sanity/PortableTextLink.svelte';
  import { urlFor } from '$lib/sanity/image';
  import type { Concert } from '$lib/types/concert';

  let { concert } = $props<{
    concert: Concert;
  }>();

  function formatDate(dateString: string) {
    return new Intl.DateTimeFormat('de-DE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateString));
  }

  const portableTextComponents = {
    marks: {
      link: PortableTextLink,
    },
  };
</script>

<article class="flex flex-col gap-6 border-t border-black/20 pt-8 md:gap-8">
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <p class="text-lg font-normal capitalize">
        {formatDate(concert.date)}
        {#if concert.timeLabel}
          <span class="normal-case"> · {concert.timeLabel}</span>
        {/if}
      </p>

      {#if concert.title}
        <h2 class="">{concert.title}</h2>
      {/if}

      {#if concert.flyerImage?.asset}
        <div class="w-full max-w-[400px]">
          <img
            src={urlFor(concert.flyerImage).width(800).fit('max').auto('format').url()}
            alt={concert.flyerImage.alt || concert.title || 'Flyer zum Konzert'}
            class="h-auto w-full"
            loading="lazy"
            sizes="(max-width: 767px) 100vw, 600px"
          />
        </div>
      {/if}

      {#if concert.description?.length}
        <div class="prose max-w-none text-black prose-p:my-3">
          <PortableText value={concert.description} components={portableTextComponents} />
        </div>
      {/if}
    </div>

    {#if concert.location}
      <p class="whitespace-pre-line leading-relaxed">
        {concert.location}
      </p>
    {/if}

    <div class="flex flex-wrap gap-x-4 gap-y-2">
      {#if concert.mapsUrl}
        <a
          href={concert.mapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          class="underline decoration-1 underline-offset-4"
        >
          Karte öffnen
        </a>
      {/if}
    </div>

    {#if concert.links?.length}
      <div class="flex flex-col gap-2">
        <h5>Links:</h5>
        {#each concert.links as link}
          <a href={link.url} target="_blank" rel="noreferrer noopener" class="">
            {link.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</article>
