import {createElement} from "../utils.js";

const createFilterItemTemplate = (filter, isActive) => {
  const {name, count} = filter;
  return `<a href="${name}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">${name}${!isActive ? `<span class="main-navigation__item-count">${count}</span>` : ``}</a>`;
};

const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join(``);

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${filterItemsTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};


export class FilterView {
  constructor(filters) {
    this._element = null;
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
