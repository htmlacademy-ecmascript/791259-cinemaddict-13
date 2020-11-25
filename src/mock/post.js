import dayjs from "dayjs";
import {generateRandomItem, getRandomIntInclusive, generateRandomDate} from "../utils.js";

const titles = [`The Dance of Life`, `Sagebrush Trail`, `The Man with the Golden Arm`, `Santa Claus Conquers the Martians`, `Popeye the Sailor Meets Sindbad the Sailor`, `The Great Flamarion`];

const posterTitles = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`, `Mystery`];

const generateDescription = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.slice(0, -1);
  const descriptions = description.split(`. `);
  const randomNumber = getRandomIntInclusive(1, descriptions.length - 1);
  const postDescription = descriptions.slice(randomNumber, randomNumber + getRandomIntInclusive(1, 5));
  return postDescription.join(`. `) + `.`;
};

export const generatePost = () => {

  const generateComment = () => {
    return {
      text: generateDescription(),
      emotion: generateRandomItem([`smile`, `sleeping`, `puke`, `angry`]),
      author: generateRandomItem([`Tim Macoveev`, `John Doe`, `Andre Right`, `Greg Malkovich`]),
      date: dayjs(generateRandomDate(new Date(2012, 0, 1), new Date())).format(`YYYY/MM/DD h:mm`),
    };
  };

  const comments = new Array(getRandomIntInclusive(0, 5)).fill().map(() => generateComment());

  return {
    poster: generateRandomItem(posterTitles),
    title: generateRandomItem(titles),
    originalTitle: generateRandomItem(titles),
    rating: generateRandomItem([8.3, 3.2, 9.0, 2.3, 6.3, 8.9]),
    director: generateRandomItem([`Anthony Mann`, `Tim Burton`, `Stanley Kubrick`]),
    writers: [`Anne Wigton, Heinz Herald`, `Richard Weil`].join(`, `),
    actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`].join(`, `),
    country: generateRandomItem([`USA`, `France`, `Germany`, `India`]),
    productionDate: generateRandomItem([`21 April 1929`, `2 September 1933`, `30 December 1955`, ` 23 June 1964`, ` 4 July 1936`, `29 January 1945`]),
    duration: generateRandomItem([`1h 55m`, `54m`, `1h 59m`, `1h 21m`, `16m`, `1h 59m`, `1h 18m`]),
    genres: genres.slice(getRandomIntInclusive(0, genres.length - 1)),
    description: generateDescription(),
    ageRestriction: generateRandomItem([`18+`, `21+`, `10+`, `0+`]),
    comments,
    isAddedtoWatchList: Boolean(getRandomIntInclusive(0, 1)),
    isWatched: Boolean(getRandomIntInclusive(0, 1)),
    isFavorite: Boolean(getRandomIntInclusive(0, 1)),
  };
};
