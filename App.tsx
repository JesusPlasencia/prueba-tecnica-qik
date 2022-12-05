import React from 'react';
// import { MoviesScreen } from './src/screens/MoviesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationMovies } from './src/navigation/NavigationMovies';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <NavigationMovies />
      </NavigationContainer>
    </>
  );
};

export default App;
