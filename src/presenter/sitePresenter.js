import {MainView} from "../view/mainSection.js";
import {HeaderView} from "../view/header.js";
import {FooterView} from "../view/footer.js";
import {UserView} from "../view/user.js";
import {FilterView} from "../view/filter.js";
import {SortView} from "../view/sort.js"
import {PostsContainerView} from "../view/posts-container.js"
import {PostView} from "../view/post.js";
import {LoadMoreButtonView} from "../view/button.js";
import {FooterStatsView} from "../view/footer-stats.js";
import {PostDetailsView} from "../view/post-details.js";
import {PostListContainerView} from "../view/posts-list-container.js";
import {NoPostsView} from "../view/no-posts.js";
import {CommentView} from "../view/comment.js";

import {render} from "../utils/render.js"
const POST_COUNT_PER_STEP = 5;
const NUM_OF_EXTRA_POSTS = 2;


export class SitePresenter {
  constructor(bodyContainer, filters, comments) {
    this._bodyContainer = bodyContainer;
    this._filters = filters.slice();
    this._comments = comments.slice();
    this._headerComponent = new HeaderView();
    this._mainComponent = new MainView();
    this._footerComponent = new FooterView();
    this._userComponent = new UserView();
    this._sortComponent = new SortView();
    this._filterComponent = new FilterView(this._filters);
    this._postsContainerComponent = new PostsContainerView();
    this._postsListContainerComponent = new PostListContainerView();
    this._noPostsComponent = new NoPostsView();
    this._postListMain = new PostListContainerView(``,`visually-hidden`, 'All movies. Upcoming');
    this._postListTopRated = new PostListContainerView(`films-list--extra`, '', 'Top rated');
    this._postListMostCommented = new PostListContainerView(`films-list--extra`, '', 'Most commented');

  }

  init(bodyPosts) {
    this._bodyPosts = bodyPosts.slice();

    render(this._bodyContainer, this._headerComponent);
    render(this._headerComponent, this._userComponent);
    render(this._bodyContainer, this._mainComponent);
    render(this._mainComponent, this._filterComponent);
    render(this._mainComponent, this._sortComponent);
    render(this._mainComponent, this._postsContainerComponent);
    render(this._bodyContainer, this._footerComponent);

    this._renderMain();

  }

  _renderPost(postListContainer, bodyPost) {

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
  }

  _renderLoadMoreButton(container) {
    let renderedPostsCount = POST_COUNT_PER_STEP;
    const buttonComponent = new LoadMoreButtonView();

    render(container, buttonComponent, `afterend`);

    buttonComponent.setClickHandler( () => {
      this._bodyPosts
        .slice(renderedPostsCount, renderedPostsCount + POST_COUNT_PER_STEP)
        .forEach((post) => this._renderPost(container, post));
          renderedPostsCount += POST_COUNT_PER_STEP;

      if (renderedPostsCount >= this._bodyPosts.length) {
        buttonComponent.getElement().remove();
        buttonComponent.removeElement();
      };
    });
  }

  _renderNoPosts() {
    render(this._postsContainerComponent, this._noPostsComponent);
  }

  _renderMain() {

    if (this._bodyPosts.length <= 0) {
      this._renderNoPosts();
    } else {
      render(this._postsContainerComponent, this._postListMain);
      render(this._postsContainerComponent, this._postListTopRated);
      render(this._postsContainerComponent, this._postListMostCommented);

      const postsContainerTopRated = this._postsContainerComponent.getElement().querySelector(`.films-list:nth-of-type(2) .films-list__container`);
      const postsContainerMostCommented = this._postsContainerComponent.getElement().querySelector(`.films-list:nth-of-type(3) .films-list__container`);
      const postsContainerMain = this._postsContainerComponent.getElement().querySelector(`.films-list:nth-of-type(1) .films-list__container`);

      for (let i = 0 ; i < POST_COUNT_PER_STEP; i++) {
        this._renderPost(postsContainerMain, this._bodyPosts[i]);
      };

      if (this._bodyPosts.length > POST_COUNT_PER_STEP) {
        this._renderLoadMoreButton(postsContainerMain);
      };

      for (let i = 0 ; i< NUM_OF_EXTRA_POSTS; i++) {
        this._renderPost(postsContainerTopRated, this._bodyPosts[i]);
        this._renderPost(postsContainerMostCommented, this._bodyPosts[i]);
      }
    }
  }
}
