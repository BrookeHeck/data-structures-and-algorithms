function sortYear(movies) {
  movies.sort((previous, current) => previous.year - current.year);
  return movies;
}

function sortTitle(movies) {
  movies.sort((previous, current) => {
    const title1 = previous.title.replace('The ', '').toLowerCase();
    const title2 = current.title.replace('The ', '').toLowerCase();
    if(title1 < title2) return -1;
    if(title1 > title2) return 1;
    return 0;
  });
  return movies;
}

function inGenre(movies, genre) {
  return [];
}

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};