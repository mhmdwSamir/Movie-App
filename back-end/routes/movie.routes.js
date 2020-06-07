const express = require("express");
const router = express.Router();
const handlers = require("../controller/movie.handler");
const handleAsync = require("./../helpers/handle-async-operation");

const reqAuth = require("../middlewares/reqAuth");
// Get All Movies
router.get("/", handleAsync(handlers.getAllMovies));
// Get specifi movie
router.get("/:id", handleAsync(handlers.getMovie));
// Create New movie
router.post("/", handleAsync(handlers.createMovie));
// Update existing movie
router.put("/:id", handleAsync(handlers.updateMovie));
// Delete an existing movie
router.delete("/:id", handleAsync(handlers.deleteMovie));
// Delete All
router.delete("/", handleAsync(handlers.deleteAllMovie));

module.exports = router;
