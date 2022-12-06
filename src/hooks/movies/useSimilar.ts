import useGet from '../api/useGet';
import { avoidPosterNull } from '../utils/utilites';

interface GetSimilar {
  id_movie: number;
}

export const useSimilar = ({ id_movie }: GetSimilar) => {
  const url: string = `movie/${id_movie}/recommendations`;
  let { response, isFetching } = useGet(url);
  if (response) {
    response.results = avoidPosterNull(response?.results);
  }
  return {
    isLoadingSimilarMovies: isFetching,
    similarMovies: response?.results,
  };
};
