import {createElement} from "../utils.js";

const createFooterStatsTemplate = () => `<p>130 291 movies inside</p>`;

export class FooterStatsView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterStatsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
