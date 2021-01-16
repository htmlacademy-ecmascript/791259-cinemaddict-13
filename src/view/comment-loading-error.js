import {AbstractView} from "./abstract.js";
const createCommentLoadingErrorTemplate = () => {
  return `<h2 class="films-list__title">Something went wrong. Try reloading the page.</h2>`;
};

export class CommentLoadingErrorView extends AbstractView {
  getTemplate() {
    return createCommentLoadingErrorTemplate();
  }
}
