import {Observer} from "../utils/observer.js";

export class FilmsModel extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(updateType, films) {
    this._films = films.slice();
    this._notify(updateType);
  }

  getFilms() {
    return this._films;
  }

  updateFilm(updateType, update) {
    const index = this._films.findIndex((film) => film.id === update.id);
    if (index === -1) {
      throw new Error(`Cannot update unexisting film.`);
    }

    this._films = [
      ...this._films.slice(0, index),
      update,
      ...this._films.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  static adaptToClient(film) {
    const adaptedFilm = Object.assign(
      {},
      film,
      film.film_info,
      film.user_details,
      {
        isWatched: film.user_details.already_watched,
        isFavorite: film.user_details.favorite,
        isAddedtoWatchList: film.user_details.watchlist,
      }
    );
    delete adaptedFilm.film_info;
    delete adaptedFilm.user_details;
    delete adaptedFilm.already_watched;
    delete adaptedFilm.favorite;
    delete adaptedFilm.watchlist;
    return adaptedFilm;
  }

  static adaptToServer(film) {
/*    const film_info = Object.assign({}, film, {release: {date: new Date(film.release.date).toISOString(), release_contry: film.release.country}});

    delete film_info.isWatched;
    delete film_info.isFavorite;
    delete film_info.isAddedtoWatchList;
    delete film_info.id;
    delete film_info.comments;
*/
    const user_details = {
      already_watched: film.isWatched,
      favorite: film.isFavorite,
      watchlist: film.isWatched,
      watching_date: null,
    };

/*    const adaptedFilm = Object.assign(
      {},
      {id: film.id},
      {comments: film.comments},
      {film_info},
      {user_details},
    );

    return adaptedFilm;
    */
    return user_details;
  }
}
