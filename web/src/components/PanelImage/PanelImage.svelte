<script lang="ts">
    import {getSrc} from "./utils/getSrc";
    import type {PanelId} from "jutas-types";

    interface Props {
        comic: string;
        id: PanelId
        alt: string
    }


    let {comic, id, alt}: Props = $props();
    const src = getSrc(comic, id)
</script>


{#if src}
    <img {alt} {src}/>
{/if}