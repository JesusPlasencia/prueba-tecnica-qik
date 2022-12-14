import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { PosterInterface } from '../interfaces/PosterInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { RootStackParams } from '../navigation/NavigationMovies';

export const Poster = ({ movie, height, width }: PosterInterface) => {
  const uriImage = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const navigation = useNavigation <NativeStackNavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetailScreen', { movie })}
      activeOpacity={0.8}
      style={touchableOpacityStyle({ height, width })}
    >
      <View style={styles.imageContainer}>
        {!movie?.poster_path ? (
          <View style={styles.wrapperIcon}>
            <Icon
              color="#91918D"
              name="broken-image"
              size={40}
              style={styles.brokenImage}
            />
          </View>
        ) : (
          <>
            <Image
              source={{ uri: uriImage }}
              style={styles.image}
              resizeMode="stretch"
            />
          </>
        )}
      </View>
      <View style={styles.movieInfoContainer}>
        <Text style={styles.movieTitle}> {movie.title} </Text>
        <View style={styles.rateInfoContainer}>
          <View style={styles.rateInfo}>
            <Text style={styles.voteAverage}>{movie.vote_average}</Text>
            <Icon name="star" color="yellow" size={16} />
          </View>
          <Text style={styles.releaseInfo}>{movie.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const touchableOpacityStyle = ({
  height,
  width,
}: Pick<PosterInterface, 'width' | 'height'>) =>
  StyleSheet.create({
    style: {
      width,
      height,
      marginHorizontal: 7,
      marginBottom: 20,
    },
  }).style;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 0.2,
    elevation: 9,
    shadowRadius: 7,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  wrapperIcon: {
    flex: 1,
    justifyContent: 'center',
  },
  brokenImage: {
    alignSelf: 'center',
  },
  image: {
    flex: 1,
  },
  movieInfoContainer: {
    height: 75,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  movieTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  rateInfoContainer: {
    flexDirection: 'row',
  },
  rateInfo: {
    marginRight: 20,
    flexDirection: 'row',
    color: 'white',
  },
  voteAverage: {
    color: 'white',
  },
  releaseInfo: {
    marginLeft: 20,
    color: 'white',
  },
});
