import {figureCorrectPluralForm} from "../utils/common.js";
import {AbstractView} from "./abstract.js";

const createFilmDetailsTemplate = (film) => {
  const {title, originalTitle, country, rating, director, writers, actors, productionDate, duration, genres, poster, ageRestriction, description, comments, isAddedtoWatchList, isWatched, isFavorite} = film;
  const genresForm = figureCorrectPluralForm(genres, `Genre`);

  const createGenresTemplate = (genre) => `<span class="film-details__genre">${genre}</span>`;
  const genreList = genres.map((item) => createGenresTemplate(item)).join(``);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

          <p class="film-details__age">${ageRestriction}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${productionDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genresForm}</td>
              <td class="film-details__cell">${genreList}</td>
            </tr>
          </table>

          <p class="film-details__film-description">${description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isAddedtoWatchList ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavorite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container"></div>
  </form>
</section>`;
};

export class FilmDetailsView extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._isWatchedClickHandler = this._isWatchedClickHandler.bind(this);
    this._isFavoriteClickHandler = this._isFavoriteClickHandler.bind(this);

  }

  getTemplate() {
    return createFilmDetailsTemplate(this._film);
  }

  _clickHandler(evt) {
    this._callback.click(evt);
  }

  _watchListClickHandler(evt) {
    this._callback.watchListClick(evt);
  }

 _isWatchedClickHandler(evt) {
    this._callback.isWatchedClick(evt);
  }

  _isFavoriteClickHandler(evt) {
    this._callback.isFavoriteClick(evt);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  setWatchListClickHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().addEventListener(`click`, this._watchListClickHandler);
  }

 setIsWatchedClickHandler(callback) {
    this._callback.isWatchedClick = callback;
    this.getElement().addEventListener(`click`, this._isWatchedClickHandler);
  }

  setIsFavoriteClickHandler(callback) {
    this._callback.isFavoriteClick = callback;
    this.getElement().addEventListener(`click`, this._isFavoriteClickHandler);
  }
}
