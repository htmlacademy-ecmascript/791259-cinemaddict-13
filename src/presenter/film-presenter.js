import {
  FilmView
} from "../view/film-view.js";
import {
  FilmDetailsView
} from "../view/film-details-view.js";
import {
  NewCommentView
} from "../view/new-comment-view.js";
import {
  FilmCommentsView
} from "../view/film-comments-view.js";
import {
  render,
  remove,
  replace
} from "../utils/render.js";
import dayjs from "dayjs";

import {CommentsModel} from "../model/comments.js";
import {UserAction, UpdateType} from "../const.js";
import {CommentLoadingErrorView} from "../view/comment-loading-error-view.js";

const Mode = {
  DEFAULT: `DEFAULT`,
  VIEWING: `VIEWING`,
};

export class FilmPresenter {
  constructor(bodyContainer, filmListContainer, changeData, changeMode, filterModel, api) {
    this._bodyContainer = bodyContainer;
    this._filmListContainer = filmListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;
    this._filterModel = filterModel;
    this._api = api;
    this._commentsModel = new CommentsModel();
    this._filmComponent = null;
    this._filmDetailsComponent = null;
    this._mode = Mode.DEFAULT;
    this._commentsAssignedList = [];
    this._commentLoadingErrorComponent = null;

    this._handleShowFilmDetails = this._handleShowFilmDetails.bind(this);
    this._handleReturnToFilm = this._handleReturnToFilm.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
    this._handleClickOnFilm = this._handleClickOnFilm.bind(this);
    this._handleClickOnX = this._handleClickOnX.bind(this);
    this._handleWatchListClick = this._handleWatchListClick.bind(this);
    this._handleIsWatchedClick = this._handleIsWatchedClick.bind(this);
    this._handleIsFavoriteClick = this._handleIsFavoriteClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);

    this._handleDeleteCommentClick = this._handleDeleteCommentClick.bind(this);
    this._handleCommentEvent = this._handleCommentEvent.bind(this);
    this._commentsModel.addObserver(this._handleCommentEvent);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;

    this._filmComponent = new FilmView(film);
    this._filmComponent.setClickHandler(this._handleClickOnFilm);
    this._filmComponent.setWatchListClickHandler(this._handleWatchListClick);
    this._filmComponent.setIsWatchedClickHandler(this._handleIsWatchedClick);
    this._filmComponent.setIsFavoriteClickHandler(this._handleIsFavoriteClick);

    render(this._filmListContainer, this._filmComponent);

    if (prevFilmComponent === null) {
      render(this._filmListContainer, this._filmComponent);
      return;
    }

