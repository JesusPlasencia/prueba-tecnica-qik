import useGet from '../api/useGet';

interface GetCast {
  id: number;
}

export const useCast = ({ id }: GetCast) => {
  const { response, isFetching } = useGet(`movie/${id}/credits`);

  return {
    isLoadingCast: isFetching,
    cast: response?.cast || [],
  };
};
