<script lang="ts">
  import SoundCloudPlayer from './SoundCloudPlayer.svelte';

  let { index, title, trackUrl } = $props<{
    index: number;
    title: string;
    trackUrl: string;
  }>();

  const trackNumber = index.toString().padStart(2, '0');
</script>

<div class="flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
  <div class="md:w-20 lg:w-24">
    <p class="text-sm font-light leading-snug md:text-base lg:text-lg">
      <span class="inline-block tabular-nums md:block">{trackNumber} — </span>
      <span class="whitespace-pre-line">{title}</span>
    </p>
  </div>

  <div class="flex-1">
    <SoundCloudPlayer {trackUrl} />
  </div>
</div>
