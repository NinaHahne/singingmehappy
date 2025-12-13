export type GalleryPostItem = {
  id: string;

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
  id: string;
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
        asideClass: 'lg:max-w-40 lg:justify-end', // Beschreibung schmaler und unten
        // itemsWrapClass: 'lg:items-center',
        items: [
          {
            id: 'karaoke-01',
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
        asideClass: 'lg:max-w-40 lg:justify-start',
        items: [
          {
            id: 'auftritt-01',
            image: '/images/gallery/2024_03_c.jpg',
            alt: 'Auftritt Neuköllner Höfe',
            imageClass: 'lg:max-w-lg',
          },
          {
            id: 'auftritt-02',
            image: '/images/gallery/2024_03_b.jpg',
            alt: 'Nannette, Sarah, Melanie',
            caption: 'Nannette, Sarah, Melanie',
            imageClass: 'max-w-[50%] lg:max-w-xs',
            itemClass: 'self-start items-start lg:-mt-20',
          },
          {
            id: 'auftritt-03',
            image: '/images/gallery/2024_03_a.jpg',
            alt: 'Wehende Verbeugung',
            caption: 'Wehende Verbeugung',
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
            id: 'probe-01',
            image: '/images/gallery/2023_04_c.jpg',
            alt: 'Probentag',
            imageClass: 'lg:max-w-lg',
          },
          {
            id: 'probe-02',
            image: '/images/gallery/2023_04_b.jpg',
            alt: 'Probentag',
            // imageClass: 'lg:max-w-sm',
            itemClass: 'self-start lg:-mt-20',
          },
          {
            id: 'kuchen-01',
            image: '/images/gallery/2023_04_a.jpg',
            alt: 'Kuchen',
            imageClass: 'max-w-[50%] lg:max-w-xs',
            // caption: 'Leckerer Kuchen',
          },
        ],
      },
    ],
  },
];
