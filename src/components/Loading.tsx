import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Style from '../themes/Style';

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={Style.loading} size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
