import useGet from '../api/useGet';
import { orderMovies } from '../utils/utilites';

export const useNowPlaying = () => {
  const url: string = 'now_playing';
  let { response, isFetching } = useGet(`movie/${url}`);
  if (response) {
    response.results = orderMovies(response?.results);
  }
  return {
    isLoadingNowPlaying: isFetching,
    nowPlaying: response?.results || [],
  };
};
