const mongoose = require('mongoose');
// mongoose.Promise = global.Promise

const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
  
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('MongoDB is connected')
  }).catch(err=>{
    console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
    setTimeout(connectWithRetry, 5000)
  })
}
  connectWithRetry()

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
