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
    });
}

function movies(parent, args, context, info) {
  const limit = args.limit || 0;
  const offset = args.offset || 0;
  const query =
    (args.title && {
      $and: args.title
        .replace(/,/g, " ")
        .trim()
        .replace(/a|á|A|Á/g, "[aáAÁ]")
        .replace(/e|é|E|É/g, "[eéEÉ]")
        .replace(/i|í|I|Í/g, "[iíIÍ]")
        .replace(/o|ó|O|Ó/g, "[oóOÓ]")
        .replace(/u|ú|U|Ú/g, "[uúUÚ]")
        .split(" ")
        .map(word => ({ tmdb_title: { $regex: new RegExp(word, "i") } }))
    }) ||
    {};
  const sortBy = (args.sortBy && { [args.sortBy]: "desc" }) || {};

  return MovieModel.find(query)
    .sort(sortBy)
    .skip(offset)
    .limit(limit)
    .exec()
    .then(results => {
      return results;
    });
}

module.exports = {
  movie,
  movies
};
