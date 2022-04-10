// const model = require('./model');
import model from "./tuits-model.js";
const findAllTuits = () => model.find();
const deleteTuit = (id) => model.deleteOne({_id: id});
const createTuit = (tuit) => model.create(tuit);
// const findTuitById = (id) => model.findById(id);
const updateTuit = (id, tuit) => model.updateOne({_id: id}, {$set: tuit});

export default {findAllTuits, deleteTuit, createTuit, updateTuit};
// module.exports = {findAllTuits: findAllTuits(), deleteTuit, createTuit, updateTuit}