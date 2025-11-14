<script lang="ts">
  import { page } from '$app/state';

  let { toggleMenuIfOpen, hideOnHome = true } = $props<{
    toggleMenuIfOpen: () => void;
    hideOnHome?: boolean;
  }>();
</script>

<a
  href={`/`}
  class="btn-shadow hoverable:hover:btn-shadow-hover"
  class:hidden={hideOnHome && page.url.pathname === '/'}
  onclick={toggleMenuIfOpen}
>
  <img draggable="false" src="/favicon.png" alt="Logo / Home Icon" class="pointer-events-none h-12 w-auto" />
</a>
