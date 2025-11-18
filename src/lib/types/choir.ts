export type ChoirMember = {
  id: string; // z.B. slug aus dem CMS
  name: string;
  imageSrc: string;
  imageAlt?: string;
  subtitle?: string; // z.B. "Sopran", "Alt / Tenor"
  text?: string; // optionaler Freitext, darf auch leer sein
};

export type VoiceSectionData = {
  id: string; // "sopran", "mezzo" ...
  title: string; // sichtbare Überschrift
  members: ChoirMember[];
};
