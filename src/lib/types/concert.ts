export type ConcertLink = {
  label: string;
  url: string;
};

export type ConcertImage = {
  alt?: string;
  asset?: {
    _ref: string;
    _type: 'reference';
  };
  crop?: {
    _type?: 'sanity.imageCrop';
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    _type?: 'sanity.imageHotspot';
    x: number;
    y: number;
    height: number;
    width: number;
  };
};

export type Concert = {
  _id: string;
  date: string;
  timeLabel?: string;
  title?: string;
  description?: unknown[];
  location?: string;
  mapsUrl?: string;
  links?: ConcertLink[];
  flyerImage?: ConcertImage;
};
