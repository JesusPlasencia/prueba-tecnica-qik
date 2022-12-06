import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export const Layout = ({ children }: any) => {
  return (
    <ScrollView style={containerStyle.layout}>
      <View style={containerStyle.style}>{children}</View>
    </ScrollView>
  );
};

const containerStyle = StyleSheet.create({
  layout: {
    backgroundColor: 'black',
  },
  style: {
    marginTop: 20,
    marginBottom: 20,
  },
});
