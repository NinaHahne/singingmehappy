import { createClient } from '@sanity/client';

/**
 * Toggle this when actively editing content in Sanity.
 * Example:
 * VITE_WORKING_ON_CMS=true npm run dev
 */
const workingOnCMS = import.meta.env.VITE_WORKING_ON_CMS === 'true';

const isDev = import.meta.env.DEV;

if (workingOnCMS) {
  console.log('Working on CMS (Sanity CDN disabled)');
}

export const client = createClient({
  projectId: 'jhfft3cv', // Singing Me Happy
  dataset: 'production',
  apiVersion: '2026-03-20',
  useCdn: !workingOnCMS,
});

/**
 * Simple in-memory cache for build/runtime fetches
 */
const cache: Record<string, unknown> = {};

export async function cachedFetch<T = unknown>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  const key = JSON.stringify({ query, params });

  if (!isDev && cache[key]) {
    return cache[key] as T;
  }

  const data = await client.fetch<T>(query, params);

  if (!isDev) {
    cache[key] = data;
  }

  return data;
}

export default client;
