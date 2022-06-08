<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { usePlayList } from '../hooks';

const router = useRoute()
const { isLoadingPlaylist, playlist } = usePlayList(+router.params.id);

</script>

<template>
    <RouterLink to="/"> Back to PlayList</RouterLink>
    <p v-if="isLoadingPlaylist">chargement ...</p>
    <article v-else>
        <h1 class="titre">{{ playlist.title }}</h1>
        <section class="tracks">
            <div class="track" v-for="track in playlist.tracks.data" :key="playlist.tracks.id">
                <img :src="track.album.cover_small" alt="" />
                <div class="track-info">
                    <h3>{{ track.title }}</h3>
                    <p>{{ track.artist.name }}</p>
                </div>
            </div>
        </section>
    </article>
</template>

<style scoped lang="scss">
article {
    position: relative;
    height: 100%;
    max-height: calc(100vh - 100px);
    overflow-y: hidden;
}

.titre {
    padding-inline: 20px;
    font-size: 2rem;
    font-weight: bold;
}

.tracks {
    display: flex;
    flex-direction: column;
    padding-inline: 20px;
    overflow-y: auto;
    height: 100%;
}

.track>.track:first-child {
    border-top: 0;
}

.track {
    display: flex;
    gap: 8px;
    align-items: center;
    border-top: 1px solid var(--darker-grey);
    padding-block: 8px;

    img {
        width: 100px;
        height: 100px;
    }

    h3 {
        font-size: 1.1rem;
        font-weight: 400;
    }

    p {
        font-size: 0.8rem;
        font-weight: 400;
    }
}
</style>