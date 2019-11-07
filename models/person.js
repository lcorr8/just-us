const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

//define schema
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

PersonSchema.plugin(AutoIncrement, {inc_field: 'id'})


//define model
module.exports = mongoose.model('Person', PersonSchema)

// define connection in database-connection.js