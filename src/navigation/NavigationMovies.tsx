import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoviesScreen } from '../screens/MoviesScreen';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { Movie } from '../interfaces/MovieInterface';

export type RootStackParams = {
  MoviesScreen: undefined;
  MovieDetailScreen: {
    movie: Movie;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const NavigationMovies = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};
