import useGet from '../api/useGet';

interface GetDetail {
  id: number;
}

export const useMovieDetail = ({ id }: GetDetail) => {
  const { response, isFetching } = useGet(`movie/${id}`);

  return {
    isLoadingDetail: isFetching,
    detailMovie: response || undefined,
  };
};
