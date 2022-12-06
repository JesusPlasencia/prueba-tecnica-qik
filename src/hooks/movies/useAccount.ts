import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import TOKEN_API from '../../api/TokenAPI';

const useAccount = (): {
  accountId: AxiosResponse['data'];
  isSending: boolean;
} => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [response, setResponse] = useState<AxiosResponse['data']>();

  useEffect(() => {
    async function postMovie(): Promise<AxiosResponse['data']> {
      try {
        setIsSending(true);
        const { data } = await TOKEN_API.get('account');
        setResponse(data);
      } catch (err) {
        throw err;
      } finally {
        setIsSending(false);
      }
    }

    postMovie();
  }, []);

  return {
    accountId: response?.id,
    isSending,
  };
};

export default useAccount;
