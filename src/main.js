//import {FilterView} from "./view/filter.js";
//import {SortView} from "./view/sort.js"
//import {PostsContainerView} from "./view/posts-container.js"
//import {PostView} from "./view/post.js";
//import {LoadMoreButtonView} from "./view/button.js";
//import {FooterStatsView} from "./view/footer-stats.js";
//import {PostDetailsView} from "./view/post-details.js";
//import {PostListContainerView} from "./view/posts-list-container.js";
//import {NoPostsView} from "./view/no-posts.js";
//import {CommentView} from "./view/comment.js";
import {generateFilter} from "./mock/filter.js";
import {generatePost} from "./mock/post.js";
import {generateComment} from "./mock/comment.js";
//import {render} from "./utils/render.js"
import {SitePresenter} from "./presenter/sitePresenter.js";


//const POST_COUNT_PER_STEP = 5;
const POSTS_COUNT = 20;
//const NUM_OF_EXTRA_POSTS = 2;
const posts = new Array(POSTS_COUNT).fill().map(() => generatePost());
const filters = generateFilter(posts);
const body = document.querySelector(`body`);
const comments = new Array(5).fill().map((item, index) => generateComment(index));

const sitePresenter = new SitePresenter(body, filters, comments);
sitePresenter.init(posts);


/*
const main = body.querySelector(`main`);
const footerStats = body.querySelector(`.footer__statistics`);
const comments = new Array(5).fill().map((item, index) => generateComment(index));
const postsContainerComponent = new PostsContainerView();

render(header, new UserView());
render(main, new FilterView(filters));
render(main, new SortView());
render(main, postsContainerComponent);
render(postsContainerComponent, new PostListContainerView(``,`visually-hidden`, 'All movies. Upcoming'));
const postsContainerMain = postsContainerComponent.getElement().querySelector(`.films-list:nth-of-type(1) .films-list__container`);

const renderPost = (postListContainer, post) => {
  const postComponent = new PostView(post);
  const postDetailsComponent = new PostDetailsView(post);

  const showPostDetails = (postListContainer = body) => {
    postListContainer.classList.add(`hide-overflow`);
    render(postListContainer, postDetailsComponent);

    for (let commentId of postDetailsComponent._post.comments) {
      for(let comment of comments) {
        if (commentId == comment.id) render(postDetailsComponent.getElement().querySelector(`.film-details__comments-list`), new CommentView(comment));
      }
    }
  };

  const returnToPost = (postListContainer = body) => {
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
};

if (posts.length <= 0) {
  render(postsContainerMain, new NoPostsView());
  render(footerStats, new FooterStatsView(`0`));
} else {
  render(postsContainerComponent, new PostListContainerView(`films-list--extra`, '', 'Top rated'));
  render(postsContainerComponent, new PostListContainerView(`films-list--extra`, '', 'Most commented'));
  const postsContainerTopRated = postsContainerComponent.getElement().querySelector(`.films-list:nth-of-type(2) .films-list__container`);
  const postsContainerMostCommented = postsContainerComponent.getElement().querySelector(`.films-list:nth-of-type(3) .films-list__container`);

  for (let i = 0 ; i < POST_COUNT_PER_STEP; i++) {
    renderPost(postsContainerMain, posts[i]);
  }

  if (posts.length > POST_COUNT_PER_STEP) {
    let renderedPostsCount = POST_COUNT_PER_STEP;
    const buttonComponent = new LoadMoreButtonView();

    render(postsContainerMain, buttonComponent, `afterend`);

    buttonComponent.setClickHandler( () => {
      posts
        .slice(renderedPostsCount, renderedPostsCount + POST_COUNT_PER_STEP)
        .forEach((post) => renderPost(postsContainerMain, post));
          renderedPostsCount += POST_COUNT_PER_STEP;
      if (renderedPostsCount >= posts.length) {
        buttonComponent.getElement().remove();
        buttonComponent.removeElement();
      };
    });
  };

  for (let i = 0 ; i< NUM_OF_EXTRA_POSTS; i++) {
    renderPost(postsContainerTopRated, posts[i]);
    renderPost(postsContainerMostCommented, posts[i]);
  }

  render(footerStats, new FooterStatsView(`130 291`));
};
*/
