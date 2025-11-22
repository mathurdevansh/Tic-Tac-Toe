const express = require('express');
const router = express.Router();
const Match = require('../models/Match');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { getGroqMove } = require('../services/groq');
const { getBestMoveMinimax } = require('../utils/gameLogic');

router.post('/ai/move', async (req, res) => {
    const { board, difficulty, player } = req.body;

    let move = null;

    try {
        if (difficulty === 'Expert') {
            move = await getGroqMove(board, player);
        }

        // Fallback or other levels
        if (move === null || move === undefined) {
            if (difficulty === 'Hard' || difficulty === 'Expert') {
                move = getBestMoveMinimax(board, player);
            } else if (difficulty === 'Medium') {
                // Medium: 70% chance of best move, 30% random
                if (Math.random() > 0.3) {
                    move = getBestMoveMinimax(board, player);
                } else {
                    const available = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
                    if (available.length > 0) {
                        move = available[Math.floor(Math.random() * available.length)];
                    }
                }
            } else {
                // Easy: Random
                const available = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
                if (available.length > 0) {
                    move = available[Math.floor(Math.random() * available.length)];
                }
            }
        }

        res.json({ move });
    } catch (error) {
        console.error("Error in /ai/move:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Protected route to save match and update user points
router.post('/match', auth, async (req, res) => {
    try {
        const { players, winner, difficulty, moves } = req.body;

        let pointsAwarded = 0;
        if (winner === 'X') { // Assuming Player is always X
            if (difficulty === 'Easy') pointsAwarded = 10;
            if (difficulty === 'Medium') pointsAwarded = 20;
            if (difficulty === 'Hard') pointsAwarded = 50;
            if (difficulty === 'Expert') pointsAwarded = 100;
        } else if (winner === 'Draw') {
            pointsAwarded = 5;
        }

        const match = new Match({
            user: req.user.id,
            players,
            winner,
            difficulty,
            moves,
            pointsAwarded
        });
        await match.save();

        // Update User Points and Level
        const user = await User.findById(req.user.id);
        user.points += pointsAwarded;
        user.matchesPlayed += 1;
        if (winner === 'X') user.wins += 1;

        // Simple Leveling Logic: Level up every 100 points
        const newLevel = Math.floor(user.points / 100) + 1;
        if (newLevel > user.currentLevel) {
            user.currentLevel = newLevel;
        }

        await user.save();

        res.json({ match, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/matches/history', auth, async (req, res) => {
    try {
        const matches = await Match.find({ user: req.user.id }).sort({ date: -1 });
        res.json(matches);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/leaderboard', async (req, res) => {
    try {
        // Return top 10 players by points
        const users = await User.find().sort({ points: -1 }).limit(10).select('username points wins currentLevel');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
