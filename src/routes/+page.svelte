<!-- Homepage / Landing page / index -->

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import HeroSlider from '$lib/components/HeroSlider.svelte';

  let { toggleMenuIfOpen } = $props<{
    toggleMenuIfOpen: () => void;
  }>();

  let heroIndex = $state(0); // currently displayed hero image index for other animations/transitions based on index

  // 🔧 Debug controls
  let debugHero = false;
  let debugHeroIndex = $state(0);

  let showMusicMoves = $state(false);

  const heroImages = [
    { src: '/images/hero/JAZZCHOR_1.jpg', alt: 'Jazzchor Singing me happy' },
    { src: '/images/hero/JAZZCHOR_2.jpg', alt: 'Jazzchor Singing me happy' },
    { src: '/images/hero/JAZZCHOR_3.jpg', alt: 'Jazzchor Singing me happy' },
    { src: '/images/hero/JAZZCHOR_4.jpg', alt: 'Jazzchor Singing me happy' },
  ];

  onMount(() => {
    showMusicMoves = true;
  });
</script>

<svelte:head>
  <!-- <title>Home | SvelteKit Starter</title> -->
</svelte:head>

<HeaderAbsolute showAbsoluteLogoLink={true} />

<section class="relative flex h-[calc(100svh-100px)] w-full flex-col pt-20 md:mt-auto lg:block lg:h-auto">
  <p class="sr-only">Willkommen beim Jazzchor Singing me happy</p>
  <p class="sr-only">Animierter Slider mit Bildern des Jazzchors Singing me happy</p>
  <HeroSlider
    images={heroImages}
    interval={4500}
    firstInterval={1000}
    debugStatic={debugHero}
    debugIndex={debugHeroIndex}
    onIndexChange={(i) => (heroIndex = i)}
  />
  <div class="flex h-full w-full flex-col items-center justify-center gap-1 lg:hidden">
    <p
      class="bigger-text mb-0 -translate-y-full text-center font-extralight opacity-0 transition-all duration-1000 ease-in-out lg:hidden"
      class:opacity-100={showMusicMoves}
      class:translate-y-0={showMusicMoves}
    >
      Musik bewegt
    </p>
    <p
      class="bigger-text mb-0 translate-y-full text-center font-extralight opacity-0 transition-all delay-1000 duration-1000 ease-in-out lg:hidden"
      class:opacity-100={showMusicMoves}
      class:-translate-y-0={showMusicMoves}
    >
      innen und außen
    </p>
  </div>
  <div class="pointer-events-none absolute inset-0 hidden [container-type:size] lg:block">
    <p
      class="pointer-events-auto absolute left-1/2 top-[17%] -ml-[5.8cqw] -translate-x-1/2 text-center text-[2.8cqw] font-normal"
    >
      Musik bewegt
    </p>

    <p class="pointer-events-auto absolute bottom-[8%] left-1/2 ml-[12cqw] -translate-x-1/2 text-[2.4cqw] font-normal">
      innen und außen
    </p>
  </div>
</section>

<!-- <section class="relative bg-black pt-4">
  <img
    src={heroImages[0].src}
    alt="Jazzchor Gruppe bewegt sich vor einer Fensterwand"
    class="block w-full object-contain"
  />
  <div class="pointer-events-none absolute inset-0 [container-type:size]">
    <p
      id="uns-bewegt-jazz"
      class="pointer-events-auto absolute left-1/2 top-[15%] ml-[1cqw] -translate-x-1/2 text-[2.7cqw] font-normal leading-tight"
    >
      Uns bewegt <span>Ja</span><span>z</span><span>z</span>
    </p>
  </div>
</section> -->

<section class="flex h-[100px] w-full items-center justify-center bg-black lg:h-[120px]">
  <p
    id="uns-bewegt-jazz"
    class={`text-center text-3xl font-light text-white md:text-3xl xl:text-4xl hero-${heroIndex}`}
  >
    <span>Uns</span> <span>bewegt</span> <span>J</span><span>a</span><span>z</span><span>z</span>
  </p>
</section>

<section class="relative bg-black">
  <img
    src="/images/home/decke.jpg"
    alt="Decke"
    class="block aspect-[5/3] w-full object-cover lg:aspect-auto lg:object-contain"
  />
  <div
    class="absolute inset-0 flex items-center justify-center lg:pointer-events-none lg:block lg:[container-type:size]"
  >
    <p
      class="menu-shadow px-4 text-center text-2xl font-normal lg:pointer-events-auto lg:absolute lg:bottom-[23.5cqw] lg:left-1/2 lg:ml-[17cqw] lg:-translate-x-1/2 lg:whitespace-nowrap lg:px-0 lg:text-[2.4cqw] lg:leading-tight"
    >
      Wenn es um den gemeinsamen Klang unserer Stimmen geht...
    </p>
  </div>
</section>

<section class="flex h-[100px] w-full items-center justify-center bg-black lg:hidden">
  <p class="text-center text-2xl font-light text-white md:text-2xl xl:text-3xl">
    ...stecken wir alle<br />unter einer Decke
  </p>
</section>

<section class="relative bg-black lg:pt-4">
  <img
    src="/images/home/unter-einer-decke.jpg"
    alt="Jazzchor Gruppe steht zusammen unter einer Decke"
    class="block w-full object-contain"
  />
  <div class="pointer-events-none absolute inset-0 hidden [container-type:size] lg:block">
    <p
      class="menu-shadow pointer-events-auto absolute left-[4.5cqw] top-[17.5cqw] whitespace-nowrap text-[2.4cqw] font-normal leading-tight"
    >
      ...stecken wir alle <br /> unter einer Decke
    </p>
  </div>
