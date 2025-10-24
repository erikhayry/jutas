<script lang="ts">
    import {resolve} from '$app/paths';
    import PanelImage from "../../components/PanelImage/PanelImage.svelte";

    let {data} = $props();
</script>


<h1>{data.slug}</h1>
<PanelImage alt="TODO" comic={data.slug} id={data.pages[0].panels[0].id}/>

<a href={resolve("/")}>Back</a>