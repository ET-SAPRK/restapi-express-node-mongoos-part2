require('dotenv/config')

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())// the body must be parse to json

//Import Routes
const postsRoutes = require('./routes/post')

//middleware run in each routes
app.use('/posts', postsRoutes);



mongoose.set('strictQuery', true)
//conect db
mongoose.connect(process.env.DB_CONNECTION ,  () =>
    console.log('connet to DB')
)

//routes
app.get('/', (req,res) => {
    res.send('We ARE ON HOME');
})


//server listener
app.listen(3030);