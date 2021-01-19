import {
  Observer
} from "../utils/observer.js";


export class CommentsModel extends Observer {
  constructor() {
    super();
    this._comments = [];
  }

  setComments(comments) {
    this._comments = comments.slice();
  }

  getComments() {
    return this._comments;
  }

  addComment(update) {

    this._comments = update;
    this._notify(update);
  }

  deleteComment(update) {

    let index = this._comments.findIndex((comment) => +comment.id === update);

    if (index === -1) {
      throw new Error(`Can't delete unexisting comment`);
    }

    this._comments = [
      ...this._comments.slice(0, index),
      ...this._comments.slice(index + 1)
    ];

    this._notify(this._comments);
  }

}
