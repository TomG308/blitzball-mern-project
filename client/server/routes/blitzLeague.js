const express = require('express');
const blitzRouter = express.Router();
const blitzLeague = require('../model/blitzLeague');

// Blitz teams routes

blitzRouter.get('/', (req, res) => {
    blitzLeague.find((err, getTeams) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(getTeams)
    })
})

blitzRouter.get('/:id', (req, res) => {
    blitzLeague.findById(req.params.id, (err, getTeam) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(getTeam)
    })
}).post('/', (req, res) => {
    const newTeam = new blitzLeague(req.body)
    newTeam.save((err, newTeam) => {
        if (err) res.status(500).send(err)
        return res.status(201).send(newTeam)
    })
})
.put('/:id', (req, res) => {
    blitzLeague.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, editedTeam) => {
            if (err) res.status(500).send(err)
            return res.status(200).send(editedTeam)
        }
    )
})
.delete('/:id', (req, res) => {
    blitzLeague.findByIdAndRemove(req.params.id, (err, deletedTeam) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(deletedTeam)
    })
})

module.exports = blitzRouter
