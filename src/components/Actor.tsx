import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import Style from '../themes/Style';

interface Props {
  actor: Cast;
}

export const Actor = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {actor.profile_path && <Image source={{ uri }} style={styles.avatar} />}
        <View style={styles.actorInfo}>
          <Text style={styles.title}>{actor.name}</Text>
          <Text style={styles.description}>{actor.character}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Style.white,
    borderRadius: 10,
    height: 50,
    shadowColor: Style.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
  },
  wrapper: {
    flexDirection: 'row',
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Style.black,
  },
  description: {
    fontSize: 16,
    opacity: 0.7,
    color: Style.black,
  },
});
