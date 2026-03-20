/**
 * Returns true if a debug flag is active via URL
 * Examples:
 * ?debug=hero
 * ?debug=hero,menu
 */
export function hasDebugFlag(searchParams: URLSearchParams, key: string): boolean {
  const debugParam = searchParams.get('debug');

  if (!debugParam) return false;

  return debugParam
    .split(',')
    .map((value) => value.trim())
    .includes(key);
}
