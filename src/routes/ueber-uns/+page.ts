import type { PageLoad } from './$types';
import { cachedFetch } from '$lib/sanity/client';
import { choirMembersQuery } from '$lib/sanity/queries';
import type { ChoirMember, VoiceSectionData, VoiceType } from '$lib/types/choir';

const SECTION_TITLES: Record<VoiceType, string> = {
  sopran: 'Sopran',
  mezzo: 'Mezzo',
  alt: 'Alt',
  tenor: 'Tenor',
  'bariton-bass': 'Bariton / Bass',
};

export const load: PageLoad = async () => {
  const members = await cachedFetch<ChoirMember[]>(choirMembersQuery);

  const orderedVoiceTypes: VoiceType[] = ['sopran', 'mezzo', 'alt', 'tenor', 'bariton-bass'];

  const choirSections: VoiceSectionData[] = orderedVoiceTypes
    .map((voiceType) => ({
      id: voiceType,
      title: SECTION_TITLES[voiceType],
      members: members.filter((member) => member.voiceType === voiceType),
    }))
    .filter((section) => section.members.length > 0);

  return {
    choirSections,
  };
};
