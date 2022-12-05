import React from 'react';
import { CastSlider } from '../components/CastSlider';
import { Layout } from '../components/Layout';
import { MovieDetails } from '../components/MovieDetails';
import { PosterDetail } from '../components/PosterDetail';
import { Rate } from '../components/Rate';
import { useCast } from '../hooks/movies/useCast';
import { useMovieDetail } from '../hooks/movies/useMovieDetail';

export const MovieDetailScreen = ({ route }: any) => {
  const { movie } = route.params;
  const { isLoadingDetail, detailMovie } = useMovieDetail({
    id: movie.id,
  });
  const { isLoadingCast, cast } = useCast({
    id: movie.id,
  });
  return (
    <Layout>
      <PosterDetail posterUrl={movie?.poster_path} />
      <MovieDetails movieFull={detailMovie} isLoadingDetail={isLoadingDetail} />
      <CastSlider cast={cast} isLoadingCast={isLoadingCast} />
      <Rate />
    </Layout>
  );
};
