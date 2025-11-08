<script lang="ts">
  export let isOpen = false;
  export let onToggle;
</script>

<button
  id="toggle_menu"
  class="menu-shadow fixed right-0 top-0 z-50 flex h-[70px] w-[80px] items-end justify-center p-[24px]"
  onclick={onToggle}
  aria-label={isOpen ? 'Close menu' : 'Open menu'}
>
  <div
    class="relative flex h-full w-full flex-col items-center justify-between transition-transform duration-300"
    class:rotate-180={isOpen}
  >
    <span
      class="bg-softblack relative block h-[2px] w-8 rounded-sm transition-transform duration-300"
      class:-rotate-45={isOpen}
      class:translate-y-[10px]={isOpen}
    ></span>
    <span
      class="bg-softblack relative block h-[2px] w-8 scale-100 rounded-sm transition-all duration-300"
      class:opacity-0={isOpen}
      class:scale-0={isOpen}
    ></span>
    <span
      class="bg-softblack relative block h-[2px] w-8 rounded-sm transition-transform duration-300"
      class:rotate-45={isOpen}
      class:-translate-y-[10px]={isOpen}
    ></span>
  </div>
</button>
