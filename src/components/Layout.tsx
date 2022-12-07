import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

export const Layout = ({ children }: any) => {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView style={containerStyle({ top }).layout}>
      <View style={containerStyle({ top }).style}>{children}</View>
    </ScrollView>
  );
};

const containerStyle = ({ top }: { top: EdgeInsets['top'] }) =>
  StyleSheet.create({
    layout: {
      backgroundColor: 'black',
    },
    style: {
      backgroundColor: 'black',
      marginTop: top + 20,
      marginBottom: 20,
    },
  });
