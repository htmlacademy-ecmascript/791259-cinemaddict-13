import {AbstractView} from "./abstract-view.js";
const createLoadingTemplate = () => {
  return `<h2 class="films-list__title">Loading...</h2>`;
};

export class LoadingView extends AbstractView {
  getTemplate() {
    return createLoadingTemplate();
  }
}
