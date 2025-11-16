<script lang="ts">
  import { page } from '$app/state';

  let {
    toggleMenuIfOpen,
    hideOnHome = true,
    invisible = false,
  } = $props<{
    toggleMenuIfOpen: () => void;
    hideOnHome?: boolean;
    invisible?: boolean;
  }>();
</script>

<a
  href={`/`}
  class="btn-shadow hoverable:hover:btn-shadow-hover flex-shrink-0"
  class:hidden={hideOnHome && page.url.pathname === '/'}
  class:invisible
  onclick={toggleMenuIfOpen}
>
  <img draggable="false" src="/favicon.png" alt="Logo / Home Icon" class="pointer-events-none h-12 w-auto" />
</a>

<style>
  .invisible {
    opacity: 0;
    pointer-events: none;
  }
</style>
