import {PostView} from "../view/post.js";
import {PostDetailsView} from "../view/post-details.js";
import {render} from "../utils/render.js";

export class PostPresenter {
  constuctor() {
    this._postComponent = null;
    this._postDetailsComponent = null;
    this._handleShowPostDetails = this._handleShowPostDetails.bind(this);
    this._handleReturnToPost = this._handleReturnToPost.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
    this._handlePostElementsClick = this._handlePostElementsClick.bind(this);
  }

  init(postListContainer, post) {
    this._post = post;
    this._postListContainer = postListContainer;
    this._postComponent = new PostView(post);
    this._postDetailsComponent = new PostDetailsView(post);
    render(this._postListContainer, this._postComponent);
    this._postComponent.setClickHandler(this._handlePostElementsClick);
  }

  _handlePostElementsClick(event) {
    const postClickableItems = [`film-card__poster`, `film-card__title`, `film-card__comments`];
    for (let item of postClickableItems) {
      if (event.target.classList.contains(item)) {
        this._handleShowPostDetails();
        document.addEventListener(`keydown`, this._handleEscKeyDown);
      }
    }
  }

  _handleShowPostDetails() {
    console.log(this._postComponent);
  }
}
/*

_handleShowPostDetails(postListContainer = this._bodyContainer) {
  postListContainer.classList.add(`hide-overflow`);
  render(postListContainer, this._postDetailsComponent);
}

_handleReturnToPost(postListContainer = this._bodyContainer) {
  postListContainer.classList.remove(`hide-overflow`);
  this._postDetailsComponent.getElement().remove();
  this._postDetailsComponent.removeElement();
}

_handleEscKeyDown(evt) {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    evt.preventDefault();
    this._handleReturnToPost();
    document.removeEventListener(`keydown`, this._handleEscKeyDown);
  }
}

_handlePostElementsClick(event) {
  const postClickableItems = [`film-card__poster`, `film-card__title`, `film-card__comments`];

  for (let item of postClickableItems) {
    if (event.target.classList.contains(item)) {
      this._handleShowPostDetails();
      document.addEventListener(`keydown`, this._handleEscKeyDown);
    }
  }
}


    const postComponent = new PostView(bodyPost);
    const postDetailsComponent = new PostDetailsView(bodyPost);

    const showPostDetails = (postListContainer = this._bodyContainer) => {
      postListContainer.classList.add(`hide-overflow`);
      render(postListContainer, postDetailsComponent);

      for (let commentId of postDetailsComponent._post.comments) {
        for(let comment of this._comments) {
          if (commentId == comment.id) render(postDetailsComponent.getElement().querySelector(`.film-details__comments-list`), new CommentView(comment));
        }
      }
    };


    const returnToPost = (postListContainer = this._bodyContainer) => {
      postListContainer.classList.remove(`hide-overflow`);
      postDetailsComponent.getElement().remove();
      postDetailsComponent.removeElement();
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        returnToPost();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const postClickableItems = [`film-card__poster`, `film-card__title`, `film-card__comments`];

    postComponent.setClickHandler( (event) => {
      for (let item of postClickableItems) {
        if (event.target.classList.contains(item)) {
          showPostDetails();
          document.addEventListener(`keydown`, onEscKeyDown);
        }
      }
    });

    postDetailsComponent.setClickHandler( () => {
      returnToPost();
    });

    render(postListContainer, postComponent);
*/
