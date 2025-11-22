const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    points: { type: Number, default: 0 },
    currentLevel: { type: Number, default: 1 }, // 1: Easy, 2: Medium, 3: Hard, 4: Expert
    matchesPlayed: { type: Number, default: 0 },
    wins: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);
