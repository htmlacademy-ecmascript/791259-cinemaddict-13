import {createElement} from "../utils.js";

const creatPostsContainerTemplate = () => `<section class="films"></section>`;

export class PostsContainerView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return creatPostsContainerTemplate();
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
