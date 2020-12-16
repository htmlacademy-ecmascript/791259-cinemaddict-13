import {generateFilter} from "./mock/filter.js";
import {generateFilm} from "./mock/film.js";
import {SitePresenter} from "./presenter/site-presenter.js";

const POSTS_COUNT = 20;

const films = new Array(POSTS_COUNT).fill().map(() => generateFilm());
const filters = generateFilter(films);
const body = document.querySelector(`body`);

const sitePresenter = new SitePresenter(body, filters);
sitePresenter.init(films);
