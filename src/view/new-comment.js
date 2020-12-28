import {AbstractView} from "./abstract.js";

const createNewCommentTemplate = (emojies) => {
  const {smile, sleeping, angry, puke} = emojies;

  return `<div class="film-details__new-comment">
  <div class="film-details__add-emoji-label"></div>

  <label class="film-details__comment-label">
    <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
  </label>

  <div class="film-details__emoji-list">
    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" ${smile ? `checked` : ``}>
    <label class="film-details__emoji-label" for="emoji-smile">
      <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji" data-value="smile">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
    <label class="film-details__emoji-label" for="emoji-sleeping">
      <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji" data-value="sleeping">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
    <label class="film-details__emoji-label" for="emoji-puke">
      <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji" data-value="puke">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
    <label class="film-details__emoji-label" for="emoji-angry">
      <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji" data-value="angry">
    </label>
  </div>
</div>`;
};

export class NewCommentView extends AbstractView {
  constructor(emojies) {
    super();
    this._emojiClickHandler = this._emojiClickHandler.bind(this);
    this._textAreaClickHandler = this._textAreaClickHandler.bind(this);
    this._emojies = emojies;
  }
  getTemplate() {
    return createNewCommentTemplate(this._emojies);
  }

  _emojiClickHandler(evt) {
    event.preventDefault();
    this._callback.emojiClick(evt);
  }

  setEmojiClickHandler(callback) {
    this._callback.emojiClick = callback;
    this.getElement().querySelector(`.film-details__emoji-list`).addEventListener(`change`, this._emojiClickHandler);
  }

  _textAreaClickHandler(evt) {
    event.preventDefault();
    this._callback.textAreaClick(evt);
  }

  setTextAreaClickHandler(callback) {
    this._callback.textAreaClick = callback;
    this.getElement().querySelector(`textarea`).addEventListener(`change`, this._textAreaClickHandler);
  }
}
