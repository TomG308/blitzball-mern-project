const express = require('express');
const playerRouter = express.Router();
const Player = require('../model/blitzPlayers');

// player routes
playerRouter.get('/', (req, res) => {
    Player.find((err, getPlayer) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(getPlayer)
    })
})

playerRouter.get('/:id', (req, res) => {
    Player.findById(req.params.id, (err, getPlayer) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(getPlayer)
    })
}).post('/', (req, res) => {
    console.log(req.body)
    const newPlayer = new Player(req.body)
    newPlayer.save((err, newPlayer) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newPlayer)
    })
}).put('/:id', (req, res) => {
    Player.findByIdAndUpdate(
        req.params.id,
        body,
        {new: true},
        (err, editedPlayer) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(editedPlayer)
    })
})
.delete('/:id', (req, res) => {
    Player.findByIdAndRemove(req.params.id, (err, deletedPlayer) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(deletedPlayer)
    })
})

module.exports = playerRouter