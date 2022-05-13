const Player = require('../models/player.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.createPlayer = (req, res) => {
    const { name, prefPosition } = req.body;
    Player.create({
        name,
        prefPosition
    })
    .then(player => res.json(player))
    .catch(err => res.status(400).json(player))
}

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params._id})
    .then(player => res.json(player))
    .catch(err => console.log(err))
}

module.exports.findAllPlayer = (req, res) => {
    Player.find()
    .then(players => res.json(players))
    catch(err => res.json(err))
}

module.exports.deleteOnePlayer = (req, res) => {
    Player.deleteOne({_id: req.params._id})
    .then(player => res.json(player))
    .catch(err => res.json(err))
}