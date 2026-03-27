import type { PortableTextBlock } from '@portabletext/types';

export function replaceProtectedSpaces(value: PortableTextBlock[] | undefined): PortableTextBlock[] | undefined {
  if (!value) return value;

  return value.map((block) => {
    if (!('children' in block) || !Array.isArray(block.children)) {
      return block;
    }

    return {
      ...block,
      children: block.children.map((child) => {
        if (!('text' in child) || typeof child.text !== 'string') {
          return child;
        }

        return {
          ...child,
          text: child.text.replaceAll('~', '\u00A0'),
        };
      }),
    };
  });
}
