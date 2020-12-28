import {FilmView} from "../view/film.js";
import {FilmDetailsView} from "../view/film-details.js";
import {NewCommentView} from "../view/new-comment.js";
import {FilmCommentsView} from "../view/film-comments.js";
import {render, remove, replace} from "../utils/render.js";
import {generateComment} from "../mock/comment.js";
import dayjs from "dayjs";

const comments = new Array(5).fill().map((item, index) => generateComment(index));

const Mode = {
  DEFAULT: `DEFAULT`,
  VIEWING: `VIEWING`,
};

const emojies = {
  smile: false,
  sleeping: false,
  angry: false,
  puke: false,
};


export class FilmPresenter {
  constructor(bodyContainer, filmListContainer, changeData, changeMode) {
    this._bodyContainer = bodyContainer;
    this._filmListContainer = filmListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._filmComponent = null;
    this._filmDetailsComponent = null;
    this._mode = Mode.DEFAULT;

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
    this._emotion = null;
    this._description = null;




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
    remove(this._filmDetailsComponent);
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
    if (event.target.classList.contains(`film-card__controls-item--add-to-watchlist`) || event.target.classList.contains(`film-details__control-label--watchlist`)) {
      this._changeData(
          Object.assign({},
              this._film, {
                isAddedtoWatchList: !this._film.isAddedtoWatchList
              }
          )
      );
    }
  }

  _handleIsWatchedClick() {
    if (event.target.classList.contains(`film-card__controls-item--mark-as-watched`) || event.target.classList.contains(`film-details__control-label--watched`)) {
      this._changeData(
          Object.assign({},
              this._film, {
                isWatched: !this._film.isWatched
              }
          )
      );
    }
  }

  _handleIsFavoriteClick() {
    if (event.target.classList.contains(`film-card__controls-item--favorite`) || event.target.classList.contains(`film-details__control-label--favorite`)) {
      this._changeData(
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
    this._description = event.target.value;
  }

 _handleFormSubmit(event) {
    if(!(event.keyCode == 13 && event.metaKey)) return;
    if(event.target.form) {
      event.target.form.submit();
    }
}

  _handleEmojiPick(event) {
    if (event.target.tagName === `INPUT`) {
      this._emotion = event.target.value;
      const emojiContainer = document.querySelector(`.film-details__add-emoji-label`);
      emojiContainer.innerHTML = ``;
      emojiContainer.insertAdjacentHTML(`beforeend`, `<img src="images/emoji/${event.target.value}.png" width="55" height="55" alt="emoji-${event.target.value}">`);
    }
  }

  _handleShowFilmDetails() {
    this._bodyContainer.classList.add(`hide-overflow`);
    this._filmDetailsComponent = new FilmDetailsView(this._film);
    this._newCommentComponent = new NewCommentView(emojies);

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
    let comList = [];
    for (let commentId of this._filmDetailsComponent._film.comments) {
      let comment = comments.find((item) => item.id === commentId);
      if (!comment) {
        continue;
      }
      comList.push(comment);
    }

    render(this._filmDetailsComponent.getElement().querySelector(`.film-details__bottom-container`), new FilmCommentsView(comList));



    render(this._filmDetailsComponent.getElement().querySelector(`.film-details__comments-wrap`), this._newCommentComponent);

  }

  _handleReturnToFilm() {
    this._bodyContainer.classList.remove(`hide-overflow`);
    remove(this._filmDetailsComponent);
    this._mode = Mode.DEFAULT;
  }

  _handleEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._handleReturnToFilm();
      document.removeEventListener(`keydown`, this._handleEscKeyDown);
    }
  }
}
