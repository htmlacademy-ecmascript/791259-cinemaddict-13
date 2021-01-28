import {AbstractView} from "./abstract-view.js";

const createNoFilmsTemplate = () =>
  `<section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
    </section>`;

export class NoFilmsView extends AbstractView {

  getTemplate() {
    return createNoFilmsTemplate();
  }
}
