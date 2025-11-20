<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
</script>

<HeaderAbsolute />

<section class="content-wrapper pt-20">
  <section class="content-section">
    <div class="left-col">
      <h1 class="text-4xl font-normal">Impressum</h1>
    </div>
    <div class="w-full max-w-2xl">
      <div class="mb-4 text-3xl font-normal md:mb-6 lg:mb-8">
        <hr class="border-t border-black/50 md:mt-[0.7lh]" />
      </div>
      <div class="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
        <!-- Linke Spalte -->
        <div class="flex-1 space-y-4">
          <h4>„Singing me happy“ e.V.</h4>

          <div class="space-y-1">
            <p>c/o Brigitte Asche</p>
            <p>Triberger Straße 7</p>
            <p>14197 Berlin</p>
          </div>

          <div class="space-y-1">
            <p>
              Telefon:
              <a href="tel:+491711937686" class="underline"> +49 171 1937686 </a>
            </p>
            <p>
              E-Mail:
              <a href="mailto:info@singingmehappy.de" class="underline"> info@singingmehappy.de </a>
            </p>
          </div>

          <div class="space-y-1">
            <p>Vertreten durch den Vorstand:</p>
            <p>Brigitte Asche</p>
          </div>

          <div class="space-y-1">
            <p>Steuer Nr.:</p>
            <p>27/647/59042</p>
          </div>

          <div class="space-y-1">
            <p>Amtsgericht Charlottenburg</p>
            <p>VR 38701 B</p>
          </div>
        </div>

        <!-- Rechte Spalte -->
        <div class="flex-1 space-y-4">
          <div class="space-y-1">
            <p>Verantwortlich für den Inhalt:</p>
            <p>Brigitte Asche</p>
          </div>

          <div class="space-y-1">
            <p>Konzeption &amp; Gestaltung:</p>
            <p>Brigitte Asche</p>
          </div>

          <div class="space-y-1">
            <p>Programmierung:</p>
            <p><a href="https://ninahahne.rocks/" target="_blank" rel="noopener noreferrer">Nina Hahne</a></p>
          </div>

          <div class="space-y-1">
            <p>Quellennachweis für die verwendeten Fotos und Filme:</p>
            <p>Ali Ghandschi,</p>
            <p>Werner Scholz</p>
            <p>und Mitglieder von</p>
            <p>„Singing me happy“</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
