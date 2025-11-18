<script lang="ts">
  import VideoPostRow from './VideoPostRow.svelte';

  type VideoInPost = {
    videoId: string;
    title?: string;
  };

  type VideoPost = {
    leftText: string;
    videos: VideoInPost[];
  };

  const videoPosts: VideoPost[] = [
    {
      leftText: `20—06—2020
Corona-Produktion:
Makin' Whoopee &
Puttin On The Ritz

Chorleiter & Arrangeur:
Martin Hagen`,
      videos: [
        {
          videoId: '1mm6G8ibQas',
          title: 'Singing Me Happy – Makin’ Whoopee',
        },
        {
          videoId: '4m8GZEVi6MU',
          title: 'Singing Me Happy – Puttin’ On The Ritz',
        },
      ],
    },
    {
      leftText: `21—06—2024
Fête de la musique
Parochialkirche, Berlin

Just one of those things
Sing Sing Sing
I got rhythm

Chorleiter:
Martin Hagen`,
      videos: [
        {
          videoId: 'U22jANSkOE4',
          title: 'Just one of those things',
        },
        {
          videoId: 'bksGCg9cg0U',
          title: 'Sing Sing Sing',
        },
        {
          videoId: 'g817IsckBjc',
          title: 'I got rhythm',
        },
      ],
    },
  ];
</script>

<section id="videos">
  <div class="mb-4 text-3xl font-normal md:mb-6 lg:mb-8">
    <hr class="border-t border-black/50 md:mt-[0.7lh]" />
  </div>

  <div class="flex flex-col gap-12 md:gap-20">
    {#each videoPosts as post}
      <VideoPostRow {post} />
    {/each}
  </div>
</section>
