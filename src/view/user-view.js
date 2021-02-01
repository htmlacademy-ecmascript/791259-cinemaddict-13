import {
  SmartView
} from "./smart-view.js";
import {
  getRank
} from "../utils/common.js";

const createUserTemplate = (films) =>
  `<section class="header__profile profile">
    <p class="profile__rating">${getRank(films)}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;

export class UserView extends SmartView {
  constructor(films) {
    super();
    this._data = {
      films
    };
  }

  getTemplate() {
    return createUserTemplate(this._data.films);
  }

  restoreHandlers() {}
}
