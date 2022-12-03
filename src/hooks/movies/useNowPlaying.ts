import useGet from '../api/useGet';
import { orderMovies } from '../utils/utilites';

export const useNowPlaying = () => {
  const url: string = 'now_playing';
  let { data, isFetching } = useGet(`movie/${url}`);
  data = orderMovies(data);
  return {
    isLoadingNowPlaying: isFetching,
    nowPlaying: data?.results || [],
  };
};
