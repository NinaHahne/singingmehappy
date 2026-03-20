<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import ConcertCard from '$lib/components/ConcertCard.svelte';
  import type { Concert } from '$lib/types/concert';

  let { data } = $props<{
    data: {
      upcomingConcerts: Concert[];
      pastConcerts: Concert[];
    };
  }>();
</script>

<HeaderAbsolute />

<section class="content-wrapper pt-20">
  <section class="content-section relative md:gap-16">
    <div class="left-col md:sticky md:top-20">
      <h1 class="text-4xl font-normal">Konzerte</h1>
      <picture class="flex w-full justify-center md:justify-end">
        <img
          src="/images/singing-me-happy.jpg"
          alt="Singing Me Happy"
          class="my-6 max-w-40 md:my-8 md:-mr-4 md:max-w-60"
        />
      </picture>
    </div>

    <div class="flex w-full flex-col gap-16">
      <section class="flex flex-col gap-8">
        {#if data.upcomingConcerts.length === 0}
          <blockquote class="max-w-3xl">Die Konzerte für 2026 sind in der Organisationsphase.</blockquote>
        {:else}
          <div class="flex flex-col gap-12 text-3xl md:mt-[0.7lh]">
            {#each data.upcomingConcerts as concert (concert._id)}
              <ConcertCard {concert} />
            {/each}
          </div>
        {/if}
      </section>

      {#if data.pastConcerts.length > 0}
        <section class="relative flex flex-col">
          <h2
            class="sticky -top-[1px] z-10 mb-0 border-t border-black/50 bg-gradient-to-b from-white via-white/80 via-50% to-90% py-6 text-center md:to-transparent md:py-8"
          >
            Archiv
          </h2>
          <div class="flex flex-col gap-12">
            {#each data.pastConcerts as concert (concert._id)}
              <ConcertCard {concert} />
            {/each}
          </div>
        </section>
      {/if}
    </div>
  </section>
</section>
