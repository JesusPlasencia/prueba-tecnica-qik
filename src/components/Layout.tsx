import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export const Layout = ({ children }: any) => {
  return (
    <ScrollView>
      <View style={containerStyle.style}>{children}</View>
    </ScrollView>
  );
};

const containerStyle = StyleSheet.create({
  style: {
    marginTop: 20,
    marginBottom: 20,
  },
});
