import TOKEN_API from '../../api/TokenAPI';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useMyRate = (
  account_id: number,
  movie_id: number,
): {
  myRate: AxiosResponse['data'];
  isFetching: boolean;
} => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(0);
  useEffect(() => {
    async function getMyRatesMovies(): Promise<AxiosResponse['data']> {
      try {
        setIsFetching(true);
        const { data } = await TOKEN_API.get(
          `account/${account_id}/rated/movies`,
        );
        data?.results.forEach((movie: any) => {
          if (movie?.id === movie_id) {
            setRate(movie?.rating);
          }
        });
      } catch (e) {
        throw e;
      } finally {
        setIsFetching(false);
      }
    }

    getMyRatesMovies();
  }, [account_id, movie_id]);

  return {
    myRate: rate,
    isFetching,
  };
};
