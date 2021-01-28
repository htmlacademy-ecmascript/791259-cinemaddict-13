export const getRuntime = (minutesCount) => {
  const hours = Math.floor(minutesCount / 60);
  const minutes = minutesCount % 60;
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const getRank = (watchedFilms) => {
  const FILM_COUNT_LOW = 10;
  const FILM_COUNT_HIGH = 20;

  let rank;
  if (watchedFilms.length <= FILM_COUNT_LOW) {
    rank = `Novice`;
  }

  if (watchedFilms.length >= FILM_COUNT_LOW + 1 && watchedFilms.length <= FILM_COUNT_HIGH ) {
    rank = `Fan`;
  }
  if (watchedFilms.length >= FILM_COUNT_HIGH + 1) {
    rank = `Movie Buff`;
  }

  return rank;
};
