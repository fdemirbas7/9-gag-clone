const mongoose = require("mongoose")

const DATABASE_URL = 'mongodb://mongo/testdb'

var postSchema = mongoose.Schema({
  title: String,
  imageUrl: String,
  content: String
})

Post = exports.Post = mongoose.model('Post', postSchema)

var initializeMongo = (() => {
  mongoose.connect(DATABASE_URL)
  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error'))
  db.once('open', () => {
    addInitialPost()
  })
})

var addInitialPost = () => {
  var post = new Post({
    title:'Look at this Cat!',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1200px-VAN_CAT.png',
    content:'This is my AWESOME cat LOKI'
  })
  post.save((err, post) => {
    if(err) return console.log(err)
  })
}

exports.initializeMongo = initializeMongo