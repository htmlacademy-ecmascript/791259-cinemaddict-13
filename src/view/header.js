import {AbstractView} from "./abstract.js";

const createHeaderTemplate = () =>
  `<header class="header">
    <h1 class="header__logo logo">Cinemaddict</h1>
  </header>`;

export class HeaderView extends AbstractView {
  getTemplate() {
    return createHeaderTemplate();
  }
}
