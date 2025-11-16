<!-- Global layout for all pages -->
<script lang="ts">
  import { page } from '$app/state';
  import { onDestroy, onMount } from 'svelte';
  import '../styles/app.css';
  import RotatingBurgerMenuButton from '$lib/components/RotatingBurgerMenuButton.svelte';
  import LogoLink from '$lib/components/LogoLink.svelte';

  let { children } = $props<{
    children: (args: { toggleMenuIfOpen: () => void }) => unknown;
  }>();

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
      { title: 'Bildergalerie', url: '/gallery' },
      { title: 'Aktuelles', url: '/news' },
      { title: 'Kontakt', url: '/contact' },
    ],
    footerLinks: [
      { title: 'Impressum', url: '/imprint' },
      { title: 'Kontakt', url: '/contact' },
      { title: 'Datenschutz', url: '/privacy' },
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
  <header class="pointer-events-none fixed top-0 z-50 flex h-[74px] w-full justify-between px-4 py-4">
    <nav class="pointer-events-auto relative flex h-full items-center justify-center gap-4">
      <LogoLink {toggleMenuIfOpen} />
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
    <div class="relative flex h-full w-auto min-w-64 md:min-w-80">
      <div
        class="pointer-events-auto relative -right-full flex h-full w-full flex-col gap-10 overflow-auto bg-white py-20 text-black transition-transform duration-300"
        class:-translate-x-full={showMenu}
      >
        <!-- Navigation Links -->
        <ul
          class="flex h-full flex-none flex-col items-end justify-between gap-6 p-6 transition-opacity duration-1000 md:px-[calc(6rem+var(--scrollbar-width))]"
        >
          {#each navigation?.navLinks ?? [] as { title, url }}
            {@const isActive = page.url.pathname === `${url}`}

            <li>
              <a
                href={url}
                class="center inline-block origin-center text-right text-3xl font-normal leading-none text-black underline decoration-1 underline-offset-4 transition-all duration-300 hoverable:hover:decoration-black hoverable:hover:opacity-80 md:whitespace-nowrap"
                class:active={isActive}
                class:decoration-black={isActive}
                class:decoration-transparent={!isActive}
                class:opacity-80={isActive}
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
    {@render children({ toggleMenuIfOpen })}
  </main>

  <footer class="relative">
    <div class="flex items-end justify-between bg-black p-4 text-white">
      <!-- <p class="flex-1 text-left">renderedWithCare</p>
      <div class="h-5 w-5 flex-none text-center">🌻</div>
      <p class="flex-1 text-right">"Singing me happy" e.V.</p> -->

      <div class="flex flex-col items-start gap-2 text-left md:flex-row md:gap-4">
        {#each navigation?.footerLinks ?? [] as { title, url }}
          <a href={url} class="">
            {title}
          </a>
        {/each}
      </div>

      <div class="flex flex-col items-center gap-1 text-right">
        <LogoLink {toggleMenuIfOpen} hideOnHome={false} />
        <p class="text-base">"Singing me happy" e.V.</p>
      </div>
    </div>
  </footer>
</div>
