<script lang="ts">
    import data from '$lib/assets/data.json';
</script>

<ul>
{#each data as comic}
    <li>
        <a href={`/${comic.slug}`}>{comic.title}</a>
    </li>
{/each}
</ul>
