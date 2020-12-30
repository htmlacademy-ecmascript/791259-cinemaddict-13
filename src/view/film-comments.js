import {
  SmartView
} from "./smart.js";

const createFilmCommentsSection = (comments) => {
  const createFilmComment = (comment) => {

    return `<li data-id="${comment.id}" class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${comment.text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.author}</span>
          <span class="film-details__comment-day">${comment.date}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`;
  };

  const commentsList = comments.map((comment) => createFilmComment(comment)).join(``);
  return `<div>
    <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
    <ul class="film-details__comments-list">${commentsList}</ul>
  </div>`;
};

export class FilmCommentsView extends SmartView {
  constructor(comments) {
    super();
    this._comments = comments;
    this._deleteCommentClickHandler = this._deleteCommentClickHandler.bind(this);
    this.restoreHandlers = this.restoreHandlers.bind(this);
  }

  updateData(update) {
    this._comments = update;
    this.updateElement();
  }

  getTemplate() {
    return createFilmCommentsSection(this._comments);
  }

  _deleteCommentClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteCommentClick(evt);
  }

  setDeleteCommentClickHandler(callback) {
    this._callback.deleteCommentClick = callback;
    this.getElement().querySelector(`.film-details__comments-list`).addEventListener(`click`, this._deleteCommentClickHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();
  }

  _setInnerHandlers() {
    this.getElement().querySelector(`.film-details__comments-list`).addEventListener(`click`, this._deleteCommentClickHandler);
  }
}
