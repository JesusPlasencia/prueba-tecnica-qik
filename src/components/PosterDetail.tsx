import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  posterUrl: string;
}

const screenHeight = Dimensions.get('screen').height;

export const PosterDetail = ({ posterUrl }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${posterUrl}`;
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageBorder}>
        {!posterUrl ? (
          <Icon
            color="#91918D"
            name="broken-image"
            size={130}
            style={styles.brokenImage}
          />
        ) : (
          <Image
            source={{ uri: uri }}
            style={styles.posterImage}
            resizeMode="cover"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    justifyContent: 'center',
  },
  posterImage: {
    flex: 1,
  },
  brokenImage: {
    alignSelf: 'center',
  },
});
