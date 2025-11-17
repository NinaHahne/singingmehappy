<script lang="ts">
  let { trackUrl } = $props<{
    trackUrl: string;
  }>();

  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    trackUrl
  )}&color=%23000000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;
</script>

<iframe
  title="SoundCloud Player"
  class="aspect-[5/2.2] w-[288px] max-w-full md:max-w-none"
  allow="autoplay"
  scrolling="no"
  frameborder="no"
  {src}
></iframe>
