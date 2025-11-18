<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import VoiceSection from '$lib/components/choir/VoiceSection.svelte';
  import { choirSections } from '$lib/data/choir';
</script>

<HeaderAbsolute />

<section class="flex flex-col gap-4 px-4 pt-28 md:flex-row md:items-start lg:gap-8">
  <div class="md:min-w-[220px] md:text-right lg:min-w-[300px]">
    <h1 class=" text-4xl font-normal">Über Uns</h1>
  </div>
  <div class="">
    <blockquote class="max-w-3xl">
      Wir sind ein gut gelauntes a cappella Ensemble von 16 Frauen und Männern mit viel Lust auf wohlklingende
      Vokalmusik und Freude am Prozess der Entstehung. Unsere Liebe gehört dem Jazz.
    </blockquote>
    <div class="my-12 max-w-4xl">
      <picture>
        <source srcset="/images/ueber-uns/intro_Gruppenfoto_mobile.webp" media="(max-width: 640px)" />
        <source srcset="/images/ueber-uns/intro_Gruppenfoto_desktop.webp" media="(min-width: 641px)" />
        <img
          src="/images/ueber-uns/intro_Gruppenfoto_desktop.webp"
          alt="Jazzchor Gruppe"
          class="w-full object-contain"
        />
      </picture>
    </div>
  </div>
</section>

<!-- TODO: section erst bei Klick auf "Mehr erfahren" anzeigen -->
<section class="relative flex flex-col px-4 pb-12 md:flex-row md:pb-20 lg:gap-8">
  <div
    class="flex h-full flex-col leading-normal md:min-w-[220px] md:items-end md:self-center md:text-right lg:min-w-[300px]"
  ></div>
  <div class="">
    <div class="max-w-3xl">
      <p>
        So finden sich viele Jazzstandards in ungewöhnlichen Arrangements in unserem Repertoire. Für uns muss Musik
        grooven, swingen oder direkt ins Herz gehen. Wir haben Spaß an der Feinarbeit zu jedem Stück, ob es in den
        Proben, zu Hause oder bei Workshops ist. <br /><br />
        3-4 Mal im Jahr stellen wir unser a cappella Programm mit großer Freude dem Publikum vor.<br /><br />
      </p>
    </div>
    <div class="relative max-w-3xl">
      <picture
        class="relative float-start mr-[0.5lh] mt-[0.25lh] h-[5.2lh] w-auto md:absolute md:-left-[180px] md:-ml-4 md:mb-auto md:mr-auto md:h-auto md:w-[180px] lg:-ml-8"
      >
        <img
          src="/images/ueber-uns/portrait_Biggi.webp"
          alt="Portrait von Brigitte Asche"
          class="h-full w-auto object-cover md:h-auto md:w-full"
        />
      </picture>
      <p>
        “Singing me happy“ wurde 2015 von unserer Sopranistin Brigitte Asche gegründet, die das Glücksgefühl, das viele
        Menschen und sie selbst beim Singen empfinden, im Chornamen ausgedrückt hat. Seitdem setzt sie sich, in enger
        Zusammenarbeit mit dem Chorleiter beständig für neue Impulse und ein jazzorientiertes, spannendes Repertoire
        ein. <br /><br />
        Wir proben jeden Donnerstag von 19.15 bis 21.15 Uhr in der Nähe des Rüdesheimer Platzes in Wilmersdorf. Derzeit nehmen
        wir noch eine hohe Sopranistin und einen tiefen Bass auf. Wir sind Mitglied im
        <a href="https://www.chorverband-berlin.de/" target="_blank">Chorverband Berlin</a>. <br /><br />
        Ergänzendes über unser Ensemble erfahrt sie im
        <a href="https://www.deutschlandfunkkultur.de/singing-me-happy-der-chor-zum-glueck-100.html" target="_blank"
          >Deutschlandfunk Kultur-Beitrag</a
        >.
      </p>
    </div>
  </div>
</section>

<hr class="border-8 border-t border-black" />

<section class="relative flex flex-col gap-4 px-4 py-12 md:flex-row md:justify-between md:px-8 md:py-20 lg:gap-8">
  <div class="flex w-full flex-col items-start justify-start">
    <div class="max-w-2xl md:ml-[104px]">
      <h1>Der Chorleiter</h1>
      <!-- TODO: Text austauschen -->
      <p>
        Tobias Christl <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam voluptates autem distinctio facere tempore
        aliquam, ullam eius est unde? Nesciunt quibusdam iusto incidunt suscipit atque, tempora odit corporis repudiandae.
      </p>
    </div>
  </div>
  <div class="relative flex h-auto flex-col items-end md:min-w-[220px] md:items-start md:self-end lg:min-w-[300px]">
    <picture class="max-h-full w-[75%] min-w-[180px] object-contain md:mb-0 md:h-[8lh] md:w-full">
      <img
        src="/images/ueber-uns/portrait_Tobias_Foto_Dovile Sermokas.webp"
        alt="Portrait von Tobias Christl"
        class="h-full w-full object-cover"
      />
    </picture>
    <p class="mt-2 md:absolute md:left-0 md:top-full">Tobias Christl</p>
  </div>
</section>

<hr class="border-8 border-t border-black" />

<section class="relative flex w-full flex-col gap-4 px-4 py-12 md:flex-row md:px-20 md:py-20 lg:gap-8">
  <div class="flex h-full flex-col md:ml-[104px] md:min-w-[220px] lg:min-w-[300px]">
    <h1>Unsere<br /> Sängerinnen <br />und Sänger ...</h1>
    <p>und was ihr Herz <br />außer Singen noch <br />höher schlagen lässt.</p>
  </div>
  <div class="relative flex w-full flex-col gap-12">
    {#each choirSections as section}
      <VoiceSection {section} />
    {/each}
    <!-- <p class="text-xl font-light italic text-gray-600 md:text-2xl">Dieser Abschnitt ist noch in Arbeit.</p> -->
  </div>
</section>
