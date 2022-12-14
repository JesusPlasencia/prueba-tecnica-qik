import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useScrollToTop } from '@react-navigation/native';
import Style from '../themes/Style';

export const Layout = ({ children }: any) => {
  const { top } = useSafeAreaInsets();
  const ref = React.useRef<any>(null);
  useScrollToTop(
    ref?.current?.scrollTo({
      y: 0,
      animated: true,
    }),
  );

  return (
    <ScrollView
      ref={ref}
      style={containerStyle({ top }).layout}
      showsVerticalScrollIndicator={false}
    >
      <View style={containerStyle({ top }).style}>{children}</View>
    </ScrollView>
  );
};

const containerStyle = ({ top }: { top: EdgeInsets['top'] }) =>
  StyleSheet.create({
    layout: {
      backgroundColor: Style.black,
    },
    style: {
      backgroundColor: Style.black,
      marginTop: top + 20,
      marginBottom: 20,
    },
  });
