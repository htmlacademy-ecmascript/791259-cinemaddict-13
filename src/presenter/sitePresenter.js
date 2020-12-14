import {MainView} from "../view/mainSection.js";
import {HeaderView} from "../view/header.js";
import {FooterView} from "../view/footer.js";
import {UserView} from "../view/user.js";
import {FilterView} from "../view/filter.js";
import {SortView} from "../view/sort.js"
import {PostsContainerView} from "../view/posts-container.js";
import {PostPresenter} from "./postPresenter.js";

import {LoadMoreButtonView} from "../view/button.js";
import {FooterStatsView} from "../view/footer-stats.js";

import {PostListContainerView} from "../view/posts-list-container.js";
import {NoPostsView} from "../view/no-posts.js";


import {render, remove} from "../utils/render.js";
import {updateItem} from "../utils/common.js"
const POST_COUNT_PER_STEP = 5;
const NUM_OF_EXTRA_POSTS = 2;


export class SitePresenter {
  constructor(bodyContainer, filters) {
    this._bodyContainer = bodyContainer;
    this._renderedPostsCount = POST_COUNT_PER_STEP;

    this._filters = filters.slice();
    this._postPresenter = {};

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
    this._footerStatsComponent = new FooterStatsView();

    this._loadMoreButtonComponent = new LoadMoreButtonView();
    this._handlePostChange = this._handlePostChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
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

  _handleModeChange() {
    Object
      .values(this._postPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handlePostChange(updatedTask) {
    this._bodyPosts = updateItem(this._bodyPosts, updatedTask);
    this._postPresenter[updatedTask.id].init(updatedTask);
  }

  _renderPost(postListContainer, bodyPost) {
    const postPresenter = new PostPresenter(this._bodyContainer, postListContainer, this._handlePostChange, this._handleModeChange);
    postPresenter.init(bodyPost);
    this._postPresenter[bodyPost.id] = postPresenter;
  }

  _clearPostList() {
    Object
      .values(this._postPresenter)
      .forEach((presenter) => presenter.destroy());
    this._postPresenter = {};
    this._renderedPostsCount = POST_COUNT_PER_STEP;
    remove(this._loadMoreButtonComponent);
  }

  _renderPosts(from, to) {
   this._bodyPosts
     .slice(from, to)
     .forEach((post) => this._renderPost(this._postListMain.getElement().children[1], post));
  }

  _handleLoadMoreButtonClick() {
    this._renderPosts(this._renderedPostsCount, this._renderedPostsCount + POST_COUNT_PER_STEP);
    this._renderedPostsCount += POST_COUNT_PER_STEP;

    if (this._renderedPostsCount >= this._bodyPosts.length) {
      remove(this._loadMoreButtonComponent);
    };
  }

  _renderLoadMoreButton() {
    render(this._postListMain.getElement().children[1], this._loadMoreButtonComponent, `afterend`);
    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _renderNoPosts() {
    render(this._postsContainerComponent, this._noPostsComponent);
  }

  _renderFooterStats(count) {
    render(this._footerComponent, new FooterStatsView(count));
  }

  _renderMain() {
    if (this._bodyPosts.length <= 0) {
      this._renderNoPosts();
      this._renderFooterStats(`0`);
      return;
    }

    render(this._postsContainerComponent, this._postListMain);
    render(this._postsContainerComponent, this._postListTopRated);
    render(this._postsContainerComponent, this._postListMostCommented);

    for (let i = 0 ; i < POST_COUNT_PER_STEP; i++) {
      this._renderPost(this._postListMain.getElement().children[1], this._bodyPosts[i]);
    };

    if (this._bodyPosts.length > POST_COUNT_PER_STEP) {
      this._renderLoadMoreButton();
    };

    for (let i = 0 ; i< NUM_OF_EXTRA_POSTS; i++) {
      this._renderPost(this._postListTopRated.getElement().children[1], this._bodyPosts[i]);
      this._renderPost(this._postListMostCommented.getElement().children[1], this._bodyPosts[i]);
    };

    this._renderFooterStats(`130 291`);
  }
}
