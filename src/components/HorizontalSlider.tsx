import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SliderInterface } from '../interfaces/SliderInterface';

//Components
import { Poster } from './Poster';
import { Loading } from './Loading';
import Style from '../themes/Style';

export const HorizontalSlider = ({
  title,
  content,
  isLoading,
}: SliderInterface) => {
  return (
    <View style={containerStyle({ hasTitle: !!title })}>
      <Text style={styles.title}>{title}</Text>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <Poster movie={item} height={360} width={196} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const containerStyle = ({ hasTitle }: { hasTitle: boolean }) =>
  StyleSheet.create({
    style: {
      height: hasTitle ? 400 : 280,
      marginBottom: 15,
    },
  }).style;

const styles = StyleSheet.create({
  title: {
    height: 40,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Style.white,
  },
});
