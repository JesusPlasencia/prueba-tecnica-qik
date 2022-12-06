import useGet from '../api/useGet';

export const useToken = () => {
  const { response, isFetching } = useGet('authentication/token/new');

  return {
    isFetchingToken: isFetching,
    expires: response?.expires_at || null,
    token: response?.request_token || null,
  };
};
