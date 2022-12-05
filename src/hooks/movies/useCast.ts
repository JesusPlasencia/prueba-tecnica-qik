import useGet from '../api/useGet';

interface GetCast {
  id: number;
}

export const useCast = ({ id }: GetCast) => {
  const { data, isFetching } = useGet(`movie/${id}/credits`);

  return {
    isLoadingCast: isFetching,
    cast: data?.cast || [],
  };
};
