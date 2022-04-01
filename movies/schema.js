// const mongoose = require('mongoose');
import mongoose from "mongoose";
const schema = mongoose.Schema({
                                   title: String,
                                   rating: Number
                               }, {collection: 'movies'});
// module.exports = schema;
export default schema;
