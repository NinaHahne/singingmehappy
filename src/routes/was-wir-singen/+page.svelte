<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import AudioExamplesSection from '$lib/components/AudioExamplesSection.svelte';
  import VideoExamplesSection from '$lib/components/VideoExamplesSection.svelte';
</script>

<HeaderAbsolute />

<section class="flex flex-col gap-4 px-4 pb-12 pt-28 md:flex-row md:items-start md:pb-20 lg:gap-8">
  <div class="md:min-w-[220px] md:text-right lg:min-w-[300px]">
    <h1 class="text-4xl font-normal">Was wir singen</h1>
  </div>
  <div class="">
    <blockquote class="max-w-3xl">
      "Wir singen a cappella Jazzstandards in oft überraschenden Arrangements. Der ein oder andere Popsong im Kleid
      eines Jazzarrangements ist auch dabei. Rhythmisch komplizierte Latin-Songs und uns berührende Jazzballaden bringen
      Abwechslung in unser Repertoire."
    </blockquote>
  </div>
</section>

<hr class="border-8 border-t border-black" />

<section class="flex flex-col px-4 py-12 md:flex-row md:items-start md:gap-4 md:py-20 md:pr-24 lg:gap-8">
  <div class="md:min-w-[220px] md:text-right lg:min-w-[300px]">
    <h1 class="text-4xl font-normal">Hörbeispiele</h1>
  </div>
  <AudioExamplesSection />
</section>

<hr class="border-8 border-t border-black" />

<section class="flex flex-col px-4 pb-20 pt-12 md:flex-row md:items-start md:gap-4 md:pb-32 md:pr-24 lg:gap-8">
  <div class="md:min-w-[220px] md:text-right lg:min-w-[300px]">
    <h1 class="text-4xl font-normal">Videos</h1>
  </div>
  <VideoExamplesSection />
</section>
