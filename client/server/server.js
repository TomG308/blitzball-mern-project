const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/blitzLeague', (err) => {
    if (err) throw err
    console.log("connected to database")
})

app.use("/teams", require("./routes/blitzLeague"))
app.use('/players', require('./routes/players'))
//connect routes

app.listen(9002, () => {
    console.log('This server is running on local host 9002')
})