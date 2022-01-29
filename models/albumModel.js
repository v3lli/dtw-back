const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        unique: true
    },
    cover: {
        type: String,
        unique: true
    },
    year: {
        type: String
    },
    type:{
        type: String
    }
});

const album = mongoose.model('album', albumSchema);

module.exports = album