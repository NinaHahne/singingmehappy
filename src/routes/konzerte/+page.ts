import type { PageLoad } from './$types';
import { cachedFetch } from '$lib/sanity/client';
import { concertsQuery } from '$lib/sanity/queries';
import type { Concert } from '$lib/types/concert';

function isUpcomingConcert(dateString: string) {
  const today = new Date().toISOString().slice(0, 10);
  return dateString >= today;
}

export const load: PageLoad = async () => {
  const concerts = await cachedFetch<Concert[]>(concertsQuery);

  const upcomingConcerts = concerts.filter((concert) => isUpcomingConcert(concert.date));
  const pastConcerts = concerts.filter((concert) => !isUpcomingConcert(concert.date)).reverse();

  return {
    upcomingConcerts,
    pastConcerts,
  };
};
