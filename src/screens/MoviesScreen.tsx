import React from 'react';
// import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useNowPlaying } from '../hooks/movies/useNowPlaying';
import { Layout } from '../components/Layout';

// const { width } = Dimensions.get('window');

export const MoviesScreen = () => {
  const { nowPlaying, isLoadingNowPlaying } = useNowPlaying();

  return (
    <Layout>
      <HorizontalSlider
        title="Now Playing"
        content={nowPlaying}
        isLoading={isLoadingNowPlaying}
      />
    </Layout>
  );
};
