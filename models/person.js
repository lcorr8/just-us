module.exports = class Person {
    constructor(name,posts = [], id) {
        this.name = name
        this.posts = posts
        this.id = id
    }
    addPost(post) {
        this.posts.push(post);
        post.owner = this;
        console.log(`Adding post by ${this.name}`)
    }

    static create({name, posts, id}) {
        return new Person(name, posts, id);
    }
}
