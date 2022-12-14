import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from './Loading';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/MovieFullInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Genre } from '../interfaces/MovieFullInterface';
import Style from '../themes/Style';

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
          <Text style={detailStyles.title}>{movieFull?.title}</Text>
        </View>
      </View>
      <View style={detailStyles.container}>
        <View style={detailStyles.rate}>
            <Icon name="star" color={Style.yellow} size={16} />
          <Text style={detailStyles.textWhite}> {movieFull?.vote_average}</Text>
          <Text style={[detailStyles.genres, detailStyles.textWhite]}>
            - {movieFull?.genres.map((item: Genre) => item.name).join(', ')}
          </Text>
          <Text style={[detailStyles.date, detailStyles.textWhite]}>
            {' '}
            - {movieFull?.release_date.substring(0, 4)}
          </Text>
        </View>
        <Text style={[detailStyles.header, detailStyles.textWhite]}>
          Historia
        </Text>
        <Text style={[detailStyles.overview, detailStyles.textWhite]}>
          {movieFull?.overview}
        </Text>
        <Text style={[detailStyles.header, detailStyles.textWhite]}>
          Presupuesto
        </Text>
        <Text style={[detailStyles.budget, detailStyles.textWhite]}>
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
    color: Style.white,
  },
  textWrapper: {
    flex: 1,
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Style.white,
  },
  container: {
    marginHorizontal: 20,
    color: Style.white,
  },
  rate: {
    flexDirection: 'row',
    color: Style.white,
  },
  genres: {
    marginLeft: 5,
  },
  date: {
    marginLeft: 5,
  },
  header: {
    fontSize: 20,
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
  textWhite: {
    color: Style.white,
  },
});
