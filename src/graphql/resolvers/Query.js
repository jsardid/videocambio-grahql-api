const MovieModel = require("../../db_models/movie.model.js");

function movie(parent, args, context, info) {
  return MovieModel.find({ tmdb_id: args.tmdb_id })
    .exec()
    .then(results => {
      if (results.length === 0) {
        throw new Error(`Movie not found with id ${args.tmdb_id}`);
      } else {
        return results[0];
      }
    })
}

function movies(parent, args, context, info) {
  return moviesArray;
}

module.exports = {
  movie,
  movies
};
