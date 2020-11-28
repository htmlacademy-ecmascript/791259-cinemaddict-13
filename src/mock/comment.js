import {generateRandomItem, getRandomIntInclusive, generateRandomDate, generateDescription} from "../utils.js";
import dayjs from "dayjs";

export const generateComment = (index) => {

  return {
    id: index,
    text: generateDescription(),
    emotion: generateRandomItem([`smile`, `sleeping`, `puke`, `angry`]),
    author: generateRandomItem([`Tim Macoveev`, `John Doe`, `Andre Right`, `Greg Malkovich`]),
    date: dayjs(generateRandomDate(new Date(2012, 0, 1), new Date())).format(`YYYY/MM/DD h:mm`),
  };
};
