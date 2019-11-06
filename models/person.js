module.exports = class Person {
    constructor(name,posts = []) {
        this.name = name;
        this.posts = posts;
        this.id = id();
    }

    addPost(post) {
        this.posts.push(post.caption)
        post.owner = this.name
    }

    static create(name, posts) {
        return new Person(name, posts);
    }
};

function makeCounter() {
    let i = 0;
    return function () {
      return i++;
    };
  }
  
  const id = makeCounter();

  