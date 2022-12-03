import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { PosterInterface } from '../interfaces/PosterInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/core';

export const Poster = ({
  movie,
  height = 400,
  width = 300,
}: PosterInterface) => {
  const uriImage = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  //   const navigation = useNavigation();

  return (
    <TouchableOpacity
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
          <Image
            source={{ uri: uriImage }}
            style={styles.image}
            resizeMode="stretch"
          />
        )}
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
});
