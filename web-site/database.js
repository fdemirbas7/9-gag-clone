const mongoose = require('mongoose')

const DATABASE_CONNECTION = 'mongodb://mongo/test'

var kittySchema = mongoose.Schema({
  name: String
})

Kitten = exports.Kitten = mongoose.model('Kitten', kittySchema)

exports.initializeMongo = function() {
    mongoose.connect(DATABASE_CONNECTION)
    
    console.log('Trying to Connect to' + DATABASE_CONNECTION)
    var db = mongoose.connection
    db.on('error', console.error.bind(console, 'Connection Error!'))
    db.once('open', function(){
      console.log('Connection Established!')
      addRandomCat()
    })
}

var addRandomCat = () => {
  var silence = new Kitten({
    name: "Silence" + Math.random()
  })
  silence.save((err, fluffy) => {
    if (err) return console.error(err)
    console.log("There is a New Kitten in The Neighborhood")
  })
}