<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  type HeroImage = {
    src: string;
    alt?: string;
  };

  let {
    images = [] as HeroImage[],
    interval = 4500,
    firstInterval = interval,
    onIndexChange,
    debugIndex,
    debugStatic = false,
  } = $props<{
    images?: HeroImage[];
    interval?: number;
    firstInterval?: number;
    onIndexChange?: (index: number) => void;
    debugIndex?: number;
    debugStatic?: boolean;
  }>();

  let currentIndex = $state(0);
  let isPaused = $state(false);

  // let timer: ReturnType<typeof setInterval> | null = null;
  // number type for both setInterval and setTimeout
  let timer: number | null = null;

  function startTimer() {
    if (timer !== null) return;
    timer = window.setInterval(() => {
      if (!isPaused && images.length > 1) {
        next();
      }
    }, interval);
  }

  function startFirstTimer() {
    if (timer !== null) return;

    timer = window.setTimeout(() => {
      if (!isPaused && images.length > 1) {
        next();
      }

      // switch to normal interval after first change
      stopTimer();
      if (images.length > 1) {
        startTimer();
      }
    }, firstInterval);
  }

  function stopTimer() {
    if (timer !== null) {
      // ensure that timeout or interval is cleared, regardless of whether it was set via setTimeout or setInterval
      window.clearTimeout(timer);
      window.clearInterval(timer);
      timer = null;
    }
  }

  function next() {
    if (images.length === 0) return;
    currentIndex = (currentIndex + 1) % images.length;
    emitIndex();
  }

  function restartTimer() {
    stopTimer();
    if (images.length > 1) {
      startTimer();
    }
  }

  function goTo(index: number) {
    if (index === currentIndex || index < 0 || index >= images.length) return;
    currentIndex = index;
    emitIndex();
    // Reset timer so that the rhythm starts fresh after manual change
    restartTimer();
  }

  function emitIndex() {
    onIndexChange?.(currentIndex);
  }

  // 🔧 DEBUG: externer Index überschreibt alles
  $effect(() => {
    if (debugStatic && typeof debugIndex === 'number') {
      currentIndex = Math.max(0, Math.min(debugIndex, images.length - 1));
      emitIndex();
    }
  });

  onMount(() => {
    // Debug-Modus → kein Autoplay
    if (debugStatic) {
      emitIndex();
      return;
    }
    emitIndex();
    if (images.length > 1) {
      startFirstTimer();
    }

    return () => {
      stopTimer();
    };
  });

  onDestroy(() => {
    stopTimer();
  });
</script>

<!--TODO: add option to pause animation -->
<div
  class="relative aspect-[12/10] w-full overflow-hidden lg:aspect-[15/9]"
  aria-roledescription="Karussell"
  aria-label="Chor-Fotos"
>
  <div class="relative h-full w-full">
    {#if images.length === 0}
      <!-- Fallback, if no images have been configured -->
      <div class="flex h-full items-center justify-center bg-neutral-200">
        <p class="text-sm text-neutral-600">Hero-Slider – please configure images.</p>
      </div>
    {:else}
      {#each images as image, index (image.src)}
        <img
          src={image.src}
          alt={image.alt ?? ''}
          class="absolute inset-0 h-full w-full object-cover object-bottom transition-opacity duration-[2.5s] ease-[cubic-bezier(0.25,0.25,0.75,0.75)] will-change-[opacity] [transform:translateZ(0)]"
          style:opacity={index === currentIndex ? 1 : 0}
          aria-hidden={index !== currentIndex}
          loading={index === currentIndex ? 'eager' : 'lazy'}
          decoding="async"
        />
      {/each}
    {/if}
  </div>

  {#if images.length > 1}
    <!-- Indicator dots -->
    <div class="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center">
      <div class="flex gap-2 rounded-full px-3 py-1">
        {#each images as _image, index}
          <button
            type="button"
            class="pointer-events-auto h-3 w-3 rounded-full border border-white/70 bg-white transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lipstick"
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