    replace(this._filmComponent, prevFilmComponent);
    remove(prevFilmComponent);
  }

  destroy() {
    remove(this._filmComponent);
  }

  _handleClickOnFilm(evt) {
    const filmClickableItems = [`film-card__poster`, `film-card__title`, `film-card__comments`];
    for (const item of filmClickableItems) {
      if (evt.target.classList.contains(item)) {
        this._handleShowFilmDetails();
        document.addEventListener(`keydown`, this._handleEscKeyDown);
      }
    }
  }

  _handleClickOnX(evt) {
    if (evt.target.classList.contains(`film-details__close-btn`)) {
      this._handleReturnToFilm();
    }
  }

  _handleWatchListClick(evt) {
    const activeFilter = this._filterModel.getFilter();
    if (evt.target.classList.contains(`film-card__controls-item--add-to-watchlist`) || evt.target.classList.contains(`film-details__control-label--watchlist`)) {
      this._changeData(
          UserAction.UPDATE_FILM,
          activeFilter === `all` ? UpdateType.PATCH : UpdateType.MINOR,
          Object.assign({},
              this._film, {
                isAddedtoWatchList: !this._film.isAddedtoWatchList
              }
          )
      );
    }
  }

  _handleIsWatchedClick(evt) {
    const activeFilter = this._filterModel.getFilter();
    if (evt.target.classList.contains(`film-card__controls-item--mark-as-watched`) || evt.target.classList.contains(`film-details__control-label--watched`)) {
      this._changeData(
          UserAction.UPDATE_FILM,
          activeFilter === `all` ? UpdateType.PATCH : UpdateType.MINOR,
          Object.assign({},
              this._film, {
                isWatched: !this._film.isWatched,
                watchingDate: dayjs().toISOString(),
              }
          )
      );
    }
  }

  _handleIsFavoriteClick(evt) {
    const activeFilter = this._filterModel.getFilter();
    if (evt.target.classList.contains(`film-card__controls-item--favorite`) || evt.target.classList.contains(`film-details__control-label--favorite`)) {
      this._changeData(
          UserAction.UPDATE_FILM,
          activeFilter === `all` ? UpdateType.PATCH : UpdateType.MINOR,
          Object.assign({},
              this._film, {
                isFavorite: !this._film.isFavorite
              }
          )
      );
    }
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._handleReturnToFilm();
    }
  }

  _handleFormSubmit(comment) {
    this._newCommentComponent.disableForm();

    this._api.addComment(this._film.id, comment)
    .then((result) => {
      this._commentsModel.addComment(result.comments);
    })
    .catch(() => {
      this._filmDetailsComponent.shake();
      this._newCommentComponent.enableForm();

      if (this._newCommentComponent.getElement().querySelector(`.film-details__add-emoji-label`).innerHTML !== ``) {
        this._newCommentComponent.updateData();
      }
    });
  }

  _handleShowFilmDetails() {
    this._bodyContainer.classList.add(`hide-overflow`);
    this._filmDetailsComponent = new FilmDetailsView(this._film);
    this._commentLoadingErrorComponent = new CommentLoadingErrorView();

    this._api.getComments(this._film).then((comments) => {
      this._commentsModel.setComments(comments);
      const filmComments = this._commentsModel.getComments();
      this._filmCommentsComponent = new FilmCommentsView(filmComments);
      render(this._filmDetailsComponent.getElement().querySelector(`.film-details__comments-wrap`), this._filmCommentsComponent, `afterbegin`);
      this._filmCommentsComponent.setDeleteCommentClickHandler(this._handleDeleteCommentClick);
    })
    .catch(() => {
      render(this._filmDetailsComponent.getElement().querySelector(`.film-details__comments-wrap`), this._commentLoadingErrorComponent, `afterbegin`);
    });

    this._newCommentComponent = new NewCommentView();
    this._filmDetailsComponent.setWatchListClickHandler(this._handleWatchListClick);
    this._filmDetailsComponent.setIsWatchedClickHandler(this._handleIsWatchedClick);
    this._filmDetailsComponent.setIsFavoriteClickHandler(this._handleIsFavoriteClick);
    this._filmDetailsComponent.setClickHandler(this._handleClickOnX);

    this._newCommentComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._newCommentComponent.restoreHandlers();

    render(this._bodyContainer, this._filmDetailsComponent);

    this._changeMode();
    this._mode = Mode.VIEWING;

    render(this._filmDetailsComponent.getElement().querySelector(`.film-details__comments-wrap`), this._newCommentComponent);
  }

  _handleReturnToFilm() {
    this._bodyContainer.classList.remove(`hide-overflow`);
    remove(this._filmDetailsComponent);
    this._mode = Mode.DEFAULT;
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.PATCH,
        Object.assign({},
            this._film, {
              comments: this._commentsAssignedList
            }
        )
    );
  }

  _handleEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._handleReturnToFilm();
      document.removeEventListener(`keydown`, this._handleEscKeyDown);
    }
  }

  _handleDeleteCommentClick(evt, deleteCommentId) {
    evt.target.setAttribute(`disabled`, ``);
    evt.target.innerHTML = `Deleting`;

    this._api.deleteComment(deleteCommentId)
    .then(() => {
      this._commentsModel.deleteComment(deleteCommentId);
    })
    .catch(() => {
      this._filmCommentsComponent.shake();
      evt.target.removeAttribute(`disabled`, ``);
      evt.target.innerHTML = `Delete`;
    });

  }

  _handleCommentEvent(update) {
    this._filmCommentsComponent.updateData(update);
    this._newCommentComponent.updateData();
  }
}
