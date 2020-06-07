const { Genre } = require("../../models/geners.model");
const { Exception } = require("../Exception/base-exception");
const HttpStatusCode = require("./../../helpers/http-status-code");
module.exports = {
  /**
   * @param {string} sortBy
   * @param
   * @param
   * @param
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
      const moviesPromise = Genre.find(query)
        .sort(sortBy)
        .limit(limit)
        .skip(skipCount); // 5

      const moviesCountPromise = Genre.countDocuments(query); // 2
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
    try {
      if (!id)
        throw new Exception(
          "Invalid id",
          HttpStatusCode.BadRequest,
          "BADIDxQ9w"
        );
      const genre = await Genre.findById(id);
      if (!genre)
        throw new Exception(
          "No MOVIE TO APPEAR",
          HttpStatusCode.NotFound,
          "gdgdf025"
        );
      return genre;
    } catch (error) {
      throw error;
    }
  },
  CreateNewgenre: async (movie) => {
    try {
      let genre = new Genre(movie);
      genre = await genre.save();
      return genre;
    } catch (error) {
      throw error;
    }
  },
  UpdateAgenre: async (id, movie) => {
    const genre = await Genre.findById(id);
    if (!genre)
      throw {
        msg: " No Genre With the Given Id ",
        codeExeptions: "NFCS0H2",
      };
    if (genre.name === movie.name)
      throw {
        msg: " it seems that No changes happend ",
        codeExeptions: "NFCS0H2",
      };

    genre.set(movie);
    const updateResult = await genre.save();
    return updateResult;
  },
};
