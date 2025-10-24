<script lang="ts">
    import type {PanelId} from "jutas-types";

    interface Props {
        comic: string;
        id: PanelId
        alt: string
    }

    const imageModules = import.meta.glob(
        '$lib/assets/**/*.png',
        {
            eager: true,
            query: {
                enhanced: true
            }
        }
    )

    let {comic, id, alt}: Props = $props();

    const key = Object.keys(imageModules).find((key) => key.includes(`${comic}/${id}`)) || ''
    const src = imageModules[key].default
</script>


{#if src}
    <img {alt} {src}/>
{/if}