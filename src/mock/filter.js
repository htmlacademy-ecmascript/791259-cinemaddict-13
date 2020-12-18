const filmToFilterMap = {
  [`all movies`]: (films) => films.length,
  watchlist: (films) => films.filter((item) => item.isAddedtoWatchList).length,
  history: (films) => films.filter((item) => item.isWatched).length,
  favorites: (films) => films.filter((item) => item.isFavotire).length,
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName[0].toUpperCase() + filterName.slice(1),
      count: countFilms(films),
    };
  });
};
