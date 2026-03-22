<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import { PortableText } from '@portabletext/svelte';
  import PortableTextLink from '$lib/components/sanity/PortableTextLink.svelte';
  import type { PageData } from './$types';

  let { data } = $props<{ data: PageData }>();

  const portableTextComponents = {
    marks: {
      link: PortableTextLink,
    },
  };

  function formatUpdatedLabel(dateString: string) {
    return new Intl.DateTimeFormat('de-DE', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateString));
  }
</script>

<HeaderAbsolute />

<section class="content-wrapper pt-20">
  <section class="content-section md:gap-16">
    <div class="left-col">
      <h1 class="text-4xl font-normal md:mb-0 md:h-20">Aktuelles</h1>
      <p class="font-normal">Wir suchen und<br /> möchten finden</p>
    </div>
    <div class="md:mt-20">
      {#if data.news?.content?.length}
        <!-- <blockquote class="max-w-2xl">
          Derzeit nehmen wir in allen Stimmgruppen noch NeubewerberInnen auf. Besonders glücklich wären wir über
          Sopranistinnen 1 und 2 und einen tiefen Bass.
        </blockquote> -->
        <div
          class="prose max-w-2xl text-black prose-h1:text-4xl prose-h1:font-semibold prose-h2:text-3xl prose-h2:font-semibold prose-h3:text-2xl prose-p:text-2xl prose-p:font-light prose-p:leading-snug prose-a:text-2xl prose-a:font-light prose-a:leading-snug prose-p:md:text-3xl prose-p:md:leading-snug prose-a:md:text-3xl prose-a:md:leading-snug"
        >
          <PortableText value={data.news.content} components={portableTextComponents} />
        </div>
      {/if}
      {#if data.news?._updatedAt}
        <p class="mt-4">(Stand {formatUpdatedLabel(data.news._updatedAt)})</p>
      {/if}
      <p class="mt-4">
        <a href="/kontakt">Kontakt</a>
      </p>
    </div>
  </section>
</section>

<style lang="postcss">
  a {
    @apply text-lg font-normal;
  }
</style>
