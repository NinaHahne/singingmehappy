<script lang="ts">
  import YouTubePlayer from './YouTubePlayer.svelte';

  type VideoInPost = {
    videoId: string;
    title?: string;
  };

  type VideoPost = {
    leftText: string;
    videos: VideoInPost[];
  };

  let { post } = $props<{
    post: VideoPost;
  }>();
</script>

<article class="flex items-start gap-4 md:gap-8">
  <!-- linker Textblock -->
  <div class="w-[30%] min-w-24 flex-shrink-0 text-sm leading-relaxed md:w-36 md:text-base lg:w-48">
    <p class="whitespace-pre-line text-sm font-light md:text-base lg:text-lg">
      {post.leftText}
    </p>
  </div>

  <!-- Videos rechts -->
  <div class="flex flex-col flex-wrap items-center gap-4 md:flex-row md:items-start md:justify-start md:gap-6 lg:gap-8">
    {#each post.videos as video}
      <YouTubePlayer videoId={video.videoId} title={video.title} />
    {/each}
  </div>
</article>
