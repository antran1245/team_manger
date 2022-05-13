
const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String, 
        minLength: [2, "Name must be at least 2 characters long."],
        required: true
    },
    prefPosition: {
        type: String
    }
}, {timestamps: true});

const Player = mongoose.model('Players', PlayerSchema);
module.exports = Player;