import {
  FilterType
} from "../const.js";

export const filter = {
  [FilterType.ALL]: (films) => films,
  [FilterType.WATCHLIST]: (films) => films.filter((item) => item.isAddedtoWatchList),
  [FilterType.HISTORY]: (films) => films.filter((item) => item.isWatched),
  [FilterType.FAVORITES]: (films) => films.filter((item) => item.isFavorite),
};
