<script lang="ts" setup>
import { onMounted, ref } from 'vue';
//chercher les playslists chez l'api
// afficher les playslists dans la vue

const playlists = ref([]);
onMounted(async () => {
    const response = await fetch("http://localhost:8000/playlists")
        .then(response => response.json());
    playlists.value = response.data;
});


</script>
<template>
    <p v-if="playlists.length <= 0">Chargement ... </p>
    <ul>
        <li v-for="playlist in playlists" :key="playlist.id">
            <router-link :to="`/playlist/${playlist.id}`">
                {{ playlist.title }}
            </router-link>
        </li>
    </ul>
</template>