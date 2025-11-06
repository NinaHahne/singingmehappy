<!-- Homepage / Landing page / index -->

<script lang="ts">
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

<section class="w-full">
  <HeroSlider images={heroImages} interval={4000} />
</section>

<section class="relative flex flex-col items-center gap-4 p-2 py-16 md:whitespace-nowrap">
  <div class="flex flex-col gap-2 text-4xl md:flex-row">
    <div class="mr-6 flex flex-col items-end gap-2">
      <h1 class="font-medium underline">Schriftarten-Vorschläge</h1>
      <div class="font-dosis">Jazzchor "Singing me happy" 2025</div>
      <div class="font-quicksand">Jazzchor "Singing me happy" 2025</div>
      <!-- <div class="font-nunito-sans">Jazzchor "Singing me happy" 2025</div> -->
      <div class="font-montserrat">Jazzchor "Singing me happy" 2025</div>
      <!-- <div class="font-didact-gothic">Jazzchor "Singing me happy" 2025</div> -->
      <!-- <div class="font-exo2">"Singing me happy" 2025</div> -->
      <!-- <div class="font-poppins">"Singing me happy" 2025</div> -->
      <!-- <div class="font-rubik">"Singing me happy" 2025</div> -->
      <div class="font-dm-sans">Jazzchor "Singing me happy" 2025</div>
      <div class="font-josefin-sans">Jazzchor "Singing me happy" 2025</div>
    </div>
    <div class="flex flex-col items-start gap-2 font-light">
      <h1 class="font-light underline">Schriftname (leichter gesetzt)</h1>
      <div class="font-dosis">| Dosis (aktuell)</div>
      <div class="font-quicksand">| Quicksand</div>
      <!-- <div class="font-nunito-sans">| Nunito Sans</div> -->
      <div class="font-montserrat">| Montserrat</div>
      <!-- <div class="font-didact-gothic">| Didact Gothic</div> -->
      <!-- <div class="font-exo2">| Exo 2</div> -->
      <!-- <div class="font-poppins">| Poppins</div> -->
      <!-- <div class="font-rubik">| Rubik</div> -->
      <div class="font-dm-sans">| DM Sans</div>
      <div class="font-josefin-sans">| Josefin Sans</div>
    </div>
  </div>
</section>
