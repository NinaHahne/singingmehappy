<script lang="ts">
  import AudioExampleRow from './AudioExampleRow.svelte';

  const tracks = [
    {
      title: 'Somebody Loves Me',
      url: 'https://soundcloud.com/sining-me-happy/somebody-loves-me',
    },
    {
      title: 'Lata d’água',
      url: 'https://soundcloud.com/sining-me-happy/lata-dagua',
    },
    {
      title: 'Moon River',
      url: 'https://soundcloud.com/sining-me-happy/moon-river',
    },
    {
      title: "Makin' Whoopee",
      url: 'https://soundcloud.com/sining-me-happy/makin-whoopee',
    },
    {
      title: 'Autumn Leaves',
      url: 'https://soundcloud.com/sining-me-happy/autumn-leaves',
    },
  ];
</script>

<section id="hoerbeispiele" class="w-full">
  <div class="mb-4 text-3xl font-normal md:mb-6 lg:mb-8">
    <hr class="border-t border-black/50 md:mt-[0.7lh]" />
  </div>

  <div class="flex flex-col flex-wrap items-center gap-4 md:flex-row md:items-start md:justify-start md:gap-6 lg:gap-8">
    {#each tracks as track, i}
      <AudioExampleRow index={i + 1} title={track.title} trackUrl={track.url} />
    {/each}
  </div>
</section>
