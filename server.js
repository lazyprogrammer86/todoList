const express = require('express')
const port = process.env.PORT || 3000
const app = express();
const routes = require('./routes')


app.use(express.json())
app.use(express.urlencoded())
app.use(routes)
app.use(express.static('public'))

app.use((req, res) => {
    res.redirect('/')
})

app.set('view engine', 'ejs') // setting view engine to be ejs


app.listen(port, (err) => { //port configuration
    if (err) {
        console.log(err)
    }
    console.log(`Service up and running on port ${port}`)
})