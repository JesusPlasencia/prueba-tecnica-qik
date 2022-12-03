import useGet from '../api/useGet';
import { orderMovies } from '../utils/utilites';

export const useNowPlaying = () => {
  const url: string = 'now_playing';
  let { data, isFetching } = useGet(`movie/${url}`);
  if (data) {
    data.results = orderMovies(data?.results);
  }
  return {
    isLoadingNowPlaying: isFetching,
    nowPlaying: data?.results || [],
  };
};
