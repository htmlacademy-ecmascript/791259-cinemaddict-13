import {AbstractView} from "./abstract.js";

const creatPostsContainerTemplate = () => `<section class="films"></section>`;

export class PostsContainerView extends AbstractView {

  getTemplate() {
    return creatPostsContainerTemplate();
  }
}
