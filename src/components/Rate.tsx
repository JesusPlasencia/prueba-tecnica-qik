import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

export const Rate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Califica esta pelicula</Text>
      <Rating
        type="custom"
        startingValue={0}
        ratingCount={10}
        imageSize={30}
        ratingBackgroundColor="white"
        onFinishRating={ratingCompleted}
        tintColor="black"
      />
    </View>
  );
};

function ratingCompleted(rating: any) {
  console.log(rating);
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
