import {AbstractView} from "./abstract.js";

const creatFilmsContainerTemplate = () => `<section class="films"></section>`;

export class FilmsContainerView extends AbstractView {

  getTemplate() {
    return creatFilmsContainerTemplate();
  }
}
