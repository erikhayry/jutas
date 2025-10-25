<script lang="ts">
    import {resolve} from '$app/paths';
    import PanelImage from "../../components/PanelImage/PanelImage.svelte";

    let {data} = $props();
    const {slug, pages} = data
</script>

<h1>{slug}</h1>

<PanelImage panel={pages[0].panels[0]} {slug}/>

<ul>
    {#each pages as page, index (page)}
        <li>
            <a href={resolve(`/${slug}/${index}`)}>{index}</a>
        </li>
    {/each}
</ul>

<a href={resolve("/")}>Back</a>