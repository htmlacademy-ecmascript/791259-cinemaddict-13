import {AbstractView} from "./abstract.js";

const createPostsListContainerTemplate = (sectionClass, headerClass, title) =>
  `<section class="films-list ${sectionClass}">
      <h2 class="films-list__title ${headerClass}">${title}</h2>
      <div class="films-list__container"></div>
  </section>`;


export class PostListContainerView extends AbstractView {
  constructor(sectionClass, headerClass, title) {
    super();
    this._sectionClass = sectionClass;
    this._headerClass = headerClass;
    this._title = title;
  }

  getTemplate() {
    return createPostsListContainerTemplate(this._sectionClass, this._headerClass, this._title);
  }
}
