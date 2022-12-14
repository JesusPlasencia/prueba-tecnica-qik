import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { CastSlider } from '../components/CastSlider';
import { Layout } from '../components/Layout';
import { MovieDetails } from '../components/MovieDetails';
import { PosterDetail } from '../components/PosterDetail';
import { Rate } from '../components/Rate';
import { SimilarSlider } from '../components/SimilarSlider';
import { useCast } from '../hooks/movies/useCast';
import { useMovieDetail } from '../hooks/movies/useMovieDetail';
import { useSimilar } from '../hooks/movies/useSimilar';
import { RootStackParams } from '../navigation/NavigationMovies';

export interface Props {
  route: RouteProp<RootStackParams, 'MovieDetailScreen'>
}

export const MovieDetailScreen = ({ route } : Props) => {
  const { movie } = route.params;
  const { isLoadingDetail, detailMovie } = useMovieDetail({
    id: movie.id,
  });
  const { isLoadingCast, cast } = useCast({
    id: movie.id,
  });
  const { similarMovies, isLoadingSimilarMovies } = useSimilar({
    id_movie: movie.id,
  });
  return (
    <Layout>
      <PosterDetail posterUrl={movie?.poster_path} />
      <MovieDetails movieFull={detailMovie} isLoadingDetail={isLoadingDetail} />
      <CastSlider cast={cast} isLoadingCast={isLoadingCast} />
      <Rate id={movie?.id} />
      <SimilarSlider
        content={similarMovies}
        isLoading={isLoadingSimilarMovies}
        title="Películas Similares"
      />
    </Layout>
  );
};
