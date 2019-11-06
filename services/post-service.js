const BaseService = require('./base-service')
const PostModel = require('../models/post')

class PostService extends BaseService {
    constructor() {
        super(PostModel, `${__dirname}/../post-database.json`)
    }
}

module.exports = new PostService()
