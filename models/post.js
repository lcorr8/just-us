const Person = require('./person')

module.exports = class Post {
    constructor(caption,image, id, owner) {
        this.caption = caption
        this.image = image
        this.id = id
        this.owner = owner
    }

    static create({caption,image, id, owner}) {
        const ownerInstance = new Person(owner.name)
        return new Post(caption,image, id, ownerInstance)
    }

    report() {
        console.log('this post belongs to', this.owner.name, `the caption says: ${this.caption}`)
    }
}