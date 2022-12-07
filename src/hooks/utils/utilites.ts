import { Movie } from '../../interfaces/MovieInterface';

export const orderMovies = (results: Movie[]) => {
  results = results.sort(function (movieA: Movie, movieB: Movie) {
    const titleA = movieA.title.toUpperCase(); // ignore upper and lowercase
    const titleB = movieB.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
      return -1; // not pass
    }
    if (titleA > titleB) {
      return 1; // pass
    }
    // if titles are equal -> pass
    return 0;
  });
  return results;
};

export const avoidPosterNull = (results: Movie[]) => {
  let moviesWPoster = [];
  for (let movie of results) {
    if (!movie.backdrop_path) {
      continue;
    } else {
      moviesWPoster.push(movie);
    }
  }
  return moviesWPoster;
};
