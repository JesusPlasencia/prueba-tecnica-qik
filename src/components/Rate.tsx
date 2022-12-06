import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import TOKEN_API from '../api/TokenAPI';
import useAccount from '../hooks/movies/useAccount';
import { useMyRate } from '../hooks/movies/useMyRates';
import { Loading } from './Loading';

interface RateProps {
  id: number;
}

export const Rate = (movieRate: RateProps) => {
  const { accountId } = useAccount();
  const { myRate, isFetching } = useMyRate(accountId, movieRate?.id);

  const getRate = async (rating: number) => {
    TOKEN_API.post(`/movie/${movieRate?.id}/rating`, {
      value: rating,
    });
  };

  function ratingCompleted(rating: number): void {
    if (rating === 0) {
      getRate(1);
    } else {
      getRate(rating);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Califica esta pelicula</Text>
      {isFetching ? (
        <Loading />
      ) : (
        <Rating
          type="custom"
          startingValue={myRate}
          ratingCount={10}
          imageSize={30}
          ratingBackgroundColor="white"
          onFinishRating={ratingCompleted}
          tintColor="black"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
