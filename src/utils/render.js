import {AbstractView} from "../view/abstract.js";

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


export const render = (element, child, place = `beforeend`) => {
  if (element instanceof AbstractView) {
    element = element.getElement();
  }

  if (child instanceof AbstractView) {
    child = child.getElement();
  }

  element.insertAdjacentElement(place, child);
};
