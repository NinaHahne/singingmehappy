<!-- Homepage / Landing page / index -->

<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import HeroSlider from '$lib/components/HeroSlider.svelte';

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

<HeaderAbsolute />

<section class="relative mt-20 w-full md:mt-auto">
  <HeroSlider images={heroImages} interval={4500} firstInterval={1000} />
  <div class="pointer-events-none absolute inset-0 [container-type:size]">
    <!-- <p
      class="pointer-events-auto absolute left-1/2 top-[18%] -translate-x-1/2 text-center text-[clamp(24px,4.2vw,46px)]"
    >
      Musik bewegt
    </p>
    <p class="pointer-events-auto absolute bottom-[8%] right-[4%] text-[clamp(14px,2.2vw,22px)]">innen und außen</p> -->

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

<section class="relative bg-black pt-4">
  <img
    src="/images/home/uns-bewegt-jazz.jpg"
    alt="Jazzchor Gruppe steht zusammen vor einer Fensterwand"
    class="block w-full object-contain"
  />
  <div class="pointer-events-none absolute inset-0 [container-type:size]">
    <p
      id="uns-bewegt-jazz"
      class="pointer-events-auto absolute bottom-[7%] left-1/2 ml-[1cqw] -translate-x-1/2 text-[2.7cqw] font-normal leading-tight"
    >
      Uns bewegt <span>Ja</span><span>z</span><span>z</span>
    </p>
  </div>
</section>

<section class="relative bg-black pt-4">
  <img src="/images/home/decke.jpg" alt="Decke" class="block w-full object-contain" />
  <div class="pointer-events-none absolute inset-0 [container-type:size]">
    <p
      class="pointer-events-auto absolute left-1/2 top-[23.5cqw] ml-[17cqw] -translate-x-1/2 whitespace-nowrap text-[2.4cqw] font-normal leading-tight"
    >
      Wenn es um den gemeinsamen Klang unserer Stimmen geht...
    </p>
  </div>
</section>

<section class="relative bg-black pt-4">
  <img
    src="/images/home/unter-einer-decke.jpg"
    alt="Jazzchor Gruppe steht zusammen unter einer Decke"
    class="block w-full object-contain"
  />
  <div class="pointer-events-none absolute inset-0 [container-type:size]">
    <p
      class="pointer-events-auto absolute left-[4.5cqw] top-[17.5cqw] whitespace-nowrap text-[2.4cqw] font-normal leading-tight"
    >
      ...stecken wir alle <br /> unter einer Decke
    </p>
  </div>
</section>

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
    font-size: 3.7cqw;
    font-weight: 300;
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
