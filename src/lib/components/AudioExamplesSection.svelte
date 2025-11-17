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

  const splitIndex = Math.ceil(tracks.length / 2);
  const leftColumn = tracks.slice(0, splitIndex);
  const rightColumn = tracks.slice(splitIndex);
</script>

<section id="hoerbeispiele">
  <div class="mb-4 text-3xl font-normal md:mb-6">
    <hr class="border-t border-black/50 md:mt-[0.6lh]" />
  </div>

  <div class="flex flex-col flex-wrap items-center gap-4 md:flex-row md:items-start md:gap-x-12">
    {#each tracks as track, i}
      <AudioExampleRow index={i + 1} title={track.title} trackUrl={track.url} />
    {/each}
  </div>
</section>
