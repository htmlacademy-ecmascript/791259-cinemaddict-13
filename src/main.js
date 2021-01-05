
import {generateFilm} from "./mock/film.js";
import {SitePresenter} from "./presenter/site-presenter.js";
import {FilmsModel} from "./model/films.js";
import {FilterModel} from "./model/filter.js";

const POSTS_COUNT = 20;
const body = document.querySelector(`body`);
const films = new Array(POSTS_COUNT).fill().map(() => generateFilm());
const filmsModel = new FilmsModel();
filmsModel.setFilms(films);

const filterModel = new FilterModel();
const sitePresenter = new SitePresenter(body, filmsModel, filterModel);

sitePresenter.init();
