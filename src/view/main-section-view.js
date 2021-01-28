import {AbstractView} from "./abstract-view.js";

const createMainSectionTemplate = () =>
  `<main class="main"></main>`;

export class MainView extends AbstractView {
  getTemplate() {
    return createMainSectionTemplate();
  }
}
