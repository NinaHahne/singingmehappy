<script lang="ts">
  let { items = [] } = $props<{
    items: {
      title: string;
      url: string;
      date?: string; // z. B. "01"
      description?: string;
    }[];
  }>();
</script>

<ul class="flex flex-col gap-2">
  {#each items as item, i}
    <li class="leading-snug">
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <span class="tabular-nums">
          {item.date ?? String(i + 1).padStart(2, '0')} —
        </span>
        {item.title}
      </a>

      {#if item.description}
        <p class="mt-1 text-sm text-black/70">
          {item.description}
        </p>
      {/if}
    </li>
  {/each}
</ul>
