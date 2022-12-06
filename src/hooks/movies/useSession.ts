import usePost from '../api/usePost';

interface Token {
  token: string;
}

export const useSession = (bodyToken: Token) => {
  const { response, isSending } = usePost(
    'authentication/session/new',
    bodyToken,
  );

  return {
    session: response?.session_id,
    isSending: isSending,
  };
};
