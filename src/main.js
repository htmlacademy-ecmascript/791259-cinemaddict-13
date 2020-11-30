import {UserView} from "./view/user.js";
import {FilterView} from "./view/filter.js";
import {SortView} from "./view/sort.js"
import {PostsContainerView} from "./view/posts-container.js"
import {PostView} from "./view/post.js";
import {LoadMoreButtonView} from "./view/button.js";
import {FooterStatsView} from "./view/footer-stats.js";
import {PostDetailsView} from "./view/post-details.js";
import {PostListContainerView} from "./view/posts-list-container.js";
import {generatePost} from "./mock/post.js";
import {generateComment} from "./mock/comment.js";
import {CommentView} from "./view/comment.js";
import {generateFilter} from "./mock/filter.js";
import {render, RenderPosition} from "./utils.js"

const POST_COUNT_PER_STEP = 5;
const POSTS_COUNT = 20;
const NUM_OF_EXTRA_POSTS = 2;
const posts = new Array(POSTS_COUNT).fill().map(() => generatePost());
const filters = generateFilter(posts);
const body = document.querySelector(`body`);
const header = body.querySelector(`header`);
const main = body.querySelector(`main`);
const footerStats = body.querySelector(`.footer__statistics`);
const comments = new Array(5).fill().map((item, index) => generateComment(index));
const postsContainerComponent = new PostsContainerView();
render(header, new UserView().getElement());
render(main, new FilterView().getElement());
render(main, new SortView().getElement());
render(main, postsContainerComponent.getElement());
const postsContainer = main.querySelector(`.films`);
render(postsContainerComponent.getElement(), new PostListContainerView(``,`visually-hidden`, 'All movies. Upcoming').getElement());
render(postsContainerComponent.getElement(), new PostListContainerView(`films-list--extra`, '', 'Top rated').getElement());
render(postsContainerComponent.getElement(), new PostListContainerView(`films-list--extra`, '', 'Most commented').getElement());
const postsContainerMain = postsContainer.querySelector(`.films-list:nth-of-type(1) .films-list__container`);
const postsContainerTopRated = postsContainer.querySelector(`.films-list:nth-of-type(2) .films-list__container`);
const postsContainerMostCommented = postsContainer.querySelector(`.films-list:nth-of-type(3) .films-list__container`);

for (let i = 1 ; i < POST_COUNT_PER_STEP + 1; i++) {
  render(postsContainerMain, new PostView(posts[i]).getElement());
}

if (posts.length > POST_COUNT_PER_STEP) {
  let renderedPostsCount = POST_COUNT_PER_STEP;


render(postsContainer.firstElementChild, new LoadMoreButtonView().getElement());

  postsContainer.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`films-list__show-more`)) {
      posts
        .slice(renderedPostsCount, renderedPostsCount + POST_COUNT_PER_STEP)
        .forEach((post) => render(postsContainerMain, new PostView(post).getElement()));
        renderedPostsCount += POST_COUNT_PER_STEP;
    };
    if (renderedPostsCount >= posts.length) {
      event.target.remove();
      new LoadMoreButtonView().getElement().remove();
      new LoadMoreButtonView().removeElement();
    };
  });
};

for (let i = 0 ; i< NUM_OF_EXTRA_POSTS; i++) {
  render(postsContainerTopRated, new PostView(posts[i]).getElement());
  render(postsContainerMostCommented, new PostView(posts[i]).getElement());
}
render(footerStats, new FooterStatsView().getElement());

/*render(body, new PostDetailsView(posts[0]).getElement());
const commentContaier = body.querySelector(`.film-details__comments-list`);

for (let commentId of posts[0].comments) {
  for(let comment of comments) {
    if (commentId == comment.id) render(commentContaier, new CommentView(comment).getElement());
  }
}*/
