const mongoose = require('mongoose');

const blitzTeamSchema = new mongoose.Schema({
    name: String,
    island: String,
    record: String
})

module.exports = mongoose.model('BlitzLeague', blitzTeamSchema)