import {userTemplate} from "./view/user.js";
import {menuTemplate} from "./view/menu.js";
import {sortTemplate} from "./view/sort.js"
import {postsContainerTemplate} from "./view/posts-container.js"
import {createPostTemplate} from "./view/post.js";
import {buttonTemplate} from "./view/button.js";
import {extraTemplate} from "./view/extra.js";
import {footerStatsTemplate} from "./view/footer-stats.js";
import {createPostDetailsTemplate} from "./view/post-details.js";
import {createPostsListContainerTemplate} from "./view/posts-list-container.js";
import {generatePost} from "./mock/post.js";

const POST_COUNT_PER_STEP = 5;
const POSTS_COUNT = 20;
const NUM_OF_EXTRA_POSTS = 2;
const posts = new Array(POSTS_COUNT).fill().map(() => generatePost());

const body = document.querySelector(`body`);
const header = body.querySelector(`header`);
const main = body.querySelector(`main`);
const footerStats = body.querySelector(`.footer__statistics`);

const render = (element, template, place = `beforeend`) => element.insertAdjacentHTML(place, template);

render(header, userTemplate);
render(main, menuTemplate);
render(main, sortTemplate);
render(main, postsContainerTemplate);
const postsContainer = main.querySelector(`.films`);
render(postsContainer, createPostsListContainerTemplate(``,`visually-hidden`, 'All movies. Upcoming'));
render(postsContainer, createPostsListContainerTemplate(`films-list--extra`, '', 'Top rated'));
render(postsContainer, createPostsListContainerTemplate(`films-list--extra`, '', 'Most commented'));

for (let i = 1 ; i < POST_COUNT_PER_STEP + 1; i++) {
  render(postsContainer.firstElementChild.lastElementChild, createPostTemplate(posts[i]));
}

if (posts.length > POST_COUNT_PER_STEP) {
  let renderedPostsCount = POST_COUNT_PER_STEP;
  render(postsContainer.firstElementChild, buttonTemplate);

  postsContainer.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`films-list__show-more`)) {
      posts
        .slice(renderedPostsCount, renderedPostsCount + POST_COUNT_PER_STEP)
        .forEach((post) => render(postsContainer.children[0].children[1], createPostTemplate(post)));
        renderedPostsCount += POST_COUNT_PER_STEP;
    };
    if (renderedPostsCount >= posts.length) event.target.remove();
  });
};

for (let i = 0 ; i< NUM_OF_EXTRA_POSTS; i++) {
  render(postsContainer.children[1].lastElementChild, createPostTemplate(posts[i]));
  render(postsContainer.children[2].lastElementChild, createPostTemplate(posts[i]));
}
render (footerStats, footerStatsTemplate)

//render(body, createPostDetailsTemplate(posts[0]));
