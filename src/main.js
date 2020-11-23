import {userTemplate} from "./view/user.js";
import {menuTemplate} from "./view/menu.js";
import {sortTemplate} from "./view/sort.js"
import {postsContainerTemplate} from "./view/posts-container.js"
import {createPostTemplate} from "./view/post.js";
import {buttonTemplate} from "./view/button.js";
import {extraTemplate} from "./view/extra.js";
import {footerStatsTemplate} from "./view/footer-stats.js";
import {postDetailsTemplate} from "./view/post-details.js";
import {createPostsListContainerTemplate} from "./view/posts-list-container.js";
import {generatePost} from "./mock/post.js";

const NUM_OF_POSTS = 5;
const NUM_OF_EXTRA_POSTS = 2;
const posts = new Array(11).fill().map(() => generatePost());
console.log(posts);

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

for (let i = 0 ; i< NUM_OF_POSTS; i++) {
  render(postsContainer.firstElementChild.lastElementChild, createPostTemplate(posts[i]));
}

render(postsContainer.firstElementChild, buttonTemplate);
for (let i = 0 ; i< NUM_OF_EXTRA_POSTS; i++) {
  render(postsContainer.children[1].lastElementChild, createPostTemplate(posts[i]));
  render(postsContainer.children[2].lastElementChild, createPostTemplate(posts[i]));
}
render (footerStats, footerStatsTemplate)

//render(body, postDetailsTemplate);
