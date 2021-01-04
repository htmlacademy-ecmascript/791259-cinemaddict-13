import {generateFilter} from "./mock/filter.js";
import {generateFilm} from "./mock/film.js";
import {SitePresenter} from "./presenter/site-presenter.js";
import {FilmsModel} from "./model/films.js";

const POSTS_COUNT = 20;

const films = new Array(POSTS_COUNT).fill().map(() => generateFilm());
const filmsModel = new FilmsModel();
filmsModel.setFilms(films);

const filters = generateFilter(films);
const body = document.querySelector(`body`);

const sitePresenter = new SitePresenter(body, filters, filmsModel);
sitePresenter.init();
