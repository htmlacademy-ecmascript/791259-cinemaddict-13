import {AbstractView} from "./abstract.js";

const createMainSectionTemplate = () =>
  `<main class="main"></main>`;

export class MainView extends AbstractView {
  getTemplate() {
    return createMainSectionTemplate();
  }
}
