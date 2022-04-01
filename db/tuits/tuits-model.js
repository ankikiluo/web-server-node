import mongoose from "mongoose";
import schema from "./tuits-schema.js";
// create mongoose model from schema
const model = mongoose.model('MovieModel', schema);
export default model;