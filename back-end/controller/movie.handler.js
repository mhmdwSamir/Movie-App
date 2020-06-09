const { movieValidation } = require("../models/movies.model");
const movieService = require("../core/services/MovieService");
const HttpStatusCode = require("./../helpers/http-status-code");
const { Exception } = require("./../core/Exception/base-exception");

module.exports = {
  getAllMovies: async (req, res) => {
    const { sortBy, searchTerm, limit, pageNumber } = req.query;
    const movie = await movieService.getListMovies(
      sortBy,
      searchTerm,
      limit ? +limit : null,
      pageNumber ? +pageNumber : null
    );
    res.send(movie);
  },
  getMovie: async (req, res) => {
    const movie = await movieService.getMovieById(req.params.id);
    res.json(movie);
  },
  createMovie: async (req, res) => {
    const { error } = movieValidation(req.body);
    if (error) throw new Exception(error.details[0].message, 400, "BJDUW58");
    const movie = await movieService.createMovie(req.body);
    res.status(HttpStatusCode.Created).json(movie);
  },
  updateMovie: async (req, res) => {
    const updatedMovie = await movieService.updateMovie(
      req.params.id,
      req.body
    );
    res.send(updatedMovie);
  },
  deleteMovie: async (req, res) => {
    const movieId = req.params.id;
    const deletedMovie = await movieService.deleteMovie(movieId)
    res.send(deletedMovie);
  }
};
