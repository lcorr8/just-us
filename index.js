const Person = require('./models/person')
const Post = require('./models/post')
const PersonService = require('./services/person-service')
const PostService = require('./services/post-service')

console.log('Hello World!')

async function main() {
    console.log('Inside async fxn')

    const mert = new Person('Mert')
    const armagan = new Person('Armagan')
  
    const post1 = new Post('caption 1', 'image 1')
    const post2 = new Post('caption 2', 'image 2')
    mert.addPost(post1)
    armagan.addPost(post2)
    post1.report()
    post2.report()
  
    await PersonService.add(mert)
    await PersonService.add(armagan)
    const people = await PersonService.findAll()
  
    console.log(people)
  
    await PostService.add(post1)
    await PostService.add(post2)
  
    const postsFromDb = await PostService.findAll();

    console.log('there are', postsFromDb.length, 'posts in the db')
    postsFromDb[0].report()
  }
  
  main()