export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


export const render = (element, template, place = `beforeend`) => {
  element.insertAdjacentElement(place, template);
}
