<script lang="ts">
    import {resolve} from '$app/paths';

    const imageModules = import.meta.glob(
        '$lib/assets/**/*.png',
        {
            eager: true,
            query: {
                enhanced: true
            }
        }
    )
    let {data} = $props();

    const key = Object.keys(imageModules).find((key) => key.includes(`${data.slug}/${data.pages[0].panels[0].id}`)) || ''
</script>


<h1>{data.slug}</h1>
<img alt="2" src={imageModules[key].default}>

<a href={resolve("/")}>Back</a>