</section>

<!-- <section class="flex h-[100px] w-full items-center justify-center lg:hidden">
  <p class="text-center text-2xl font-light md:text-2xl xl:text-3xl">unter einer Decke</p>
</section> -->

<!-- <section class="relative flex flex-col items-center gap-4 p-2 py-16 md:whitespace-nowrap">
  <div class="flex flex-col gap-2 text-4xl md:flex-row">
    <div class="mr-6 flex flex-col items-end gap-2">
      <h1 class="font-medium underline">Schriftarten-Vorschläge</h1>
      <div class="font-dosis">Jazzchor "Singing me happy" 2025</div>
      <div class="font-quicksand">Jazzchor "Singing me happy" 2025</div>
      <div class="font-montserrat">Jazzchor "Singing me happy" 2025</div>
      <div class="font-dm-sans">Jazzchor "Singing me happy" 2025</div>
      <div class="font-josefin-sans">Jazzchor "Singing me happy" 2025</div>
    </div>
    <div class="flex flex-col items-start gap-2 font-light">
      <h1 class="font-light underline">Schriftname (leichter gesetzt)</h1>
      <div class="font-dosis">| Dosis (aktuell)</div>
      <div class="font-quicksand">| Quicksand</div>
      <div class="font-montserrat">| Montserrat</div>
      <div class="font-dm-sans">| DM Sans</div>
      <div class="font-josefin-sans">| Josefin Sans</div>
    </div>
  </div>
</section> -->

{#if debugHero}
  <div class="fixed bottom-[100px] left-4 z-50 rounded bg-black/70 px-3 py-2 text-sm text-white">
    <div class="mb-1 font-mono text-red-400">Hero debug</div>

    <div class="flex gap-2">
      {#each heroImages as _, i}
        <button
          onclick={() => (debugHeroIndex = i)}
          class={`rounded px-2 py-1 ${heroIndex === i ? 'bg-white text-black' : 'bg-white/20'}`}
        >
          {i}
        </button>
      {/each}
    </div>
  </div>
{/if}

<style>
  #uns-bewegt-jazz span {
    position: relative;
    display: inline-block;
    transition: transform 1s ease-in-out;
  }
  #uns-bewegt-jazz span:nth-child(1) {
    font-size: 1.3em;
    margin-right: 0.2em;
  }
  #uns-bewegt-jazz span:nth-child(2) {
    font-size: 0.8em;
    margin-right: 0.1em;
  }

  /* moving "Jazz" */

  /* HeroSlider index 0 */
  #uns-bewegt-jazz span:nth-child(3) {
    /* "J" */
    font-size: 1.8em;
  }
  #uns-bewegt-jazz span:nth-child(4) {
    /* "a" */
    font-size: 1.8em;
  }
  #uns-bewegt-jazz span:nth-child(5) {
    /* "z" */
    font-size: 1.8em;
  }
  #uns-bewegt-jazz span:nth-child(6) {
    /* "z" */
    font-size: 1.8em;
  }

  /* HeroSlider index 1 */
  #uns-bewegt-jazz.hero-1 span:nth-child(3) {
    /* "J" */
    transform: translate(-0.01em, 0.07em) rotate(0deg);
  }
  #uns-bewegt-jazz.hero-1 span:nth-child(4) {
    /* "a" */
    transform: translate(0.04em, 0.07em) rotate(0deg);
  }
  #uns-bewegt-jazz.hero-1 span:nth-child(5) {
    /* "z" */
    transform: translate(0.04em, -0.15em) rotate(-12deg);
  }
  #uns-bewegt-jazz.hero-1 span:nth-child(6) {
    /* "z" */
    transform: translate(0.06em, 0.07em) rotate(-4deg);
  }
  /* HeroSlider index 2 */
  #uns-bewegt-jazz.hero-2 span:nth-child(3) {
    /* "J" */
    transform: translate(-0.02em, 0.1em) rotate(4deg);
  }
  #uns-bewegt-jazz.hero-2 span:nth-child(4) {
    /* "a" */
    transform: translate(0.01em, -0.1em) rotate(-8deg);
  }
  #uns-bewegt-jazz.hero-2 span:nth-child(5) {
    /* "z" */
    transform: translate(0.02em, 0.08em) rotate(6deg);
  }
  #uns-bewegt-jazz.hero-2 span:nth-child(6) {
    /* "z" */
    transform: translate(0.01em, -0.1em) rotate(-4deg);
  }
  /* HeroSlider index 3 */
  #uns-bewegt-jazz.hero-3 span:nth-child(3) {
    /* "J" */
    transform: translate(0em, 0.05em) rotate(-4deg);
  }
  #uns-bewegt-jazz.hero-3 span:nth-child(4) {
    /* "a" */
    transform: translate(0.01em, 0.1em) rotate(8deg);
  }
  #uns-bewegt-jazz.hero-3 span:nth-child(5) {
    /* "z" */
    transform: translate(-0.03em, -0.1em) rotate(-6deg);
  }
  #uns-bewegt-jazz.hero-3 span:nth-child(6) {
    /* "z" */
    transform: translate(-0.02em, 0.1em) rotate(4deg);
  }
</style>
