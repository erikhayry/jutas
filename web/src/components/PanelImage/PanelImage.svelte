<script lang="ts">
    import {getSrc} from "./utils/getSrc";
    import type {Panel} from "jutas-types";

    interface Props {
        slug: string;
        panel: Panel
    }

    let {slug, panel}: Props = $props();
    const src = getSrc(slug, panel.id)
</script>


<img alt="TODO" height="auto" {src} width="100%"/>
