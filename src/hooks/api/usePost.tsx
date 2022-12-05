import { useState, useEffect } from 'react';
import API from '../../api/MovieAPI';
import { AxiosResponse } from 'axios';

const usePost = (
  url: string,
): {
  data: AxiosResponse['data'];
  isSending: boolean;
} => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [data, setData] = useState<AxiosResponse['data']>();

  useEffect(() => {
    async function postMovie(): Promise<AxiosResponse['data']> {
      try {
        setIsSending(true);
        const { data } = await API.post(url);
        setData(data);
      } catch (err) {
        throw err;
      } finally {
        setIsSending(false);
      }
    }

    postMovie();
  }, [url]);

  return { data, isSending };
};

export default usePost;
