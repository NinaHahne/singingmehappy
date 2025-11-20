<script lang="ts">
  import HeaderAbsolute from '$lib/components/HeaderAbsolute.svelte';
  import VoiceSection from '$lib/components/choir/VoiceSection.svelte';
  import { choirSections } from '$lib/data/choir';
</script>

<HeaderAbsolute />

<section class="content-wrapper pt-20">
  <section class="content-section !pb-0 md:pb-0">
    <div class="left-col">
      <h1 class="text-4xl font-normal">Über Uns</h1>
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
</section>

<!-- TODO: section erst bei Klick auf "Mehr erfahren" anzeigen -->
<section class="content-wrapper">
  <section class="content-section !pt-0 md:pt-0">
    <div class="left-col hidden md:block"></div>
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
          “Singing me happy“ wurde 2015 von unserer Sopranistin Brigitte Asche gegründet, die das Glücksgefühl, das
          viele Menschen und sie selbst beim Singen empfinden, im Chornamen ausgedrückt hat. Seitdem setzt sie sich, in
          enger Zusammenarbeit mit der Chorleitung beständig für neue Impulse und gutes Miteinander ein und vor allem
          dafür, dass „der Laden läuft“, getreu ihres persönlichen Mottos „Keep on running“.
          <br /><br />
          Wir proben jeden Donnerstag von 18:30 bis 20:30 Uhr Uhr im IBZ, nahe des Rüdesheimer Platzes in Wilmersdorf. Derzeit
          sind wir offen für Neuzugänge in allen Stimmgruppen, besonders — wie sollte es anders sein — bei den Männern!
          <br /><br />
          Wir sind Mitglied im <a href="https://www.chorverband-berlin.de/" target="_blank">Chorverband Berlin</a>.
          <br />
          Ergänzendes über unser Ensemble erfahrt ihr im
          <a href="https://www.deutschlandfunkkultur.de/singing-me-happy-der-chor-zum-glueck-100.html" target="_blank"
            >Deutschlandfunk Kultur-Beitrag</a
          >.
        </p>
      </div>
    </div>
  </section>
</section>

<hr class="w-full border-8 border-t border-black" />

<section class="content-wrapper">
  <section class="content-section md:flex-col md:gap-0 md:px-20">
    <h1>Der Chorleiter</h1>
    <section class="relative flex w-full flex-col gap-4 md:flex-row md:gap-8">
      <p>
        Tobias Christl ist Sänger, Songwriter und erfahrener Gesangspädagoge mit Wurzeln in Jazz, Pop und improvisierter
        Musik. Seine musikalische Laufbahn führte ihn u. a. nach New York, Köln und Weimar, wo er Jazz/Pop-Gesang
        studierte. Als Sänger und Kreativer steht er seit vielen Jahren mit verschiedenen Bands und Projekten auf der
        Bühne und arbeitet regelmäßig im Studio.
        <br /><br />
        Neben seiner künstlerischen Arbeit war Tobias an zahlreichen Musikhochschulen tätig – zuletzt als Leiter des Fachbereichs
        Vocal Jazz an der Hochschule für Musik Würzburg. Er bringt Erfahrung aus verschiedenen Ensembles, Chorprojekten und
        Workshops mit und liebt es, Menschen für Musik und Stimme zu begeistern.
        <br /><br />
        Im Chor arbeitet Tobias mit funktionaler Stimmbildung, gesunder Atemführung und dem Ziel, die eigene Stimme frei,
        authentisch und mit Freude zu entfalten – egal ob beim Singen nach Noten, beim Improvisieren oder beim Entdecken
        neuer Klangmöglichkeiten. Was für ihn zählt: Neugier, Klang, Gemeinschaft – und Spaß am Singen.
        <br /><br />
        Tobias übernahm im November 2025 die Chorleitung von “Singing me happy“. Seine Energie und gute Laune setzt er dazu
        ein, die große eigene Leidenschaft für Musik zu teilen und den “Funken“ überspringen zu lassen.
      </p>
      <div
        class="sticky top-20 flex h-auto w-[75%] flex-shrink-0 flex-col items-end self-end md:h-[12lh] md:w-auto md:self-start"
      >
        <picture class="w-full md:h-full md:w-auto">
          <img
            src="/images/ueber-uns/portrait_Tobias_Foto_Dovile Sermokas.webp"
            alt="Portrait von Tobias Christl"
            class="w-full md:h-full md:w-auto"
          />
        </picture>
        <p class="mt-2 md:absolute md:left-0 md:top-full">Tobias Christl</p>
      </div>
    </section>
  </section>
</section>

<hr class="w-full border-8 border-t border-black" />

<section class="relative flex w-full flex-col gap-4 px-4 py-12 md:flex-row md:py-20 md:pl-8 md:pr-20 lg:gap-8">
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
