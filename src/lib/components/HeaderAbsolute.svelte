<script lang="ts">
  import LogoLink from './LogoLink.svelte';

  let { showAbsoluteLogoLink = false } = $props<{
    showAbsoluteLogoLink?: boolean;
  }>();
</script>

<header class="pointer-events-none absolute left-0 top-0 z-40 flex h-[74px] w-full items-center py-4 pl-4 pr-20">
  <div class="pointer-events-auto flex w-full items-center gap-4">
    <LogoLink hideOnHome={false} invisible={!showAbsoluteLogoLink} />
    <div class="pointer-events-auto flex w-full justify-center md:justify-start">
      <p class="text-center text-xl font-normal leading-tight md:text-left">
        Jazzchor <br />"Singing me happy"
      </p>
    </div>
  </div>
</header>
