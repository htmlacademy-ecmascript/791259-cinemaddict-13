import dayjs from "dayjs";
import {AbstractView} from "./abstract-view.js";
import {getRuntime} from "../utils/common.js";

const createFilmTemplate = (film) => {
  const {title, rating, productionDate, runtime, genre, poster, description, comments, isAddedtoWatchList, isWatched, isFavorite} = film;
  const year = dayjs(productionDate).format(`YYYY`);

  const genreList = genre.join(`, `);

  const favoriteClassName = isFavorite
    ? `film-card__controls-item--active`
    : ``;
  const addToWatchlistClassName = isAddedtoWatchList
    ? `film-card__controls-item--active`
    : ``;
  const markAswatchedClassName = isWatched
    ? `film-card__controls-item--active`
    : ``;

  const EXCERPT_LENGTH = 140;
  let shortDescription = description;
  if (shortDescription.length > EXCERPT_LENGTH) {
    shortDescription = shortDescription.slice(0, EXCERPT_LENGTH - 1) + `...`;
  }

  return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${getRuntime(runtime)}</span>
            <span class="film-card__genre">${genreList}</span>
          </p>
          <img src="./${poster}" alt="${title} film poster" class="film-card__poster">
          <p class="film-card__description">${shortDescription}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${addToWatchlistClassName}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${markAswatchedClassName}" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

export class FilmView extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._isWatchedClickHandler = this._isWatchedClickHandler.bind(this);
    this._isFavoriteClickHandler = this._isFavoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmTemplate(this._film);
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
