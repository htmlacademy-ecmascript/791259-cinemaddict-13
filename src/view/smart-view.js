import {AbstractView} from "./abstract-view.js";

export class SmartView extends AbstractView {
  constructor() {
    super();
  }

  updateElement() {
    const prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  updateData() {
    throw new Error(`AbstractView method not implemented: resetHandlers`);
  }

  restoreHandlers() {
    throw new Error(`AbstractView method not implemented: resetHandlers`);
  }
}
