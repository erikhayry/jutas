<script lang="ts">
    import {resolve} from '$app/paths';
    import Page from "../../../components/Page/Page.svelte";

    let {data} = $props();
    const {slug, page, title} = data
</script>

<h1>{title}</h1>

<Page panels={page.panels} slug={slug}/>

<a href={resolve(`/${slug}`)}>Back</a>