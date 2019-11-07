const express = require('express')
const app = express()
const PersonService = require('./services/person-service')
const PostService = require('./services/post-service')
const bodyParser = require('body-parser')
const axios = require('axios').default;

require('./database-connection')

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  // res.send(`${__dirname}/views/index.pug`)
  // res.sendFile(`${__dirname}/index.html`)
  // to send multiple pug templates use the render function
  res.render(`${__dirname}/views/index.pug`)
  // res.render('index')
})

// -------------------------------------Person Endpoints --------------------------------
app.get('/person/all', async (req, res) => {
  const people = await PersonService.findAll()
  // res.send(people)
  res.render('people', {people})
})

app.get('/person/:id', async (req, res) => {
  // req.params.id
  const person = await PersonService.find({id: req.params.id})
  // res.send(person)
  res.render('person', {person})
})

app.post('/person', async (req, res) => {
  const person = await PersonService.add(req.body)
  res.send(person)
  console.log(req.body)
})

app.delete('/person/:id', async (req, res) => {
  const person = await PersonService.delete(req.params.id)
  res.send(person)
})

app.post('/person/:personId/follow', async (req,res,next) => {
const person = await PersonService.find({id: req.params.personId})
  const target = await PersonService.find({id: req.body.targetId})

  person.followers.addToSet(target) // add to set gives you unique sets
  const updatedPerson = await person.save()
  res.send(updatedPerson)
})

// -------------------------------------Post Endpoints --------------------------------

app.get('/post/all', async (req, res) => {
  const posts = await PostService.findAll()
  res.render('posts', {posts})
})

app.get('/post/:id', async (req, res) => {
  const post = await PostService.find({_id: req.params.id})
  res.render('post', {post})
})

app.post('/post', async (req, res) => {
  const owner = await PersonService.find({id: req.body.owner})
  req.body.owner = owner
  const post = await PostService.add(req.body)
  res.send(post)
  console.log(req.body)
})

// TODO: fix to work with sequential ids
app.delete('/post/:id', async (req, res) => {
  const post = await PostService.delete(req.params.id)
  res.send(post)
})

app.get('/person/:personId/posts', async (req,res,next) => {
  const person = await PersonService.find({id: req.params.personId})
  // const target = await PersonService.find({id: req.body.targetId})
  // TODO: add permission level to follower relationship and parse from there to display matching posts
  const permissionLevel = 'holiday'
  const options = { owner: person, permissionLevel: permissionLevel }

  const posts = await PostService.findAll(options)
   // add to set gives you unique sets
  // res.send(posts)
  res.render('posts', {posts})
})

app.listen(3000, () => {
  console.log('did i work?')
})

// axios samples:
// axios.get('http://localhost:3000/people/all')
// axios.post('/person', {name: 'lola', age: '30'}).then(console.log)
// axios.delete('/person/3').then((res => console.log(res.data)))
// axios.post('/person/:id/follow', {targetId: 2}).then(res => console.log(res.data))

// axios.post('/post', {image: "image..", caption: 'caption...', owner: 2, permissionLevel:'insta' }).then(console.log)
