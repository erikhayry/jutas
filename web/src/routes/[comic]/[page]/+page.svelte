<script lang="ts">
    import {resolve} from '$app/paths';
    import Img from "../../../components/PanelImage/PanelImage.svelte";

    let {data} = $props();
    const {slug, page, title} = data
</script>

<h1>{title}</h1>

{#each page.panels as panel (panel)}
    <Img alt="TODO" comic={slug} id={panel.id}/>
{/each}

<a href={resolve(`/${slug}`)}>Back</a>