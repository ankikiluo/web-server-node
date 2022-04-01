const mongoose = require('mongoose');
const schema = mongoose.Schema({
                                   topic: String,
                                   posted: {type: Date, defaultValue: Date.now},
                                   postedBy: {
                                       userName: String
                                   },
                                   liked: {type: Boolean, defaultValue: false},
                                   verified: {type: Boolean, defaultValue: false},
                                   handle: String,
                                   title: String,
                                   tuit: String,
                                   attachments: {
                                       video: String,
                                       image: String
                                   },
                                   time: String,
                                   "logo-image": String,
                                   "avatar-image": String,
                                   stats: {
                                       comments: {type: Number, defaultValue: 0},
                                       retuits: {type: Number, defaultValue: 0},
                                       likes: {type: Number, defaultValue: 0}
                                   }
                               }, {collection: "tuits"});
module.exports = schema;
