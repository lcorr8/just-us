const Person = require('./person')

module.exports = class Post {
    constructor(caption,image, owner) {
        this.caption = caption;
        this.image = image;
        this.owner = owner;
        this.id = id();
    }

    static create(caption,image, owner) {
        return new Post(caption,image, owner)
    }

    report() {
        console.log(`this post belongs to owner: ${this.owner}, the caption says: ${this.caption}`)
    }
}
function makeCounter() {
    let i = 0;
    return function () {
      return i++;
    };
  }
  
  const id = makeCounter();

  