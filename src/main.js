import {generateFilter} from "./mock/filter.js";
import {generatePost} from "./mock/post.js";
import {SitePresenter} from "./presenter/sitePresenter.js";

const POSTS_COUNT = 20;

const posts = new Array(POSTS_COUNT).fill().map(() => generatePost());
const filters = generateFilter(posts);
const body = document.querySelector(`body`);

const sitePresenter = new SitePresenter(body, filters);
sitePresenter.init(posts);
