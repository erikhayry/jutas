<script lang="ts">
    import {resolve} from '$app/paths';

    let {data} = $props();
</script>


<h1>{data.slug}</h1>


<a href={resolve("/")}>Back</a>