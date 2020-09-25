const express = require('express')

const database = require('./db')

const app = express()

var cors = require('cors')

database.initializeMongo()

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  const post = new database.Post({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    content: req.body.content
  })
  post.save().then(res.json(post))
})

app.get('/', (req, res) => {
  database.Post.find((err, posts) => {
    if (err) return res.send(err)
    res.json(posts)
  })
})


app.listen(3000, () => {
  console.log("SERVER IS RUNNING!")
})