import { useQuery } from 'vue-query';

export function usePlayListQuery() {
	const { data: playlists, isLoading: isLoadingPlaylists } = useQuery(
		'playlist',
		() =>
			fetch('http://localhost:8000/playlists')
				.then((response) => response.json())
				.then((data) => data.data),
		{
			staleTime: 60 * 1000,
		}
	);
	return { playlists, isLoadingPlaylists };
}

export function usePlayList(id: Number) {
	const { data: playlist, isLoading: isLoadingPlaylist } = useQuery(
		`playlists/${id}`,
		() => fetch(`http://localhost:8000/playlists/${id}`).then((r) => r.json()),
		{
			staleTime: 60 * 1000,
		}
	);
	return { playlist, isLoadingPlaylist };
}
