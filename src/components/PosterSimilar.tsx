import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { PosterInterface } from '../interfaces/PosterInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';
import { RootStackParams } from '../navigation/NavigationMovies';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Style from '../themes/Style';

export const PosterSimilar = ({ movie, height, width }: PosterInterface) => {
  const uriImage = `https://image.tmdb.org/t/p/w200${movie?.backdrop_path}`;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

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
              color={Style.broken}
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
      <View style={styles.rateInfoContainer}>
        <Text style={styles.textWhite}>{movie?.title}</Text>
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
    shadowColor: Style.black,
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 0.2,
    elevation: 9,
    shadowRadius: 7,
    overflow: 'hidden',
    backgroundColor: Style.white,
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
  },
  movieTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Style.white,
  },
  rateInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: Style.white,
    paddingHorizontal: 10,
  },
  vote_average: {
    color: Style.white,
  },
  textWhite: {
    color: Style.white,
  },
  similarRate: {
    flexDirection: 'row',
  },
});
