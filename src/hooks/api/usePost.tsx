import { useState, useEffect } from 'react';
import TOKEN_API from '../../api/TokenAPI';
import { AxiosResponse } from 'axios';

const usePost = (
  url: string,
  body: any,
): {
  response: AxiosResponse['data'];
  isSending: boolean;
} => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [response, setResponse] = useState<AxiosResponse['data']>();

  useEffect(() => {
    async function postMovie(): Promise<AxiosResponse['data']> {
      try {
        setIsSending(true);
        const { data } = await TOKEN_API.post(url, body);
        setResponse(data);
      } catch (err) {
        throw err;
      } finally {
        setIsSending(false);
      }
    }

    postMovie();
  }, [body, url]);

  return { response, isSending };
};

export default usePost;
