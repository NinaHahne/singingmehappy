<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  type HeroImage = {
    src: string;
    alt?: string;
  };

  let { images = [] as HeroImage[], interval = 4500 } = $props();

  let currentIndex = $state(0);
  let isPaused = $state(false);

  let timer: ReturnType<typeof setInterval> | null = null;

  function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
      if (!isPaused && images.length > 1) {
        next();
      }
    }, interval);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function next() {
    if (images.length === 0) return;
    currentIndex = (currentIndex + 1) % images.length;
  }

  function goTo(index: number) {
    if (index === currentIndex || index < 0 || index >= images.length) return;
    currentIndex = index;
  }

  onMount(() => {
    if (images.length > 1) {
      startTimer();
    }

    return () => {
      stopTimer();
    };
  });

  onDestroy(() => {
    stopTimer();
  });
</script>

<!--TODO: add option to pause animation /  onmouseenter={() => (isPaused = true)}
  onmouseleave={() => (isPaused = false)} -->
<div class="relative w-full overflow-hidden" aria-roledescription="Karussell" aria-label="Chor-Fotos">
  <!-- Bilder-Stack mit Fade -->
  <div class="relative h-dvh">
    {#if images.length === 0}
      <!-- Fallback, falls noch keine Bilder konfiguriert sind -->
      <div class="flex h-full items-center justify-center bg-neutral-200">
        <p class="text-sm text-neutral-600">Hero-Slider – bitte Bilder konfigurieren.</p>
      </div>
    {:else}
      {#each images as image, index (image.src)}
        <img
          src={image.src}
          alt={image.alt ?? ''}
          class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[2.5s] ease-linear"
          style:opacity={index === currentIndex ? 1 : 0}
          aria-hidden={index !== currentIndex}
          loading={index === currentIndex ? 'eager' : 'lazy'}
          decoding="async"
        />
      {/each}
    {/if}
  </div>

  {#if images.length > 1}
    <!-- Indikator-Punkte -->
    <div class="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center">
      <div class="flex gap-2 rounded-full px-3 py-1">
        {#each images as _image, index}
          <button
            type="button"
            class="focus-visible:ring-lipstick pointer-events-auto h-3 w-3 rounded-full border border-white/70 bg-white transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2"
            class:opacity-50={index !== currentIndex}
            class:scale-110={index === currentIndex}
            aria-label={`Bild ${index + 1} anzeigen`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            onclick={() => goTo(index)}
          ></button>
        {/each}
      </div>
    </div>
  {/if}
</div>
