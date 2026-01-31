<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
</script>

<HeaderAbsolute />

<section class="content-wrapper pt-20">
  <section class="content-section md:gap-16">
    <div class="left-col">
      <h1 class="text-4xl font-normal md:mb-0 md:h-20">Aktuelles</h1>
      <p class="font-normal">Wir suchen und<br /> möchten finden</p>
    </div>
    <div class="md:mt-20">
      <blockquote class="max-w-2xl">
        Derzeit nehmen wir in allen Stimmgruppen noch NeubewerberInnen auf. Besonders glücklich wären wir über
        Sopranistinnen 1 und 2 und einen tiefen Bass.
      </blockquote>
      <p>(Stand Januar 2026)</p>
      <p class="mt-4">
        <a href="/kontakt">Kontakt</a>
      </p>
    </div>
  </section>
</section>

<style lang="postcss">
  a {
    @apply text-lg font-normal;
  }
</style>
