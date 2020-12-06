import {AbstractView} from "./abstract.js";

const createNoPostsTemplate = () =>
  `<section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
    </section>`;

export class NoPostsView extends AbstractView {

  getTemplate() {
    return createNoPostsTemplate();
  }
}
