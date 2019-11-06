const express = require('express')
const app = express()
const PersonService = require('./services/person-service')
const PostService = require('./services/post-service')
const bodyParser = require('body-parser')

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.listen(3000, () => {
  console.log('did i work?')
})

app.get('/', (req, res) => {
  // res.send(`${__dirname}/views/index.pug`)
  // res.sendFile(`${__dirname}/index.html`)
  // to send multiple pug templates use the render function
  res.render(`${__dirname}/views/index.pug`)
  // res.render('index')
})

app.get('/posts/all', async (req, res) => {

  const posts = await PostService.findAll();
  res.send(posts)
  // res.render('posts', {posts})
})

app.get('/people/all', async (req, res) => {
  const people = await PersonService.findAll();
  res.send(people)
  // res.render('people'), {people}
})

app.get('/person/:id', async (req, res) => {
  // req.params.id
  // const person = await PersonService.find(req.params.id)
  const person  = {
    "name": "Mert",
    "posts": [
        "caption1"
    ],
    "id": 0
  }
  res.send(person)
  // res.render('person', {person})
})

app.get('/post/:id', async (req, res) => {
  // req.params.id
  // const person = await PersonService.find(req.params.id)
  const post  = {
    "caption": "caption1",
    "image": "image1",
    "owner": "Mert",
    "id": 0
  }
  res.send(post)
  // res.render('post', {post})
})

app.post('/person/', async (req, res) => {
  const person = PersonService.add(req.body)
  res.send(person)
  console.log(req.body)
})

