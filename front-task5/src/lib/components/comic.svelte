<script lang="ts">
    import {fetchComic, getDate, type ComicData} from '../../api';

    let comic: ComicData | null = null;
    fetchComic().then(newComic => {
        comic = newComic;
    });
</script>

<div class="comicsPage">
    <div class="">
        {#if comic !== null}
            <div class="comicText">{comic.safe_title}</div>

            <img
                    src={comic.img}
                    alt={comic.alt}
            />

            <div class="comicText2">{getDate(comic)}</div>
        {/if}
    </div>
</div>

<style lang="postcss">
    .comicsPage {
        background-color: #EDEDED;
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }

    .comicText {
        color: #17181A;
        font-family: "Oswald", sans-serif;
        font-size: 35px;
        margin-bottom: 20px;
    }

    .comicText2 {
        color: #17181A;
        font-family: "Oswald", sans-serif;
        font-size: 25px;
        margin-top: 20px;
    }
</style>
