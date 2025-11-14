<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
</script>

<!-- <UnderConstruction title="Über Uns" /> -->
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
        <source srcset="/images/about/about-intro_mobile.webp" media="(max-width: 640px)" />
        <source srcset="/images/about/about-intro_desktop.webp" media="(min-width: 641px)" />
        <img src="/images/about/about-intro_desktop.webp" alt="Jazzchor Gruppe" class="w-full object-contain" />
      </picture>
    </div>
  </div>
</section>

<!-- TODO: section erst bei Klick auf "Mehr erfahren" anzeigen -->
<section class="relative flex flex-col gap-4 px-4 pb-20 md:flex-row lg:gap-8">
  <div class="flex h-full flex-col md:min-w-[220px] md:items-end md:self-center md:text-right lg:min-w-[300px]">
    <!-- <picture>
      <img src="/images/about/about-2.webp" alt="#TODO" class="w-28 max-w-full object-contain md:w-[180px]" />
    </picture> -->
  </div>
  <div class="">
    <div class="max-w-3xl">
      <p>
        So finden sich viele Jazzstandards in ungewöhnlichen Arrangements in unserem Repertoire. Für uns muss Musik
        grooven, swingen oder direkt ins Herz gehen. Wir haben Spaß an der Feinarbeit zu jedem Stück, ob es in den
        Proben zu Hause oder bei Workshops ist. <br /><br />
        3-4 Mal im Jahr stellen wir unser a cappella Programm mit großer Freude dem Publikum vor.<br /><br />
      </p>
    </div>
    <div class="relative max-w-3xl leading-normal">
      <picture
        class="float-start my-[0.25lh] mr-4 md:absolute md:-left-[180px] md:-ml-4 md:mb-auto md:mr-auto lg:-ml-8"
      >
        <!-- TODO: Bild austauschen -->
        <img src="/images/about/about-2.webp" alt="#TODO" class="w-28 max-w-full object-contain md:w-[180px]" />
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

<section class="relative flex flex-col gap-4 px-8 py-20 md:flex-row md:justify-between lg:gap-8">
  <div class="flex w-full flex-col items-start justify-start">
    <div class="max-w-2xl md:ml-[104px]">
      <!-- TODO: Text & Bild austauschen -->
      <h1>Der Chorleiter</h1>
      <p>
        Martin Hagen ist seit 2018 musikalischer Leiter. Er ist mit viel Humor, Leib und Seele in den Proben bei der
        Sache und hat sich zum Ziel gesetzt, unseren musikalischen Wachstumsprozeß zu fördern und zu unterstützen. <br
        /><br />
        Darüber hinaus ist Martin Sänger, Songwriter und Gesangscoach – unter anderem nach dem Estill Voice Training SystemTM.
        Er hat Jazz-Gesang in Amsterdam (Conservatory) und Philadelphia studiert. In der Vergangenheit war er 10 Jahre lang
        Mitglied der a cappella Gruppe muSix sowie einige Jahre bei `Klangbezirk ́.
      </p>
    </div>
  </div>
  <div class="flex h-full flex-col items-end md:min-w-[220px] md:items-start md:self-center lg:min-w-[300px]">
    <picture>
      <!-- TODO: Bild austauschen -->
      <img src="/images/about/about-3.webp" alt="#TODO" class="mb-2 max-h-full w-28 object-contain md:w-48" />
    </picture>
    <p>Martin Hagen</p>
  </div>
</section>

<hr class="border-8 border-t border-black" />

<section class="relative flex flex-col gap-4 px-8 py-20 md:flex-row lg:gap-8">
  <div class="flex h-full flex-col md:ml-[104px] md:min-w-[220px] lg:min-w-[300px]">
    <h1>Unsere<br /> Sängerinnen <br />und Sänger ...</h1>
    <p>und was ihr Herz <br />außer Singen noch <br />höher schlagen lässt.</p>
  </div>
  <div class="">
    <div class="relative max-w-3xl">
      <!-- TODO: singer component -->
      <p class="text-xl font-light italic text-gray-600 md:text-2xl">Dieser Abschnitt ist noch in Arbeit.</p>
    </div>
  </div>
</section>
