// const mongoose = require('mongoose');
// const schema = require('./schema');
import mongoose from "mongoose";
import schema from "./schema.js";
// create mongoose model from schema
const model = mongoose.model('MovieModel', schema);
// module.exports = model;
export default model;
