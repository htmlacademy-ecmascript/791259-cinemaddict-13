const postToFilterMap = {
  [`all movies`]: (posts) => posts.length,
  watchlist: (posts) => posts.filter((item) => item.isAddedtoWatchList).length,
  history: (posts) => posts.filter((item) => item.isWatched).length,
  favorites: (posts) => posts.filter((item) => item.isFavotire).length,
};

export const generateFilter = (posts) => {
  return Object.entries(postToFilterMap).map(([filterName, countPosts]) => {
    return {
      name: filterName[0].toUpperCase() + filterName.slice(1),
      count: countPosts(posts),
    };
  });
};
