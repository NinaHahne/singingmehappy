export type GalleryPost = {
  image: string;
  alt: string;
  caption: string;
  class?: string; // optional (z.B. max-w-md / max-w-xs)
};

export type GalleryYear = {
  year: number; // nur die letzten beiden Ziffern (20–24 …)
  posts: GalleryPost[];
};

export const galleryData: GalleryYear[] = [
  {
    year: 24,
    posts: [
      {
        image: '/images/gallery/24_Weihnachtsfeier-Karaoke.jpg',
        alt: 'Weihnachtsfeier mit Karaoke',
        caption: 'Weihnachtsfeier mit Karaoke',
        class: 'lg:max-w-md',
      },
    ],
  },
  {
    year: 23,
    posts: [
      {
        image: '/images/gallery/23_Kuchen.jpg',
        alt: 'Kuchen',
        caption: 'Kuchen/ Probentag',
        class: 'lg:max-w-xs',
      },
    ],
  },
  // weitere Jahre einfach anhängen – ab 20 reicht.
];
