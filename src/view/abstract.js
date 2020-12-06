import {createElement} from "../utils.js";


export class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Cannot instantiate AbstactView, only concrete one.`);
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(`AbstractView method not implemented: getTemplate`);
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
