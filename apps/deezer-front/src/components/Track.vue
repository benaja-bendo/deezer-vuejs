<script setup lang="ts">
import { defineProps, toRaw } from 'vue'
import { usePlayerStore } from '../store';

const { track } = defineProps({
    track: {
        type: Object,
        required: true
    }
});
const { playtrack } = usePlayerStore();
function play(): void {
    playtrack(toRaw(track));
}
</script>

<template>
    <div class="track">
        <img :src="track.album.cover_small" alt="" />
        <div>
            <h3>{{ track.title }}</h3>
            <p>{{ track.artist.name }}</p>
            <div class="track__action">
                <button @click="play">Play</button>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.track>.track:first-child {
    border-top: 0;
}

.track {
    display: flex;
    gap: 8px;
    align-items: center;
    border-top: 1px solid var(--darker-grey);
    padding-block: 8px;

    &>div {
        //flex: 1;
        flex-grow: 1;
    }

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

.track__action {
    display: flex;
    justify-content: flex-end;
}
</style>
