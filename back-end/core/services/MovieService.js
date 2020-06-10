const { Movie } = require("../../models/movies.model");
const { Exception } = require("../Exception/base-exception");
const HttpStatusCode = require("./../../helpers/http-status-code");
module.exports = {
  /**
   * @param {string} sortBy  a feild to sort all movies througth
   * @param {string} searchTerm  a word to search the movie
   * @param {number} limit describe the number of movies in any page
   * @param {number} pageNumber describe the the index of the page
   * @returns {Promise<{ movies: Movie[], count: number }>} Promise<{ movies: Movie[], count: number }>
   */
  getListMovies: async (
    sortBy = "name",
    searchTerm = undefined,
    limit = 20,
    pageNumber = 0
  ) => {
    try {
      const query = {};
      if (searchTerm) {
        query.name = { $regex: new RegExp(searchTerm, "gi") };
      }
      var skipCount = pageNumber * limit;
      const moviesPromise = Movie.find(query)
        .sort(sortBy)
        .limit(limit)
        .skip(skipCount);

      const moviesCountPromise = Movie.countDocuments(query);
      const [movies, moviesCount] = await Promise.all([
        moviesPromise,
        moviesCountPromise,
      ]);
      return { movies, count: moviesCount };
    } catch (exc) {
      throw exc;
    }
  },
  
  getMovieById: async (id) => {
    if (!id)
      throw new Exception("Invalid id", HttpStatusCode.BadRequest, "BADIDxQ9w");
    let movie = await Movie.findById(id);
    if (!movie)
      throw new Exception(
        "No MOVIE TO APPEAR",
        HttpStatusCode.NotFound,
        "gdgdf025"
      );
    return movie;
  },
  createMovie: async (movie) => {
    const existingMovie = await Movie.findOne({ name: movie.name });
    if (existingMovie) {
      throw new Exception("Existing movie", HttpStatusCode.Conflict, "A0332ls")
    }
    let createdMovie = new Movie(movie);
    return createdMovie.save();
  },
  updateMovie: async (id, movie) => {
    let movieToUpdate = await Movie.findById(id);

    if (!movieToUpdate)
      throw {
        msg: " No movie With the Given Id ",
        codeExeptions: "NFCS0H2",
      };
    if (movieToUpdate.name === movie.name)
      throw {
        msg: " it seems that No changes happend ",
        codeExeptions: "NFCS0H2",
      };

    movieToUpdate.set(movie);
    const updateResult = await movieToUpdate.save();
    return updateResult;
  },
  deleteMovie: async (id) => {
    const movie = await Movie.findByIdAndRemove(id);
    if (!movie) {
      throw new Exception("The Movie with The Given Id Is not Found", HttpStatusCode.NotFound, "KLOO253");
    }
    return movie;
  }
}; 
