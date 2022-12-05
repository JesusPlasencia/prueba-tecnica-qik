import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from './Loading';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/MovieFullInterface';

interface Props {
  movieFull: MovieFull;
  isLoadingDetail: boolean;
}

export const MovieDetails = ({ movieFull, isLoadingDetail }: Props) => {
  return isLoadingDetail ? (
    <Loading />
  ) : (
    <>
      <View style={detailStyles.marginContainer}>
        <View style={detailStyles.textWrapper}>
          <Text style={detailStyles.subTitle}>{movieFull?.original_title}</Text>
          <Text style={detailStyles.title}>{movieFull?.title}</Text>
        </View>
      </View>
      <View style={detailStyles.container}>
        <View style={detailStyles.rate}>
          <Text> {'⭐' + movieFull?.vote_average}</Text>
          <Text style={detailStyles.genres}>
            - {movieFull?.genres.map((g: any) => g.name).join(', ')}
          </Text>
        </View>
        <Text style={detailStyles.header}>Historia</Text>
        <Text style={detailStyles.overview}>{movieFull?.overview}</Text>
        <Text style={detailStyles.header}>Presupuesto</Text>
        <Text style={detailStyles.budget}>
          {currencyFormatter.format(movieFull?.budget, { code: 'USD' })}
        </Text>
      </View>
    </>
  );
};

const detailStyles = StyleSheet.create({
  marginContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    // marginHorizontal: 10,
    // backgroundColor: 'red',
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    marginHorizontal: 20,
  },
  rate: {
    flexDirection: 'row',
  },
  genres: {
    marginLeft: 5,
  },
  header: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  budget: {
    fontSize: 18,
  },
  overview: {
    fontSize: 16,
    textAlign: 'justify',
  },
});