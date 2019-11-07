const mongoose= require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Person = require('./person')

const PostSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    caption: {
        type: String,
        maxlength: 25
    },
    image: {
        // data: Buffer,
        // contentType: String
        type: String,
        required: true
    },
    permissionLevel: {
        type: String,
        required: true
        // holiday
        // insta
        // everyday
    }
})

// TODO: get postID to be able to be id, so base service fxn can be reused to delete
PostSchema.plugin(AutoIncrement, {inc_field: 'postId'})

module.exports = mongoose.model('Post', PostSchema)
