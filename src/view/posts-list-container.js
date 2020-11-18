export const createPostsListContainerTemplate = (sectionClass, headerClass, title) => {
  return `
  <section class="films-list ${sectionClass}">
      <h2 class="films-list__title ${headerClass}">${title}</h2>
      <div class="films-list__container"></div>
  </section>`;
}
