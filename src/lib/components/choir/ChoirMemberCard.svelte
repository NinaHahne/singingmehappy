<script lang="ts">
  import type { ChoirMember } from '$lib/types/choir';

  let { member } = $props<{
    member: ChoirMember;
  }>();
</script>

<article class="flex w-[calc(50%-0.5rem)] flex-col gap-1 text-left md:w-[120px]">
  <img
    src={member.imageSrc}
    alt={member.imageAlt ?? member.name}
    loading="lazy"
    decoding="async"
    class="mb-3 aspect-[3/4] w-full object-cover"
  />

  <h3 class="text-base font-normal leading-snug">
    {member.name}
  </h3>

  {#if member.subtitle}
    <p class="text-sm leading-snug text-neutral-700">
      {member.subtitle}
    </p>
  {/if}

  {#if member.text}
    <p class="mt-1 whitespace-pre-line text-sm leading-snug text-neutral-700">
      {member.text}
    </p>
  {/if}
</article>
