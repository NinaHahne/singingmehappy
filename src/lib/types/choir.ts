// export type ChoirMember = {
//   id: string; // z.B. slug aus dem CMS
//   name: string;
//   imageSrc: string;
//   imageAlt?: string;
//   subtitle?: string; // z.B. "Sopran", "Alt / Tenor"
//   text?: string; // optionaler Freitext, darf auch leer sein
// };

// export type VoiceSectionData = {
//   id: string; // "sopran", "mezzo" ...
//   title: string; // sichtbare Überschrift
//   members: ChoirMember[];
// };

import type { SanityImageSource } from '@sanity/image-url';

export type VoiceType = 'sopran' | 'mezzo' | 'alt' | 'tenor' | 'bariton-bass';

export type ChoirMember = {
  _id: string;
  name: string;
  voiceType: VoiceType;
  subtitle: string;
  text?: string;
  sortOrder: number;
  image: SanityImageSource & {
    alt: string;
  };
};

export type VoiceSectionData = {
  id: VoiceType;
  title: string;
  members: ChoirMember[];
};
