const PlayerController = require('../controllers/player.controller')

module.exports = function(app) {
    app.get('/api', PlayerController.index);
    app.get('/api/players', PlayerController.findAllPlayer);
    app.get('/api/players/:_id', PlayerController.findOnePlayer);
    app.post('/api/players/new', PlayerController.createPlayer);
    app.put('/api/players/:_id', PlayerController.updateAction);
    app.delete('/api/players/:_id', PlayerController.deleteOnePlayer);
}