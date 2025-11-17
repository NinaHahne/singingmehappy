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
  <div class="md:shrink-0 md:basis-20">
    <p class="text-sm leading-snug md:text-base">
      <span class="tabular-nums">{trackNumber}</span>
      <span class="mx-1">—<br /></span>
      <span class="whitespace-pre-line">{title}</span>
    </p>
  </div>

  <div class="flex-1">
    <SoundCloudPlayer {trackUrl} />
  </div>
</div>
