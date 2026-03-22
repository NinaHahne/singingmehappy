import type { PageLoad } from './$types';
import { cachedFetch } from '$lib/sanity/client';
import { newsQuery } from '$lib/sanity/queries';

type NewsData = {
  title?: string;
  intro?: string;
  content?: unknown[];
  _updatedAt: string;
};

export const load: PageLoad = async () => {
  const news = await cachedFetch<NewsData>(newsQuery);

  return {
    news,
  };
};
