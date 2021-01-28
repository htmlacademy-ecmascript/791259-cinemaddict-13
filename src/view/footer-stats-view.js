import {AbstractView} from "./abstract-view.js";

const createFooterStatsTemplate = (count) => `<p>${count} movies inside</p>`;

export class FooterStatsView extends AbstractView {
  constructor(count) {
    super();
    this._count = count;
  }

  getTemplate() {
    return createFooterStatsTemplate(this._count);
  }
}
