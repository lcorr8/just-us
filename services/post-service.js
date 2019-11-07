const BaseService = require('./base-service')
const PostModel = require('../models/post')

class PostService extends BaseService {
    constructor() {
        super(PostModel)
    }
}

module.exports = new PostService()
