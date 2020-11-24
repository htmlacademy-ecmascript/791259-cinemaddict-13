export const createMenuTemplate = (posts) => {

  const countIsWatched = posts.filter(item => item.isWatched).length;
  const countIsAddedtoWatchList = posts.filter(item => item.isAddedtoWatchList).length;
  const countIsFavorite = posts.filter(item => item.isFavorite).length;

  return `
  <nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${countIsAddedtoWatchList}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${countIsWatched}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${countIsFavorite}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};
