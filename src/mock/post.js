function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const generateRandomItem = (arr) => arr[getRandomIntInclusive(0, arr.length-1)];

const generateDescription =  () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.slice(0, -1);
  const descriptions = description.split('. ');
  const randomNumber = getRandomIntInclusive(1, descriptions.length - 1);
  const postDescription = descriptions.slice(randomNumber, randomNumber + getRandomIntInclusive(1,5));
  return postDescription.join(`. `) + `.`;
}

const titles = [`The Dance of Life`, `Sagebrush Trail`, `The Man with the Golden Arm`, `Santa Claus Conquers the Martians`, `Popeye the Sailor Meets Sindbad the Sailor`, `The Great Flamarion`];

const posterTitles = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];

const ratings = [8.3, 3.2, 9.0, 2.3, 6.3, 8.9];
const productionDates = [1929, 1933, 1955, 1964, 1936, 1945];
const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`, `Mystery`];
const durations = [`1h 55m`, `54m`, `1h 59m`, `1h 21m`, `16m`, `1h 59m`, `1h 18m`]
const emotions = [`smile`, `sleeping`, `puke`, `angry`];

export const generatePost = () => {

  const generateComment = () => {
    return {
    text: generateDescription(),
    emotion: generateRandomItem(emotions),
    author: `author`,
    date: `date`,
    };
  };

  const comments = new Array(getRandomIntInclusive(1, 5)).fill().map(() => generateComment());

  return {
  	poster: generateRandomItem(posterTitles),
    title:  generateRandomItem(titles),
    originalTitle: generateRandomItem(titles),
    rating: generateRandomItem(ratings),
    director: `Anthony Mann`,
    writers: [`Anne Wigton, Heinz Herald`, `Richard Weil`].join(`, `),
    actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`].join(`, `),
    country: `USA`,
    productionDate: generateRandomItem(productionDates),
    duration: generateRandomItem(durations),
    genre: genres.slice(getRandomIntInclusive(0, genres.length - 1)).join(`, `),
  	description: generateDescription(),
  	comments: comments,
  }
};
