import {createElement} from "../utils.js";

const createPostsListContainerTemplate = (sectionClass, headerClass, title) =>
  `<section class="films-list ${sectionClass}">
      <h2 class="films-list__title ${headerClass}">${title}</h2>
      <div class="films-list__container"></div>
  </section>`;


export class PostListContainerView {
  constructor(sectionClass, headerClass, title) {
    this._element = null;
    this._sectionClass = sectionClass;
    this._headerClass = headerClass;
    this._title = title;
  }

  getTemplate() {
    return createPostsListContainerTemplate(this._sectionClass, this._headerClass, this._title);
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
