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
  id?: string;
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

export const galleryData: GalleryYear[] = [
  {
    year: 24,
    posts: [
      {
        id: 'weihnachtsfeier-2024', // id muss eindeutig sein / globally unique
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
            imageClass: 'lg:max-w-lg',
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
            imageClass: 'lg:max-w-lg',
          },
          {
            image: '/images/gallery/2024_02_a.jpg',
            alt: 'Petra, Melanie, Irene, Claudia',
            caption: 'Petra, Melanie, Irene, Claudia',
            imageClass: 'max-w-[65%] lg:max-w-xs',
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
            imageClass: 'lg:max-w-lg',
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
        asideClass: 'lg:max-w-40 lg:justify-center',
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
            imageClass: 'lg:max-w-lg',
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
            imageClass: 'lg:max-w-lg',
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
            imageClass: 'lg:max-w-lg',
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
            imageClass: 'lg:max-w-lg',
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
          },
          {
            image: '/images/gallery/2022_03_a.jpg',
            alt: 'Fotoshooting Dezember',
            imageClass: 'max-w-[50%] lg:max-w-xs',
            itemClass: 'self-start items-start lg:-mt-20',
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
            imageClass: 'lg:max-w-lg',
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
            imageClass: 'lg:max-w-lg',
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
];
