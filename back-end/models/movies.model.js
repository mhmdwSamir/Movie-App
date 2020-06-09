const mongoose = require("mongoose");
const Joi = require("joi");
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 25,
  },
  poster: {
    type: String,
    required: true,
  },
  // rate: {
  //   type: Number,
  //   required: true,
  //   min: 1,
  //   max: 5,
  // },
});
const Movie = new mongoose.model("Genre", movieSchema);
function movieValidation(movie) {
  const movieShape = {
    name: Joi.string().required().min(5).max(25),
    poster: Joi.string().required(),
  };
  return Joi.validate(movie, movieShape);
}

exports.Movie = Movie;
exports.movieValidation = movieValidation;
