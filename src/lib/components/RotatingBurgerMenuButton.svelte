<script lang="ts">
  export let isOpen = false;
  export let onToggle;
</script>

<button
  id="toggle_menu"
  class="menu-shadow fixed right-0 top-0 z-50 flex items-end justify-center p-[24px]"
  onclick={onToggle}
  aria-label={isOpen ? 'Close menu' : 'Open menu'}
>
  <div
    class="relative flex h-[26px] w-[38px] flex-col items-center justify-between transition-transform duration-300"
    class:rotate-180={isOpen}
  >
    <span
      class="relative block h-[2px] w-full rounded-sm bg-softblack transition-transform duration-300"
      class:-rotate-45={isOpen}
      class:translate-y-[12px]={isOpen}
    ></span>
    <span
      class="relative block h-[2px] w-full scale-100 rounded-sm bg-softblack transition-all duration-300"
      class:opacity-0={isOpen}
      class:scale-0={isOpen}
    ></span>
    <span
      class="relative block h-[2px] w-full rounded-sm bg-softblack transition-transform duration-300"
      class:rotate-45={isOpen}
      class:-translate-y-[12px]={isOpen}
    ></span>
  </div>
</button>
