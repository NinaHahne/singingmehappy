<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
</script>

<HeaderAbsolute />

<section class="content-wrapper pt-20">
  <section class="content-section md:gap-16">
    <div class="left-col">
      <h1 class="text-4xl font-normal">Kontakt</h1>
    </div>
    <div class="max-w-3xl space-y-6">
      <p class="max-w-2xl">
        Du möchtest bei uns mitsingen? <br />
        Schreib uns eine <a href="mailto:mitmachen@singingmehappy.de">Mail</a>, in der du uns etwas von deiner
        Chorerfahrung erzählst:
        <a href="mailto:mitmachen@singingmehappy.de">mitmachen@singingmehappy.de</a><br />
        Wir laden dich gern zu einer Probe ein.
      </p>
      <div>
        <h4 class="mb-0 text-3xl md:mb-0">Probenort:</h4>
        <p>
          IBZ (Internationales BegegnungsZentrum der Wissenschaften) <br />Wiesbadener Str. 18<br />14197 Berlin -
          Wilmersdorf
        </p>
      </div>
      <p>
        Du möchtest, dass wir auf deiner Veranstaltung singen? <br />
        Schreib uns an:
        <a href="mailto:info@singingmehappy.de">info@singingmehappy.de</a>
      </p>
    </div>
  </section>
</section>

<style lang="postcss">
  p,
  a {
    @apply text-2xl font-light md:text-3xl;
  }
</style>
