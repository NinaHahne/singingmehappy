<!-- Global layout for all pages -->
<script lang="ts">
  import { page } from '$app/state';
  import { onDestroy, onMount } from 'svelte';
  import '../styles/app.css';
  import RotatingBurgerMenuButton from '$lib/components/RotatingBurgerMenuButton.svelte';

  let { children } = $props();

  const getScrollbarWidth = () => {
    // Scrollbar-Breite ermitteln
    const e = document.createElement('div');
    (e.style.visibility = 'hidden'), (e.style.width = '100px'), document.body.append(e);
    const t = e.offsetWidth;
    e.style.overflow = 'scroll';
    const o = document.createElement('div');
    (o.style.width = '100%'), e.append(o);
    const d = o.offsetWidth;
    e.remove();
    document.body.style.setProperty('--scrollbar-width', t - d + 'px');
  };

  let container: HTMLElement;
  let resizeObserver: ResizeObserver;
  let isBodyOverflowing = $state(false);

  const checkBodyOverflow = () => {
    isBodyOverflowing = document.body.scrollHeight > window.innerHeight;
  };

  let showMenu: boolean = $state(false);
  let showNavigation = $state(false);

  let navigation = {
    navLinks: [
      { title: 'Start', url: '/' },
      { title: 'Über Uns', url: '/about' },
      { title: 'Was wir singen', url: '/songs' },
      { title: 'Nächste Konzerte', url: '/concerts' },
      { title: 'Aktuelles', url: '/news' },
      { title: 'Bildergalerie', url: '/gallery' },
      { title: 'Kontakt', url: '/contact' },
    ],
  };

  const toggleMenu = () => {
    // Check screen size before toggling
    // if (window.matchMedia('(max-width: 1023px)').matches) {
    //   showMenu = !showMenu;
    // }
    showMenu = !showMenu;
  };

  const toggleMenuIfOpen = () => {
    !showMenu || toggleMenu();
  };

  onMount(() => {
    getScrollbarWidth();

    resizeObserver = new ResizeObserver(() => {
      // console.log('Layout changed!');

      // Handle layout changes here
      getScrollbarWidth(); //necessary because scrollbar with also changes when zooming
      checkBodyOverflow();
    });
    if (container) {
      resizeObserver.observe(container);
    }

    showNavigation = true;
  });

  onDestroy(() => {
    // console.log("layout onDestroy");
    resizeObserver?.disconnect();
  });
</script>

<svelte:head>
  <title>Singing Me Happy - Jazzchor Berlin</title>
  <meta property="og:title" content="Singing me Happy - Jazzchor Berlin" />
  <meta property="og:type" content="website" />
  <meta name="description" content="Singing me Happy - Jazzchor Berlin" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <!-- TODO: ergänzen -->
</svelte:head>

<div
  bind:this={container}
  class="relative flex min-h-dvh w-full flex-col justify-between"
  class:overflowing={isBodyOverflowing}
  class:show-menu={showMenu}
>
  <header class="fixed top-0 z-50 flex h-16 w-full justify-between p-4">
    <nav class="relative flex h-full items-center justify-center gap-4">
      <a href={`/`} class="btn-shadow hoverable:hover:btn-shadow-hover" onclick={toggleMenuIfOpen}>
        <img draggable="false" src="/favicon.png" alt="Home Icon" class="pointer-events-none h-10 w-auto" />
      </a>
    </nav>
  </header>

  <RotatingBurgerMenuButton isOpen={showMenu} onToggle={toggleMenu} />

  <nav class="menu pointer-events-none fixed inset-0 z-30 flex h-auto min-h-dvh w-full justify-end overflow-hidden">
    <button
      class="absolute right-0 top-0 h-full w-full cursor-pointer text-inherit"
      class:pointer-events-auto={showMenu}
      onclick={toggleMenu}
      aria-label="Close menu"
    >
      <span
        class="relative block h-full w-full opacity-0 backdrop-blur-[4px] transition-opacity duration-300"
        class:opacity-100={showMenu}
      ></span>
    </button>
    <div class="relative flex h-full w-64">
      <div
        class=" pointer-events-auto relative -right-full flex h-full w-full flex-col gap-10 overflow-auto p-6 text-softblack transition-transform duration-300"
        class:-translate-x-full={showMenu}
      >
        <!-- Navigation Links -->
        <ul
          class="flex flex-none flex-col items-center justify-between gap-[min(3vh,1.5rem)] text-[33px] leading-none transition-opacity duration-1000"
        >
          {#each navigation?.navLinks ?? [] as { title, url }}
            {@const isActive = page.url.pathname === `${url}`}

            <li>
              <a
                href={url}
                class="center inline-block origin-center transition-all duration-300"
                class:active={isActive}
                onclick={toggleMenu}
              >
                {title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>

  <main class="relative flex flex-col">
    {@render children()}
  </main>

  <footer class="relative">
    <div class="flex items-center justify-end bg-black p-4 text-white">
      <!-- <p class="flex-1 text-left">renderedWithCare</p>
      <div class="h-5 w-5 flex-none text-center">🌻</div>
      <p class="flex-1 text-right">"Singing me happy" e.V.</p> -->

      <div class="flex flex-col items-center gap-1 text-right">
        <img src="/favicon.png" alt="Singing me happy Logo" class="h-10 w-auto" />
        <p>"Singing me happy" e.V.</p>
      </div>
    </div>
  </footer>
</div>
