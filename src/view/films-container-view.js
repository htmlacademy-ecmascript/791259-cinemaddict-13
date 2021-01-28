import {AbstractView} from "./abstract-view.js";

const creatFilmsContainerTemplate = () => `<section class="films"></section>`;

export class FilmsContainerView extends AbstractView {

  getTemplate() {
    return creatFilmsContainerTemplate();
  }
}
