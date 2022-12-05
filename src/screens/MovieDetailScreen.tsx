import React from 'react';
import { View, Text } from 'react-native';

export const MovieDetailScreen = ({ route }: any) => {
  const { movie } = route.params;
  console.log(movie.title);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>MovieDetailScreen</Text>
    </View>
  );
};
