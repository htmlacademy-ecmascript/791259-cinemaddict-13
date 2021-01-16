import {
  FilmView
} from "../view/film.js";
import {
  FilmDetailsView
} from "../view/film-details.js";
import {
  NewCommentView
} from "../view/new-comment.js";
import {
  FilmCommentsView
} from "../view/film-comments.js";
import {
  render,
  remove,
  replace
} from "../utils/render.js";

import {CommentsModel} from "../model/comments.js";
import {UserAction, UpdateType} from "../const.js";
import {CommentLoadingErrorView} from "../view/comment-loading-error.js";


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
    this._handleEmojiPick = this._handleEmojiPick.bind(this);
    this._handleTextAreaInput = this._handleTextAreaInput.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);

    this._handleDeleteCommentClick = this._handleDeleteCommentClick.bind(this);
    this._commentEmotion = null;
    this._commentText = null;
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

  _handleClickOnFilm(event) {
    const filmClickableItems = [`film-card__poster`, `film-card__title`, `film-card__comments`];
    for (let item of filmClickableItems) {
      if (event.target.classList.contains(item)) {
        this._handleShowFilmDetails();
        document.addEventListener(`keydown`, this._handleEscKeyDown);
      }
    }
  }

  _handleClickOnX(event) {
    if (event.target.classList.contains(`film-details__close-btn`)) {
      this._handleReturnToFilm();
    }
  }

  _handleWatchListClick(event) {
    const activeFilter = this._filterModel.getFilter();
    if (event.target.classList.contains(`film-card__controls-item--add-to-watchlist`) || event.target.classList.contains(`film-details__control-label--watchlist`)) {
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

  _handleIsWatchedClick() {
    const activeFilter = this._filterModel.getFilter();
    if (event.target.classList.contains(`film-card__controls-item--mark-as-watched`) || event.target.classList.contains(`film-details__control-label--watched`)) {
      this._changeData(
          UserAction.UPDATE_FILM,
          activeFilter === `all` ? UpdateType.PATCH : UpdateType.MINOR,
          Object.assign({},
              this._film, {
                isWatched: !this._film.isWatched
              }
          )
      );
    }
  }

  _handleIsFavoriteClick() {
    const activeFilter = this._filterModel.getFilter();
    if (event.target.classList.contains(`film-card__controls-item--favorite`) || event.target.classList.contains(`film-details__control-label--favorite`)) {
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

  _handleTextAreaInput(event) {
    this._commentText = event.target.value;
  }

  _handleFormSubmit(event) {
    if (!(event.keyCode === 13 && event.metaKey)) {
      return;
    }

    this._api.addComment(this._film, this._commentText, this._commentEmotion)
    .then((result) => tis._commentsModel.addComment(UserAction.ADD_COMMENT, result.comments));
  }

  _handleEmojiPick(event) {
    if (event.target.tagName === `INPUT`) {
      this._commentEmotion = event.target.value;
      const emojiContainer = document.querySelector(`.film-details__add-emoji-label`);
      emojiContainer.innerHTML = ``;
      emojiContainer.insertAdjacentHTML(`beforeend`, `<img src="images/emoji/${event.target.value}.png" width="55" height="55" alt="emoji-${event.target.value}">`);
    }
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
    this._filmDetailsComponent.setFormSubmitHandler(this._handleFormSubmit);

    this._newCommentComponent.setEmojiClickHandler(this._handleEmojiPick);
    this._newCommentComponent.setTextAreaClickHandler(this._handleTextAreaInput);

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

  _handleDeleteCommentClick(event) {
    if (event.target.tagName === `BUTTON`) {
      const deleteCommentId = +event.target.closest(`.film-details__comment`).dataset.id;

      this._api.deleteComment(deleteCommentId).then(() => {
        this._commentsModel.deleteComment(UserAction.DELETE_COMMENT, deleteCommentId);
      });
    }
  }

  _handleCommentEvent(userAction, update) {
    switch (userAction) {
      case UserAction.ADD_COMMENT:
        this._filmCommentsComponent.updateData(update);
        this._newCommentComponent.updateData();
        break;

      case UserAction.DELETE_COMMENT:
        this._filmCommentsComponent.updateData(update);
        break;
    }
  }
}
