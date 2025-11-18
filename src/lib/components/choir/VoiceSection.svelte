<script lang="ts">
  import ChoirMemberCard from './ChoirMemberCard.svelte';
  import type { VoiceSectionData } from '$lib/types/choir';

  let { section } = $props<{
    section: VoiceSectionData;
  }>();
</script>

<section class="w-full">
  <header class="mb-4 flex items-baseline gap-4">
    <h2 class="text-3xl font-normal">
      {section.title}
    </h2>
    <hr class="mt-[0.4lh] flex-1 border-t border-black/40" />
  </header>

  <div class="flex flex-wrap gap-4">
    {#each section.members as member (member.id)}
      <ChoirMemberCard {member} />
    {/each}
  </div>
</section>
