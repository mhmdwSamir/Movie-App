const { Genre, validate } = require("../models/geners.model");
const movieService = require("../core/services/MovieService");
const HttpStatusCode = require("./../helpers/http-status-code");
const { Exception } = require("./../core/Exception/base-exception");

module.exports = {
  getAllMovies: async (req, res) => {
    const { sortBy, searchTerm, limit, pageNumber } = req.query;
    const genre = await movieService.getListMovies(
      sortBy,
      searchTerm,
      limit ? +limit : null,
      pageNumber ? +pageNumber : null
    );
    res.send(genre);
  },
  getMovie: async (req, res) => {
    const movie = await movieService.getMovieById(req.params.id);
    res.json(movie);
  },
  createMovie: async (req, res) => {
    const { error } = validate(req.body);
    if (error) throw new Exception(error.details[0].message, 400, "bibJDUW58");
    const movie = await movieService.CreateNewmovie(req.body);
    res.status(HttpStatusCode.Created).json(movie);
  },
  updateMovie: async (req, res) => {
    const { error } = validate(req.body);
    if (error) throw new Exception(error.details[0].message, 400, "85EFE");
    const updatedMovie = await movieService.UpdateAgenre(
      req.params.id,
      req.body
    );
    res.send(updatedMovie);
  },
  deleteMovie: async (req, res) => {
    const movie = await Genre.findByIdAndRemove(req.params.id);
    console.log(movie);
    if (!movie)
      throw new Exception(
        "The Movie with The Given Id Is not Found",
        404,
        "KLOO253"
      );
    res.send(movie);
  },
  deleteAllMovie: async (req, res) => {
    const ids = req.body;
    let movies = await Genre.find({ _id: { $in: ids } });
    if (movies.length === 0) {
      throw new Exception(
        "it seems that Not Movies to delete",
        HttpStatusCode.BadRequest,
        "1199ccsq"
      );
    }
    await Promise.all(movies.map((movie) => movie.remove()));
    res.send(movies.map((movie) => movie.id));
  },
};
