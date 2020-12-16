import {MainView} from "../view/main-section.js";
import {HeaderView} from "../view/header.js";
import {FooterView} from "../view/footer.js";
import {UserView} from "../view/user.js";
import {FilterView} from "../view/filter.js";
import {SortView} from "../view/sort.js";
import {FilmsContainerView} from "../view/films-container.js";
import {FilmPresenter} from "./film-presenter.js";

import {LoadMoreButtonView} from "../view/button.js";
import {FooterStatsView} from "../view/footer-stats.js";

import {FilmListContainerView} from "../view/films-list-container.js";
import {NoFilmsView} from "../view/no-films.js";


import {render, remove} from "../utils/render.js";
import {updateItem} from "../utils/common.js";
const POST_COUNT_PER_STEP = 5;

export class SitePresenter {
  constructor(bodyContainer, filters) {
    this._bodyContainer = bodyContainer;
    this._renderedFilmsCount = POST_COUNT_PER_STEP;

    this._filters = filters.slice();
    this._filmPresenter = {};

    this._headerComponent = new HeaderView();
    this._mainComponent = new MainView();
    this._footerComponent = new FooterView();
    this._userComponent = new UserView();
    this._sortComponent = new SortView();
    this._filterComponent = new FilterView(this._filters);
    this._filmsContainerComponent = new FilmsContainerView();
    this._noFilmsComponent = new NoFilmsView();

    this._filmsListContainer = new FilmListContainerView().getElement().querySelector(`.films-list__container`);
    this._loadMoreButtonComponent = new LoadMoreButtonView();
    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
  }

  init(bodyFilms) {
    this._bodyFilms = bodyFilms.slice();

    render(this._bodyContainer, this._headerComponent);
    render(this._headerComponent, this._userComponent);
    render(this._bodyContainer, this._mainComponent);
    render(this._mainComponent, this._filterComponent);
    render(this._mainComponent, this._sortComponent);
    render(this._mainComponent, this._filmsContainerComponent);
    render(this._bodyContainer, this._footerComponent);

    this._renderMain();
  }

  _handleModeChange() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleFilmChange(updatedTask) {
    this._bodyFilms = updateItem(this._bodyFilms, updatedTask);
    this._filmPresenter[updatedTask.id].init(updatedTask);
  }

  _renderFilm(filmListContainer, bodyFilm) {
    const filmPresenter = new FilmPresenter(this._bodyContainer, filmListContainer, this._handleFilmChange, this._handleModeChange);
    filmPresenter.init(bodyFilm);
    this._filmPresenter[bodyFilm.id] = filmPresenter;
  }

  _clearFilmList() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};
    this._renderedFilmsCount = POST_COUNT_PER_STEP;
    remove(this._loadMoreButtonComponent);
  }

  _renderFilms(from, to) {
    this._bodyFilms
     .slice(from, to)
     .forEach((film) => this._renderFilm(this._filmsListContainer, film));
  }

  _handleLoadMoreButtonClick() {
    this._renderFilms(this._renderedFilmsCount, this._renderedFilmsCount + POST_COUNT_PER_STEP);
    this._renderedFilmsCount += POST_COUNT_PER_STEP;

    if (this._renderedFilmsCount >= this._bodyFilms.length) {
      remove(this._loadMoreButtonComponent);
    }
  }

  _renderLoadMoreButton() {
    render(this._filmsListContainer, this._loadMoreButtonComponent, `afterend`);
    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _renderNoFilms() {
    render(this._filmsContainerComponent, this._noFilmsComponent);
  }

  _renderFooterStats() {
    render(this._footerComponent, new FooterStatsView(this._bodyFilms.length));
  }

  _renderMain() {
    this._renderFooterStats();
    if (this._bodyFilms.length <= 0) {
      this._renderNoFilms();
      return;
    }

    render(this._filmsContainerComponent, this._filmsListContainer);

    for (let i = 0; i < POST_COUNT_PER_STEP; i++) {
      this._renderFilm(this._filmsListContainer, this._bodyFilms[i]);
    }

    if (this._bodyFilms.length > POST_COUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }
}
