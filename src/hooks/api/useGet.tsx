import { useState, useEffect } from 'react';
import API from '../../api/MovieAPI';
import { AxiosResponse } from 'axios';

const useGet = (
  url: string,
): {
  response: AxiosResponse['data'];
  isFetching: boolean;
} => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [response, setResponse] = useState<AxiosResponse['data']>();

  useEffect(() => {
    async function getMovie(): Promise<AxiosResponse['data']> {
      try {
        setIsFetching(true);
        const { data } = await API.get(url);
        setResponse(data);
      } catch (err) {
        throw err;
      } finally {
        setIsFetching(false);
      }
    }

    getMovie();
  }, [url]);

  return { response, isFetching };
};

export default useGet;
