const  Mongoose  = require("mongoose");

const albumSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: [true, 'an album must have a name'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'an album must have a description'],
        unique: true
    },
    cover: {
        type: String,
        required: [true, 'an album must have an album cover'],
        unique: true
    },
    year: {
        type: String
    },
    type:{
        type: String
    }
})

const album = Mongoose.model('album', albumSchema);

module.exports =  album