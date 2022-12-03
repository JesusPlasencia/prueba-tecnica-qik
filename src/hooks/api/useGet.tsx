import { useState, useEffect } from 'react';
import API from '../../api/MovieAPI';
import { AxiosResponse } from 'axios';

const useGet = (
  url: string,
): {
  data: AxiosResponse['data'];
  isFetching: boolean;
} => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<AxiosResponse['data']>();

  useEffect(() => {
    async function getMovie(): Promise<AxiosResponse['data']> {
      try {
        setIsFetching(true);
        const { data } = await API.get(url);
        setData(data);
      } catch (err) {
        throw err;
      } finally {
        setIsFetching(false);
      }
    }

    getMovie();
  }, [url]);

  return { data, isFetching };
};

export default useGet;
