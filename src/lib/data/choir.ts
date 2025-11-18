import type { VoiceSectionData } from '$lib/types/choir';

export const choirSections: VoiceSectionData[] = [
  // ---------------------------
  // SOPRAN
  // ---------------------------
  {
    id: 'sopran',
    title: 'Sopran',
    members: [
      {
        id: 'brit',
        name: 'Brit',
        imageSrc: '/images/chor/Brit.webp',
        imageAlt: 'Brit – Sopran',
        subtitle: 'Sopran',
        text: 'Tanzen! Tanzen! Tanzen!',
      },
      {
        id: 'stef',
        name: 'Stef',
        imageSrc: '/images/chor/Stef.webp',
        imageAlt: 'Stef – Sopran',
        subtitle: 'Sopran',
      },
      {
        id: 'melanie',
        name: 'Melanie',
        imageSrc: '/images/chor/Melanie.webp',
        imageAlt: 'Melanie – Sopran',
        subtitle: 'Sopran',
        text: 'Ponyhof Forever!',
      },
      {
        id: 'britta',
        name: 'Britta',
        imageSrc: '/images/chor/Britta.webp',
        imageAlt: 'Britta – Sopran',
        subtitle: 'Sopran',
        text: 'Schönes genießen',
      },
    ],
  },

  // ---------------------------
  // MEZZO
  // ---------------------------
  {
    id: 'mezzo',
    title: 'Mezzo',
    members: [
      {
        id: 'nannette',
        name: 'Nannette',
        imageSrc: '/images/chor/Nannette.webp',
        imageAlt: 'Nannette – Mezzo',
        subtitle: 'Mezzo',
        text: 'Swing & Blues —\nhören, spielen, tanzen',
      },
      {
        id: 'petra',
        name: 'Petra',
        imageSrc: '/images/chor/Petra.webp',
        imageAlt: 'Petra – Mezzo',
        subtitle: 'Mezzo',
        text: 'Architektur erkunden',
      },
      {
        id: 'sarah',
        name: 'Sarah',
        imageSrc: '/images/chor/Sarah.webp',
        imageAlt: 'Sarah – Mezzo/Alt',
        subtitle: 'Mezzo / Alt',
        text: 'Karaoke',
      },
    ],
  },

  // ---------------------------
  // ALT
  // ---------------------------
  {
    id: 'alt',
    title: 'Alt',
    members: [
      {
        id: 'kirsten',
        name: 'Kirsten',
        imageSrc: '/images/chor/Kirsten.webp',
        imageAlt: 'Kirsten – Alt',
        subtitle: 'Alt',
        text: 'Kochen',
      },
      {
        id: 'irene',
        name: 'Irene',
        imageSrc: '/images/chor/Irene.webp',
        imageAlt: 'Irene – Alt/Tenor',
        subtitle: 'Alt / Tenor',
        text: 'Spielen! "Aus dem Garten komm ich zu euch.."',
      },
      {
        id: 'claudia-alt',
        name: 'Claudia',
        imageSrc: '/images/chor/Claudia.webp',
        imageAlt: 'Claudia – Alt/Tenor',
        subtitle: 'Alt / Tenor',
        text: 'Fahrradfahren',
      },
    ],
  },

  // ---------------------------
  // TENOR
  // ---------------------------
  {
    id: 'tenor',
    title: 'Tenor',
    members: [
      {
        id: 'konstantin',
        name: 'Konstantin',
        imageSrc: '/images/chor/Konstantin.webp',
        imageAlt: 'Konstantin – Tenor',
        subtitle: 'Tenor',
        text: 'Fahrradfahren &\nmit Holz bauen',
      },
      {
        id: 'frank',
        name: 'Frank',
        imageSrc: '/images/chor/Frank.webp',
        imageAlt: 'Frank – Tenor',
        subtitle: 'Tenor',
        text: 'Joggen und danach\nCappuccino trinken',
      },
    ],
  },

  // ---------------------------
  // BARITON / BAß
  // ---------------------------
  {
    id: 'bariton-bass',
    title: 'Bariton / Baß',
    members: [
      {
        id: 'peter',
        name: 'Peter',
        imageSrc: '/images/chor/Peter.webp',
        imageAlt: 'Peter – Bariton/Baß',
        subtitle: 'Bariton / Baß',
        text: 'Hören und Gehör',
      },
      {
        id: 'martin',
        name: 'Martin',
        imageSrc: '/images/chor/Martin.webp',
        imageAlt: 'Martin – Bariton/Baß',
        subtitle: 'Bariton / Baß',
        text: 'Spielen auf allem,\nwas Saiten hat',
      },
      {
        id: 'erich',
        name: 'Erich',
        imageSrc: '/images/chor/Erich.webp',
        imageAlt: 'Erich – Baß',
        subtitle: 'Baß',
        text: 'Fußballgucken &\ndabei ein Bier trinken',
      },
    ],
  },
];
