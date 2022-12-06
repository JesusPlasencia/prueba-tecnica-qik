import usePost from '../api/usePost';

interface Rate {
  value: number;
  idMovie: number;
}

export const useRate = (rate: Rate) => {
  const { response } = usePost(`/movie/${rate.idMovie}/rating`, {
    value: rate?.value,
  });

  return {
    status: response?.status_code,
    message: response?.status_message,
  };
};
