import React from 'react';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useNowPlaying } from '../hooks/movies/useNowPlaying';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

export const MoviesScreen = () => {
  const { nowPlaying, isLoadingNowPlaying } = useNowPlaying();

  return (
    <Layout>
      <Title />
      <HorizontalSlider
        title="Now Playing"
        content={nowPlaying}
        isLoading={isLoadingNowPlaying}
      />
    </Layout>
  );
};
