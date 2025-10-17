<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>


<h1>{data.title}</h1>

<ul>

{#each data.pages as page, index}
    <li>
        <a href={`/${data.slug}/${index}`}>{page.title}</a>
    </li>
{/each}
</ul>


<a href="/">Back</a>