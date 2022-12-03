export const orderMovies = (data: any) => {
  data.results.sort(function (movieA: any, movieB: any) {
    const nameA = movieA.title.toUpperCase(); // ignore upper and lowercase
    const nameB = movieB.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1; // not pass
    }
    if (nameA > nameB) {
      return 1; // pass
    }
    // if titles are equal -> pass
    return 0;
  });
};
