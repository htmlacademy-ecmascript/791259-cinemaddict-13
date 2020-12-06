import {AbstractView} from "./abstract.js";
const createLoadMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export class LoadMoreButtonView extends AbstractView {

  getTemplate() {
    return createLoadMoreButtonTemplate();
  }
}
