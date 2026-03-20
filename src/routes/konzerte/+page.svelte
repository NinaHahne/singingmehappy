<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import { urlFor } from '$lib/sanity/image';
  import { PortableText } from '@portabletext/svelte';
  import type { Concert } from '$lib/types/concert';

  let { data } = $props<{
    data: {
      upcomingConcerts: Concert[];
      pastConcerts: Concert[];
    };
  }>();

  function formatDate(dateString: string) {
    return new Intl.DateTimeFormat('de-DE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateString));
  }

  // const portableTextComponents = {
  //   marks: {
  //     link: (props: { children?: import('svelte').Snippet; value?: { href?: string } }) => ({
  //       component: 'a',
  //       props: {
  //         href: props.value?.href,
  //         target: '_blank',
  //         rel: 'noreferrer noopener',
  //         class: 'underline decoration-1 underline-offset-4 transition-opacity duration-200 hover:opacity-70',
  //       },
  //     }),
  //   },
  // };
</script>

<HeaderAbsolute />

<section class="content-wrapper pt-20">
  <section class="content-section md:gap-16">
    <div class="left-col">
      <h1 class="text-4xl font-normal">Konzerte</h1>
    </div>

    <div class="flex w-full flex-col gap-16">
      <section class="flex flex-col gap-8">
        {#if data.upcomingConcerts.length === 0}
          <blockquote class="max-w-3xl">Die Konzerte für 2026 sind in der Organisationsphase.</blockquote>
        {:else}
          <div class="flex flex-col gap-12">
            {#each data.upcomingConcerts as concert (concert._id)}
              <!--TODO: <ConcertCard {concert} /> -->
            {/each}
          </div>
        {/if}
      </section>

      {#if data.pastConcerts.length > 0}
        <section class="flex flex-col gap-8">
          <h2 class="text-2xl font-normal">Archiv</h2>

          <div class="flex flex-col gap-12">
            {#each data.pastConcerts as concert (concert._id)}
              <!--TODO: <ConcertCard {concert} /> -->
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
                      <h3 class="text-2xl font-normal">{concert.title}</h3>
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
                      <div class="prose max-w-none prose-p:my-3 prose-a:no-underline">
                        <PortableText value={concert.description} />
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

                    {#if concert.links?.length}
                      {#each concert.links as link}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          class="underline decoration-1 underline-offset-4"
                        >
                          {link.label}
                        </a>
                      {/each}
                    {/if}
                  </div>
                </div>
              </article>
            {/each}
          </div>
        </section>
      {/if}
    </div>
  </section>
</section>
