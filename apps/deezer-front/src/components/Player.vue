<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePlayerStore } from '../store';
const store = usePlayerStore();
const { currentTrack } = storeToRefs(store);
function next() {
    store.next();
}
</script>

<template>
    <div class="player">
        <p v-if="currentTrack === null"> you don't have any track to play</p>
        <template v-else>
            <p>{{ currentTrack.title }}</p>
            <audio :src="currentTrack.preview" controls autoplay @ended="next"></audio>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.player {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
