<script lang="ts">
  let { videoId, title = '' } = $props<{
    videoId: string;
    title?: string;
  }>();

  const src = `https://www.youtube.com/embed/${videoId}?rel=0`;
</script>

<iframe
  class="aspect-video w-[288px] max-w-full md:max-w-none"
  {src}
  title={title || 'YouTube Video'}
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
