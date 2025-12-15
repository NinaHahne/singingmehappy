<!-- Homepage / Landing page / index -->

<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import HeroSlider from '$lib/components/HeroSlider.svelte';

  let { toggleMenuIfOpen } = $props<{
    toggleMenuIfOpen: () => void;
  }>();

  const heroImages = [
    { src: '/images/hero/JAZZCHOR_1.jpg', alt: 'Jazzchor Singing me happy' },
    { src: '/images/hero/JAZZCHOR_2.jpg', alt: 'Jazzchor Singing me happy' },
    { src: '/images/hero/JAZZCHOR_3.jpg', alt: 'Jazzchor Singing me happy' },
    { src: '/images/hero/JAZZCHOR_4.jpg', alt: 'Jazzchor Singing me happy' },
  ];
</script>

<svelte:head>
  <!-- <title>Home | SvelteKit Starter</title> -->
</svelte:head>

<HeaderAbsolute showAbsoluteLogoLink={true} />

<section class="relative flex h-lvh w-full flex-col justify-around py-20 md:mt-auto lg:block lg:h-auto lg:pb-0">
  <h2 class="mb-0 py-8 text-center lg:hidden">Musik bewegt</h2>
  <p class="sr-only">Willkommen beim Jazzchor Singing me happy</p>
  <p class="sr-only">Animierter Slider mit Bildern des Jazzchors Singing me happy</p>
  <HeroSlider images={heroImages} interval={4500} firstInterval={1000} />
  <h2 class="mb-0 py-8 text-center lg:hidden">innen und außen</h2>
  <div class="pointer-events-none absolute inset-0 hidden [container-type:size] lg:block">
    <p
      class="pointer-events-auto absolute left-1/2 top-[17%] -ml-[5.8cqw] -translate-x-1/2 text-center text-[2.8cqw] font-normal"
    >
      Musik bewegt
    </p>

    <p class="pointer-events-auto absolute bottom-[8%] left-1/2 ml-[9.8cqw] -translate-x-1/2 text-[2.4cqw] font-normal">
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

<section class="flex h-[100px] w-full items-center justify-center bg-black">
  <p id="uns-bewegt-jazz" class="text-center text-2xl font-light text-white md:text-2xl xl:text-3xl">
    Uns bewegt <span>Ja</span><span>z</span><span>z</span>
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

<style>
  #uns-bewegt-jazz span {
    position: relative;
    display: inline-block;
    font-size: 1.8em;
    /* font-weight: 300; */
  }
  #uns-bewegt-jazz span:nth-child(1) {
    left: 0.05em;
    top: 0.07em;
  }
  #uns-bewegt-jazz span:nth-child(2) {
    left: 0.04em;
    bottom: 0.15em;
    transform: rotate(-12deg);
  }
  #uns-bewegt-jazz span:nth-child(3) {
    left: 0.06em;
    top: 0.07em;
    transform: rotate(-4deg);
  }
</style>
