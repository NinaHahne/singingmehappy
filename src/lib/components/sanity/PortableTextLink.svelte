<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    portableText: MarkComponentProps<{ href?: string }>;
    children: Snippet;
  }

  let { portableText, children }: Props = $props();
  let { value } = $derived(portableText);

  const isExternal = $derived(value?.href ? /^(https?:)?\/\//.test(value.href) : false);
</script>

{#if value?.href}
  <a
    href={value.href}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noreferrer noopener' : undefined}
    class="font-light text-black/70 underline decoration-black/50 decoration-1 underline-offset-4 transition active:decoration-transparent hoverable:hover:decoration-transparent"
  >
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}
