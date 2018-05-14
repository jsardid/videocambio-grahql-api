const moviesArray = [
  {
    tmdb_id: "1",
    tmdb_title: "Title 1",
    tmdb_original_title: "Original Title 1"
  },
  {
    tmdb_id: "2",
    tmdb_title: "Title 2",
    tmdb_original_title: "Original Title 2"
  }
];

function movie(parent, args, context, info) {
  return moviesArray.filter(movie => movie.tmdb_id === args.tmdb_id)[0];
}

function movies(parent, args, context, info) {
  return moviesArray;
}

module.exports = {
  movie,
  movies
};
