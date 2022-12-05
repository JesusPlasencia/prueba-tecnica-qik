import useGet from '../api/useGet';

interface GetDetail {
  id: number;
}

export const useMovieDetail = ({ id }: GetDetail) => {
  const { data, isFetching } = useGet(`movie/${id}`);

  return {
    isLoadingDetail: isFetching,
    detailMovie: data || undefined,
  };
};
