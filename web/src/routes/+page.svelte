<script lang="ts">
    import {resolve} from '$app/paths';
    import {getComics} from "../utils/getComics";
</script>

<ul>
    {#each getComics() as comic (comic)}
        <li>
            <a href={resolve(`/${comic.slug}`)}>{comic.slug}</a>
        </li>
    {/each}
</ul>
