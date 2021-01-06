import {
  Observer
} from "../utils/observer.js";
import {
  generateRandomItem,
  generateId
} from "../utils/common.js";
import dayjs from "dayjs";

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

  addComment(userAction, text, emotion) {
    this._commentText = text;
    this._commentEmotion = emotion;

    const newComment = {
      id: generateId(),
      author: generateRandomItem([`Tim Macoveev`, `John Doe`, `Andre Right`, `Greg Malkovich`]),
      text: this._commentText,
      emotion: this._commentEmotion,
      date: dayjs().format(`DD/MM/YYYY HH:MM`),
    };

    this._comments = [
      newComment,
      ...this._comments
    ];

    this._notify(userAction, newComment);
  }

  deleteComment(userAction, update) {

    const index = this._comments.findIndex((comment) => comment.id === update);

    if (index === -1) {
      throw new Error(`Can't delete unexisting comment`);
    }

    this._comments = [
      ...this._comments.slice(0, index),
      ...this._comments.slice(index + 1)
    ];

    this._notify(userAction, update);
  }
}
