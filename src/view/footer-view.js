import {AbstractView} from "./abstract-view.js";

const createFooterTemplate = () =>
  `<footer class="footer">
    <section class="footer__logo logo logo--smaller">Cinemaddict</section>
    </section>
  </footer>`;

export class FooterView extends AbstractView {
  getTemplate() {
    return createFooterTemplate();
  }
}
