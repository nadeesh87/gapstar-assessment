// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var imageSchema = new Schema({
    id: Number,
    username: String,
    favoriteImages: [{
        id: Number,
        src: String,
        thumbnail: String
    }],
    created_at: Date,
    updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Images = mongoose.model('Image', imageSchema);

// make this available to our users in our Node applications
module.exports = Images;