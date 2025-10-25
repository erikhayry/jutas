<script lang="ts">
    import type {Panel} from "jutas-types";
    import Img from "../PanelImage/PanelImage.svelte";

    interface Props {
        slug: string;
        panels: Panel[]
    }

    let {panels, slug}: Props = $props();
    console.log(panels)
</script>

<style>
    .page {
        position: relative;
        height: 400px;
        width: 400px;
    }

    .panel {
        position: absolute;
        overflow: hidden;
    }
</style>

<div class="page">
    {#each panels as panel (panel)}
        <div class="panel"
             style:width={`${panel.coords.w}%`}
             style:height={`${panel.coords.h}%`}
             style:left={`${panel.coords.x}%`}
             style:top={`${panel.coords.y}%`}
        >
            <Img {slug} {panel}/>
        </div>
    {/each}
</div>

