import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Cast } from '../interfaces/CreditsInterface';
import { Actor } from './Actor';
import { Loading } from './Loading';

interface Props {
  cast: Cast[];
  isLoadingCast: boolean;
}

export const CastSlider = ({ cast, isLoadingCast }: Props) => {
  return isLoadingCast ? (
    <Loading />
  ) : (
    <View style={castingStyles.container}>
      <Text style={castingStyles.actorsHeader}>Actores</Text>
      <FlatList
        data={cast}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => <Actor actor={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={castingStyles.actorsList}
      />
    </View>
  );
};

const castingStyles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  actorsHeader: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: 'white',
  },
  actorsList: {
    marginTop: 10,
    height: 70,
  },
});
