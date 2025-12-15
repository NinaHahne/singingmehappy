export type GalleryPostItem = {
  image: string;
  alt: string;

  /**
   * Caption direkt am Bild (optional).
   * Wenn du stattdessen lieber alles in post.description schreibst, kannst du caption leer lassen.
   */
  caption?: string;

  /** Styling pro Bild+Beschreibung-Block */
  itemClass?: string;
  imageClass?: string;
  captionClass?: string;
};

export type GalleryPost = {
  id?: string; // id muss eindeutig sein / globally unique
  /**
   * Optional: Überschrift innerhalb des Posts (z.B. "Weihnachtsfeier")
   */
  title?: string;

  /**
   * Optional: Post-Beschreibung (z.B. längerer Text über mehrere Zeilen).
   */
  description?: string;

  /** Mehrere Bilder/Items pro Post */
  items: GalleryPostItem[];

  /** Styling pro Post */
  postClass?: string;
  asideClass?: string;
  itemsWrapClass?: string;
};

export type GalleryYear = {
  year: number; // 20–24 etc.
  posts: GalleryPost[];
};

// non-breaking space: \u00A0
// soft hyphen: \u00AD
// non-breaking hyphen: \u2011

export const galleryData: GalleryYear[] = [
  {
    year: 25,
    posts: [
      {
        id: 'abschied-von-martin-2025',
        // title: 'Abschied von Martin',
        description: 'Abschied von Martin',
        // asideClass: 'lg:max-w-40 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2025_09_Sept-25_Abschied_v.Martin.webp',
            alt: 'Abschied von Martin',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
      {
        id: '10-jaehriges-jubilaeum-2025',
        // title: 'Celebration - 10 Jahre Singing me happy',
        description: 'Celebration - 10\u00A0Jahre Singing\u00A0me\u00A0happy',
        asideClass: 'lg:max-w-40 lg:justify-start', // Beschreibung schmaler und oben
        items: [
          {
            image: '/images/gallery/2025_05_10-jaehriges_Mai-25_Konzert.webp',
            alt: 'Celebration - 10 Jahre Singing me happy',
            imageClass: 'lg:max-w-lg',
          },
          {
            image: '/images/gallery/2025_05_10-jaehriges_Gast_Mando.webp',
            alt: 'Gast Mando',
            caption: 'Gast Mando',
            imageClass: 'lg:max-w-sm',
            itemClass: 'self-start items-start',
          },
          {
            image: '/images/gallery/2025_05_10-jaehriges_Swingband-Chat-Noir.webp',
            alt: 'Swingband Chat Noir',
            caption: 'Swingband Chat Noir',
            imageClass: 'lg:max-w-sm',
            itemClass: 'lg:-mt-28 self-end items-end',
          },
          {
            image: '/images/gallery/2025_05_10-jaehriges_Tanzauftritt_1.webp',
            alt: 'Tanzauftritt',
            caption: 'Tanzauftritt',
            // imageClass: 'lg:max-w-sm',
            itemClass: 'self-start items-start',
          },
          {
            image: '/images/gallery/2025_05_10-jaehriges-Party.webp',
            alt: 'Tanzparty',
            caption: 'Tanzparty',
            // imageClass: 'lg:max-w-sm',
            itemClass: 'self-end items-end',
          },
        ],
      },
      {
        id: 'doppelkonzert-2025',
        // title: 'Doppelkonzert',
        description: 'Doppelkonzert',
        // asideClass: 'lg:max-w-40 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2025_04_Doppelkonzert-April-25.webp',
            alt: 'Doppelkonzert',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
      {
        id: 'proben-nachsitzung-2025',
        // title: 'Proben Nachsitzung',
        description: 'Proben Nachsitzung',
        // asideClass: 'lg:max-w-40 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2025_01_Proben-Nachsitzung_im_Januar_2025.webp',
            alt: 'Proben Nachsitzung',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
    ],
  },
  {
    year: 24,
    posts: [
      {
        id: 'weihnachtsfeier-2024',
        // title: 'Weihnachtsfeier mit Karaoke',
        description: 'Weihnachtsfeier mit Karaoke',
        // postClass: 'lg:py-14',
        asideClass: 'lg:max-w-40 lg:justify-center', // Beschreibung schmaler
        // itemsWrapClass: 'lg:items-center',
        items: [
          {
            image: '/images/gallery/2024_04.jpg',
            alt: 'Weihnachtsfeier mit Karaoke',
            // caption: 'Wir geben alles!',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
      {
        id: 'auftritt-neukoellner-hoefe-2024',
        // title: 'Auftritt Neuköllner Höfe',
        description: 'Auftritt Neuköllner Höfe',
        asideClass: 'lg:max-w-40 lg:justify-start', // Beschreibung schmaler und oben
        items: [
          {
            image: '/images/gallery/2024_03_c.jpg',
            alt: 'Auftritt Neuköllner Höfe',
            imageClass: 'lg:max-w-lg',
          },
          {
            image: '/images/gallery/2024_03_b.jpg',
            alt: 'Nannette, Sarah, Melanie',
            caption: 'Nannette, Sarah, Melanie',
            imageClass: 'max-w-[50%] lg:max-w-xs',
            itemClass: 'self-start items-start lg:-mt-20',
          },
          {
            image: '/images/gallery/2024_03_a.jpg',
            alt: 'Wehende Verbeugung',
            caption: 'Wehende Verbeugung',
            imageClass: 'lg:max-w-lg',
          },
        ],
      },
      {
        id: 'fotosession-mit-gesang-am-brunnen-2024',
        // title: 'Fotosession mit Gesang am Brunnen',
        description: 'Fotosession mit Gesang am Brunnen',
        asideClass: 'lg:max-w-40 lg:justify-start',
        items: [
          {
            image: '/images/gallery/2024_02_b.png',
            alt: 'Fotosession mit Gesang am Brunnen',
            imageClass: 'lg:max-w-xl',
          },
          {
            image: '/images/gallery/2024_02_a.jpg',
            alt: 'Petra, Melanie, Irene, Claudia',
            caption: 'Petra, Melanie, Irene, Claudia',
            imageClass: 'max-w-[65%] lg:max-w-sm',
          },
        ],
      },
      {
        id: 'gute-stimmung-fete-2024',
        // title: 'Gute Stimmung Fête 2024',
        description: 'Gute Stimmung Fête 2024',
        asideClass: 'lg:max-w-40 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2024_01.jpg',
            alt: 'Gute Stimmung Fête 2024',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
    ],
  },
  {
    year: 23,
    posts: [
      {
        id: 'probentag-kuchen-2023',
        // title: 'Probentag mit Kuchen',
        description: 'Probentag mit Kuchen',
        asideClass: 'lg:max-w-40 lg:justify-start',
        items: [
          {
            image: '/images/gallery/2023_04_c.jpg',
            alt: 'Probentag',
            imageClass: 'lg:max-w-lg',
          },
          {
            image: '/images/gallery/2023_04_b.jpg',
            alt: 'Probentag',
            // imageClass: 'lg:max-w-sm',
            itemClass: 'self-start lg:-mt-20',
          },
          {
            image: '/images/gallery/2023_04_a.jpg',
            alt: 'Kuchen',
            imageClass: 'max-w-[50%] lg:max-w-xs',
            // caption: 'Leckerer Kuchen',
          },
        ],
      },
      {
        id: 'fete-de-la-musique-2023',
        // title: 'Fête de la musique',
        description: 'Fête de la musique',
        asideClass: 'lg:max-w-40 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2023_03.jpg',
            alt: 'Fête de la musique',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
      {
        id: 'lange-nacht-der-choere-2023',
        // title: 'Lange Nacht der Chöre',
        description: 'Lange Nacht der Chöre',
        asideClass: 'lg:max-w-40 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2023_02.jpg',
            alt: 'Lange Nacht der Chöre',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
      {
        id: 'vorbereitung-weihnachtskonzert-onkel-tom-ladenpassage-2023',
        // title: 'Vorbereitung Weihnachtskonzert Onkel-Tom Ladenpassage',
        description: 'Vorbereitung Weihnachtskonzert Onkel-Tom Ladenpassage',
        asideClass: 'lg:max-w-44 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2023_01.jpg',
            alt: 'Vorbereitung Weihnachtskonzert Onkel-Tom Ladenpassage',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
    ],
  },
  {
    year: 22,
    posts: [
      {
        id: 'probentag-2022',
        // title: 'Probentag',
        description: 'Probentag',
        asideClass: 'lg:max-w-44 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2022_04.jpg',
            alt: 'Probentag',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
      {
        id: 'fotoshooting-dezember-2022',
        // title: 'Fotoshooting Dezember',
        description: 'Fotoshooting Dezember',
        asideClass: 'lg:max-w-40 lg:justify-start', // Beschreibung schmaler und oben
        items: [
          {
            image: '/images/gallery/2022_03_b.jpg',
            alt: 'Fotoshooting Dezember',
            imageClass: 'lg:max-w-lg',
            itemClass: 'self-start items-start',
          },
          {
            image: '/images/gallery/2022_03_a.jpg',
            alt: 'Fotoshooting Dezember',
            imageClass: 'max-w-[50%] lg:max-w-sm',
            itemClass: 'lg:-mt-20',
          },
        ],
      },
      {
        id: 'fete-de-la-musique-2022',
        // title: 'Auftritt Fête de la musique',
        description: 'Auftritt Fête de la musique',
        asideClass: 'lg:max-w-44 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2022_02.jpg',
            alt: 'Auftritt Fête de la musique',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
      {
        id: 'auftritt-koerner-park-2022',
        // title: 'Auftritt Körner Park',
        description: 'Auftritt Körner Park',
        asideClass: 'lg:max-w-40 lg:justify-start', // Beschreibung schmaler und oben
        items: [
          {
            image: '/images/gallery/2022_01_c.jpg',
            alt: 'Auftritt Körner Park',
            imageClass: 'lg:max-w-xl',
          },
          {
            image: '/images/gallery/2022_01_b.jpg',
            alt: 'Auftritt Körner Park',
            imageClass: 'max-w-[65%] lg:max-w-xs',
          },
          {
            image: '/images/gallery/2022_01_a.jpg',
            alt: 'Auftritt Körner Park',
            imageClass: 'max-w-[65%] lg:max-w-xs',
            itemClass: 'self-start items-start lg:-mt-24',
          },
        ],
      },
    ],
  },
  {
    year: 21,
    posts: [
      {
        id: 'konzert-gendarmenmarkt-2021',
        // title: 'Konzert Gendarmenmarkt',
        description: 'Konzert Gendarmenmarkt',
        asideClass: 'lg:max-w-40 lg:justify-start',
        items: [
          {
            image: '/images/gallery/2021_05_c.webp',
            alt: 'Konzert Gendarmenmarkt',
            imageClass: 'lg:max-w-lg',
          },
          {
            image: '/images/gallery/2021_05_b.webp',
            alt: 'Konzert Gendarmenmarkt',
            // imageClass: 'lg:max-w-sm',
            itemClass: 'self-start lg:-mt-20',
          },
          {
            image: '/images/gallery/2021_05_a.webp',
            alt: 'Glühwein nach dem Konzert',
            imageClass: 'max-w-[50%] lg:max-w-xs',
            caption: 'Glühwein nach dem Konzert',
          },
        ],
      },
      {
        id: 'weihnachtsfeier-am-kiosk-2021',
        // title: 'Weihnachtsfeier am "Kiosk"',
        description: 'Weihnachtsfeier am "Kiosk',
        asideClass: 'lg:max-w-40 lg:justify-end', // Beschreibung schmaler und unten
        items: [
          {
            image: '/images/gallery/2021_04_b.jpg',
            alt: 'Weihnachtsfeier am "Kiosk',
            imageClass: 'lg:max-w-lg',
            itemClass: 'self-start items-start',
          },
          {
            image: '/images/gallery/2021_04_a.jpg',
            alt: 'Weihnachtsfeier am "Kiosk',
            imageClass: 'max-w-[50%] lg:max-w-sm',
            itemClass: 'lg:-mt-28',
          },
        ],
      },
      {
        id: 'auftritt-jagdschloss-grunewald-2021',
        // title: 'Auftritt Jagdschloß Grunewald',
        description: 'Auftritt Jagdschloß Grunewald',
        asideClass: 'lg:max-w-40 lg:justify-start', // Beschreibung schmaler und oben
        items: [
          {
            image: '/images/gallery/2021_03_b.jpg',
            alt: 'Auftritt Jagdschloß Grunewald',
            imageClass: 'lg:max-w-sm',
          },
          {
            image: '/images/gallery/2021_03_a.jpg',
            alt: 'Plakat zum Auftritt',
            caption: 'Plakat zum Auftritt',
            imageClass: 'lg:max-w-xs',
            itemClass: 'self-start items-start lg:-mt-40',
          },
        ],
      },
      {
        id: 'auftritt-eroeffnung-chorzentrum-2021',
        // title: 'Auftritt Eröffnung Chorzentrum',
        description: 'Auftritt Eröffnung Chorzentrum',
        asideClass: 'lg:max-w-40 lg:justify-start', // Beschreibung schmaler und oben
        items: [
          {
            image: '/images/gallery/2021_02_c.jpg',
            alt: 'Einsingen an der Straße vor Chorzentrumseröffnung',
            caption: 'Einsingen an der Straße vor Chorzentrumseröffnung',
            // imageClass: 'lg:max-w-lg',
          },
          {
            image: '/images/gallery/2021_02_b.jpg',
            alt: 'Auftritt Eröffnung Chorzentrum',
            imageClass: 'max-w-[65%] lg:max-w-xs z-10',
          },
          {
            image: '/images/gallery/2021_02_a.jpg',
            alt: 'Auftritt Eröffnung Chorzentrum',
            imageClass: 'lg:max-w-lg',
            itemClass: 'self-start items-start lg:-mt-32',
          },
        ],
      },
      {
        id: 'perspektivgespraech-2021',
        // title: 'Zufrieden nach dem Perspektivgespräch',
        description: 'Zufrieden nach dem Perspektivgespräch',
        // asideClass: 'lg:max-w-44 lg:justify-center', // Beschreibung schmaler
        items: [
          {
            image: '/images/gallery/2021_01.jpg',
            alt: 'Zufrieden nach dem Perspektivgespräch',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
    ],
  },
  {
    year: 20,
    posts: [
      {
        id: 'probe-franks-herbstgarten-2020',
        // title: 'Probe Franks Herbstgarten',
        description: 'Probe Franks Herbstgarten',
        asideClass: 'lg:max-w-40 lg:justify-start', // Beschreibung schmaler und oben
        items: [
          {
            image: '/images/gallery/2020_06_b.jpg',
            alt: 'Probe Franks Herbstgarten',
            imageClass: 'lg:max-w-lg',
          },
          {
            image: '/images/gallery/2020_06_a.jpg',
            alt: 'Probe Franks Herbstgarten',
            imageClass: 'max-w-[50%] lg:max-w-xs',
            itemClass: 'self-start items-start lg:-mt-20',
          },
        ],
      },
      {
        id: 'vereinsgruendung-2020',
        // title: 'Vereinsgründung Dezember 2020 in eisigem Raum',
        description: 'Vereinsgründung Dezember 2020 in eisigem Raum',
        asideClass: 'lg:justify-start', // Beschreibung oben
        items: [
          {
            image: '/images/gallery/2020_05_b.jpg',
            alt: 'Vereinsgründung Dezember 2020 in eisigem Raum',
            imageClass: 'lg:max-w-sm',
          },
          {
            image: '/images/gallery/2020_05_a.jpg',
            alt: 'Wunderkerzen nach Vereinsgründung',
            caption: 'Wunderkerzen nach Vereinsgründung',
            imageClass: 'max-w-[65%] lg:max-w-sm',
            itemClass: 'self-start items-start lg:-mt-20',
          },
        ],
      },
      {
        id: 'probe-hof-malzfabrik-2020',
        // title: 'Probe im Hof Malzfabrik',
        description: 'Probe im Hof Malzfabrik',
        asideClass: 'lg:justify-start', // Beschreibung oben
        items: [
          {
            image: '/images/gallery/2020_04_b.jpg',
            alt: 'Probe im Hof Malzfabrik',
            imageClass: 'lg:max-w-xl',
          },
          {
            image: '/images/gallery/2020_04_a.jpg',
            alt: 'Wo sind unsere Sängerinnen???',
            caption: 'Wo sind unsere Sängerinnen???',
            imageClass: 'max-w-[50%] lg:max-w-xs',
            itemClass: 'self-start items-start lg:-mt-28',
          },
        ],
      },
      {
        id: 'probe-malzfabrik-abstand-2020',
        // title: 'Probe Malzfabrik',
        description: 'Probe Malzfabrik',
        asideClass: 'lg:justify-start', // Beschreibung oben
        items: [
          {
            image: '/images/gallery/2020_03_b.jpg',
            alt: 'Probe im Hof Malzfabrik',
            caption: 'Abstand halten!',
            imageClass: 'max-w-[65%] lg:max-w-sm',
          },
          {
            image: '/images/gallery/2020_03_a.jpg',
            alt: 'Probe Malzfabrik',
            imageClass: 'max-w-[65%] lg:max-w-sm',
            itemClass: 'self-start items-start lg:-mt-28',
          },
        ],
      },
      {
        id: 'probe-park-abstandsschild-2020',
        // title: 'Probe im Park',
        description: 'Probe als angemeldete Demo im Park mit Abstandsschild',
        asideClass: 'lg:max-w-40 lg:justify-start', // Beschreibung schmaler und oben
        items: [
          {
            image: '/images/gallery/2020_02_c.jpg',
            alt: 'Probe im Park',
            imageClass: 'max-w-[65%] lg:max-w-sm',
          },
          {
            image: '/images/gallery/2020_02_b.jpg',
            alt: 'Probe im Park',
            // imageClass: 'max-w-[65%] lg:max-w-sm',
            itemClass: 'self-start items-start lg:-mt-20',
          },
          {
            image: '/images/gallery/2020_02_a.jpg',
            alt: 'Konsti & Irene singend im Park',
            caption: 'Konsti & Irene singend im Park',
            imageClass: 'max-w-[65%] lg:max-w-sm',
          },
        ],
      },
      {
        id: 'probe-im-kita-hof-2020',
        // title: 'Probe im Kita Hof',
        description: 'Probe im Kita\u00A0Hof',
        items: [
          {
            image: '/images/gallery/2020_01_b.jpg',
            alt: 'Probe im Hof Malzfabrik',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
      {
        id: 'unter-der-bruecke-2020',
        // title: 'unter der Brücke',
        description: 'unter der Brücke',
        items: [
          {
            image: '/images/gallery/2020_01_a.jpg',
            alt: 'unter der Brücke',
            imageClass: 'lg:max-w-xl',
          },
        ],
      },
    ],
  },
  // {
  //   year: 2019,
  //   posts: [

  //   ],
  // },
  //   {
  //   year: 2018,
  //   posts: [

  //   ],
  // },
];
