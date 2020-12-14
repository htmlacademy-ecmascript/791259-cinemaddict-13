import {PostView} from "../view/post.js";
import {PostDetailsView} from "../view/post-details.js";
import {CommentView} from "../view/comment.js";
import {render, remove, replace} from "../utils/render.js";
import {generateComment} from "../mock/comment.js";

const comments = new Array(5).fill().map((item, index) => generateComment(index));
const Mode = {
  DEFAULT: `DEFAULT`,
  VIEWING: `VIEWING`,
};

export class PostPresenter {
  constructor(bodyContainer, postListContainer, changeData, changeMode) {
    this._bodyContainer = bodyContainer;
    this._postListContainer = postListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._postComponent = null;
    this._postDetailsComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleShowPostDetails = this._handleShowPostDetails.bind(this);
    this._handleReturnToPost = this._handleReturnToPost.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
    this._handleClickOnPost = this._handleClickOnPost.bind(this);
    this._handlePanelClick = this._handlePanelClick.bind(this);
    this._handleClickOnX = this._handleClickOnX.bind(this);

  }

  init(post) {
    this._post = post;

    const prevPostComponent = this._postComponent;
    const prevPostDetailsComponent = this._postDetailsComponent;

    this._postComponent = new PostView(post);
    this._postDetailsComponent = new PostDetailsView(post);
    this._postComponent.setClickHandler(this._handleClickOnPost);
    this._postComponent.setPostControlsClickHandler(this._handlePanelClick);
    this._postDetailsComponent.setClickHandler(this._handleClickOnX);
    this._postDetailsComponent.setPostControlsClickHandler(this._handlePanelClick);

    if (prevPostComponent === null || prevPostDetailsComponent === null) {
      render(this._postListContainer, this._postComponent);
      return;
    }

    replace(this._postComponent, prevPostComponent);
    replace(this._postDetailsComponent, prevPostDetailsComponent);

    remove(prevPostComponent);
    remove(prevPostDetailsComponent);
  }

  destroy() {
    remove(this._postComponent);
    remove(this._postDetailsComponent);
  }

  _handleClickOnPost(event) {
    const postClickableItems = [`film-card__poster`, `film-card__title`, `film-card__comments`];
    for (let item of postClickableItems) {
      if (event.target.classList.contains(item)) {
        this._handleShowPostDetails();
        document.addEventListener(`keydown`, this._handleEscKeyDown);
      }
    }
  }

  _handleClickOnX(event) {
    if (event.target.classList.contains(`film-details__close-btn`)) {
      this._handleReturnToPost();
    }
  }

  _handlePanelClick(event) {
    if (event.target.classList.contains(`film-card__controls-item--add-to-watchlist`) || event.target.classList.contains(`film-details__control-label--watchlist`)) {
      this._changeData(
          Object.assign(
              {},
              this._post,
              {
                isAddedtoWatchList: !this._post.isAddedtoWatchList
              }
          )
      );
    }

    if (event.target.classList.contains(`film-card__controls-item--mark-as-watched`) || event.target.classList.contains(`film-details__control-label--watched`)) {
      this._changeData(
          Object.assign(
              {},
              this._post,
              {
                isWatched: !this._post.isWatched
              }
          )
      );
    }

    if (event.target.classList.contains(`film-card__controls-item--favorite`) || event.target.classList.contains(`film-details__control-label--favorite`)) {
       this._changeData(
            Object.assign(
            {},
            this._post,
            {
                isFavorite: !this._post.isFavorite
            }
        )
      );
    }
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._handleReturnToPost();
    }
  }

  _handleShowPostDetails() {
    this._bodyContainer.classList.add(`hide-overflow`);
    render(this._bodyContainer, this._postDetailsComponent);
    this._changeMode();
    this._mode = Mode.VIEWING;

    for (let commentId of this._postDetailsComponent._post.comments) {
      let comment = comments.find(item => item.id === commentId);
      if (!comment) continue;
      render(this._postDetailsComponent.getElement().querySelector(`.film-details__comments-list`), new CommentView(comment));
    }
  }

  _handleReturnToPost() {
    this._bodyContainer.classList.remove(`hide-overflow`);
    remove(this._postDetailsComponent);
    this._mode = Mode.DEFAULT;
  }

  _handleEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._handleReturnToPost();
      document.removeEventListener(`keydown`, this._handleEscKeyDown);
    }
  }
}
