import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('players', {
	state: () => ({
		currentTrack: null,
	}),
	actions: {
		playtrack(track: any) {
			this.currentTrack = track;
		},
	},
});
