const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Link to User
    players: {
        player1: { type: String, default: 'Player' },
        player2: { type: String, required: true },
    },
    winner: { type: String },
    difficulty: { type: String },
    moves: { type: Array },
    pointsAwarded: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Match', MatchSchema);
