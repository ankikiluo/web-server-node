// const model = require('./model');
import model from "./model.js";
const findAllMovies = () => model.find();
// const deleteMovie = (id) => model.removeOne({_id: id});
const deleteMovie = (id) => model.deleteOne({_id: id});
const createMovie = (movie) => model.create(movie);
const findMovieById = (id) => model.findById(id);
const updateMovie = (id, movie) => model.updateOne({_id: id}, {$set: movie});

export default {findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie};