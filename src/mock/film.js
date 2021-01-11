import {generateRandomItem, getRandomIntInclusive, generateDescription, generateId} from "../utils/common.js";

const titles = [`The Dance of Life`, `Sagebrush Trail`, `The Man with the Golden Arm`, `Santa Claus Conquers the Martians`, `Popeye the Sailor Meets Sindbad the Sailor`, `The Great Flamarion`];

const posterTitles = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`, `Mystery`];

const generateCommentsIds = () => {
  const commentsIds = [];
  const NUM_OF_COMMENTS = 5;
  for (let i = 0; i < NUM_OF_COMMENTS; i++) {
    commentsIds.push(i);
  }
  commentsIds.splice(getRandomIntInclusive(0, NUM_OF_COMMENTS), getRandomIntInclusive(0, NUM_OF_COMMENTS));
  return commentsIds;
};

export const generateFilm = () => {

  return {
    id: generateId(),
    poster: generateRandomItem(posterTitles),
    title: generateRandomItem(titles),
    alternative_title: generateRandomItem(titles),
    total_rating: generateRandomItem([8.3, 3.2, 9.0, 2.3, 6.3, 8.9]),
    director: generateRandomItem([`Anthony Mann`, `Tim Burton`, `Stanley Kubrick`]),
    writers: [`Anne Wigton, Heinz Herald`, `Richard Weil`].join(`, `),
    actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`].join(`, `),
    release: {
      date: generateRandomItem([`21 April 1929`, `2 September 1933`, `30 December 1955`, ` 23 June 1964`, ` 4 July 1936`, `29 January 1945`]),
      release_country: generateRandomItem([`USA`, `France`, `Germany`, `India`]),
    },
    runtime: generateRandomItem([`1h 55m`, `54m`, `1h 59m`, `1h 21m`, `16m`, `1h 59m`, `1h 18m`]),
    genre: genres.slice(getRandomIntInclusive(0, genres.length - 1)),
    description: generateDescription(),
    age_rating: generateRandomItem([`18+`, `21+`, `10+`, `0+`]),
    comments: generateCommentsIds(),
    isAddedtoWatchList: Boolean(getRandomIntInclusive(0, 1)),
    isWatched: Boolean(getRandomIntInclusive(0, 1)),
    isFavorite: Boolean(getRandomIntInclusive(0, 1)),
  };
};
