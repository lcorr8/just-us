const Person = require('./models/person')
const Post = require('./models/post')
const PersonService = require('./services/person-service')
const PostService = require('./services/post-service')

console.log('Hello World!')

async function main() {
  const mert = Person.create('Mert')
  const armagan = Person.create('Armagan')

  const post1 = new Post('caption1', 'image1')
  const post2 = new Post('caption2', 'image2')
  mert.addPost(post1)
  armagan.addPost(post2)
  post1.report()

  await PersonService.add(mert)
  await PersonService.add(armagan)
  await PostService.add(post1)
  await PostService.add(post2)
  
  const people = await PersonService.findAll()

  console.log(people[0].name)

  await PersonService.del(1)

  const newPeople = await PersonService.findAll()
  
  // console.log(newPeople[0].name)
}

main()