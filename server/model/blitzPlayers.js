const mongoose = require('mongoose');

const blitzPlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    team: String,
    position: String,
    contract: Number,
    pricePerGame: Number
})


module.exports = mongoose.model('BlitzPlayers', blitzPlayerSchema)