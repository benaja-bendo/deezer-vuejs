<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { usePlayList } from '../hooks';
import Track from '../components/Track.vue';

const router = useRoute()
const { isLoadingPlaylist, playlist } = usePlayList(+router.params.id);


</script>

<template>
    <RouterLink to="/"> Back to PlayList</RouterLink>
    <p v-if="isLoadingPlaylist">chargement ...</p>
    <article v-else>
        <h1 class="titre">{{ playlist.title }}</h1>
        <section class="tracks">
            <Track :track="track" v-for="track in playlist.tracks.data" :key="track.id" />
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


</style>