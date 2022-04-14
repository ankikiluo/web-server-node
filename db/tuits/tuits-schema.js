import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   topic: String,
                                   posted: {type: Date, defaultValue: Date.now},
                                   postedBy: {
                                       username: {type: String, default: "mongodb"}
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
                                   logo_image: {type: String, default:"../img/nasa.jpg"},
                                   avatar_image: {type: String, default:"../img/nasa.jpg"},
                                   stats: {
                                       comments: {type: Number, default: 0},
                                       retuits: {type: Number, default: 0},
                                       likes: {type: Number, default: 0}
                                   },
                                   thumbUp : {type: Number, default: 0},
                                   thumbDown : {type: Number, default: 0}
                               }, {collection: 'tuits'});
export default schema;