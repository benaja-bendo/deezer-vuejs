<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { usePlayListQuery } from '../hooks/index';
const { isLoadingPlaylists, playlists } = usePlayListQuery()
</script>
<template>
    <p v-if="isLoadingPlaylists">Chargement ... </p>
    <ul v-else>
        <li v-for="playlist in playlists" :key="playlist.id">
            <RouterLink :to="`/playlist/${playlist.id}`">
                {{ playlist.title }}
            </RouterLink>
        </li>
    </ul>
</template>