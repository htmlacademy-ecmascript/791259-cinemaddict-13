import {AbstractView} from "./abstract-view.js";
import {getRank} from "../utils/common.js";

const createUserTemplate = (films) =>
  `<section class="header__profile profile">
    <p class="profile__rating">${getRank(films)}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;

export class UserView extends AbstractView {
  constructor(films) {
    super();
    this._watchedFilms = films;
  }

  getTemplate() {
    return createUserTemplate(this._watchedFilms);
  }
}
