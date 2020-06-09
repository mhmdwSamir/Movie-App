const express = require("express");
const router = express.Router();
const handlers = require("../controller/movie.handler");
const handleAsync = require("./../helpers/handle-async-operation");

const reqAuth = require("../middlewares/reqAuth");
// Get All Movies
router.get("/", handleAsync(handlers.getAllMovies));
// Get specifi movie
router.get("/:id", reqAuth, handleAsync(handlers.getMovie));
// Create New movie
router.post("/", reqAuth, handleAsync(handlers.createMovie));
// Update existing movie
router.put("/:id", reqAuth, handleAsync(handlers.updateMovie));
// Delete an existing movie
router.delete("/:id", reqAuth, handleAsync(handlers.deleteMovie));

module.exports = router;
