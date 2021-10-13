require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_LINK, { //connecting to mongoDB
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to database')
}).catch(err => {
    console.log(err)
})

module.exports = mongoose.connection;