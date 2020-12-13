import dayjs from "dayjs";
import {AbstractView} from "./abstract.js";

const createPostTemplate = (post) => {
  const {title, rating, productionDate, duration, genres, poster, description, comments, isAddedtoWatchList, isWatched, isFavorite} = post;
  const productionYear = dayjs(productionDate).format(`YYYY`);

  const genreList = genres.join(`, `);

  const favoriteClassName = isFavorite
    ? `film-card__controls-item--active`
    : ``;
  const addToWatchlistClassName = isAddedtoWatchList
    ? `film-card__controls-item--active`
    : ``;
  const markAswatchedClassName = isWatched
    ? `film-card__controls-item--active`
    : ``;

  let shortDescription = description;
  if (shortDescription.length > 140) {
    shortDescription = shortDescription.slice(0, 139) + `...`;
  }

  return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${productionYear}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genreList}</span>
          </p>
          <img src="./images/posters/${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${shortDescription}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${addToWatchlistClassName}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${markAswatchedClassName}" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

export class PostView extends AbstractView {
  constructor(post) {
    super();
    this._post = post;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createPostTemplate(this._post);
  }

  _clickHandler(evt) {
    evt.preventDefault(evt);
    this._callback.click(evt);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}
