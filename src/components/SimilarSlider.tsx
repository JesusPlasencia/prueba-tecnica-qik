import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SliderInterface } from '../interfaces/SliderInterface';

//Components
import { PosterSimilar } from './PosterSimilar';
import { Loading } from './Loading';

export const SimilarSlider = ({
  title,
  content,
  isLoading,
}: SliderInterface) => {
  return (
    <View style={styles.style}>
      <Text style={styles.title}>{title}</Text>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <PosterSimilar movie={item} height={140} width={210} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  style: {
    height: 180,
    marginVertical: 15,
  },
  title: {
    height: 40,
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
  },
});
