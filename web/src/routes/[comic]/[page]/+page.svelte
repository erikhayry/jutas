<script lang="ts">
    import {resolve} from '$app/paths';
    import PanelImage from "../../../components/PanelImage/PanelImage.svelte";

    let {data} = $props();
    const {slug, page, pageNumber} = data
</script>

<h1>{slug} | {pageNumber}</h1>
{#each page.panels as panel (panel)}
    <PanelImage alt="TODO" comic={slug} id={panel.id}/>
{/each}

<a href={resolve(`/${slug}`)}>Back</a>