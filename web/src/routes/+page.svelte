<script lang="ts">
    import {resolve} from '$app/paths';
    import website from '$lib/assets/website.json';
</script>

<ul>
    {#each website as comic (comic)}
        <li>
            <a href={resolve(`/${comic.slug}`)}>{comic.slug}</a>
        </li>
    {/each}
</ul>
