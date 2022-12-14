import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';
import Style from '../themes/Style';

export const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <LinearTextGradient
        style={styles.gradient}
        locations={[0, 1]}
        colors={[Style.gradientLeft, Style.gradientRight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.title}>Movies Inc</Text>
      </LinearTextGradient>
      <Text style={styles.author}>Jesus Plasencia Toledo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  gradient: {
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Secular One',
    fontWeight: 'bold',
    shadowColor: Style.white,
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 0.2,
    elevation: 9,
    shadowRadius: 7,
    fontSize: 45,
  },
  author: {
    color: Style.author,
    font: 30,
  },
});
