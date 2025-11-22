const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

async function getGroqMove(board, player) {
    if (!process.env.GROQ_API_KEY) {
        console.warn("Groq API Key missing");
        return null;
    }

    // Construct a prompt
    const prompt = `
    You are playing Tic Tac Toe. You are player '${player}'.
    The board is a 1D array of 9 squares, indices 0-8.
    Current board state: ${JSON.stringify(board)}.
    'null' represents an empty square.
    Your goal is to win, or block the opponent if they are about to win.
    Return ONLY the index (0-8) of your next move.
    Do not provide any explanation, just the integer.
  `;

    try {
        const completion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'openai/gpt-oss-20b',
            temperature: 0.2,
            max_tokens: 10,
        });

        const content = completion.choices[0]?.message?.content.trim();
        const move = parseInt(content);

        if (isNaN(move) || move < 0 || move > 8 || board[move] !== null) {
            console.warn("Groq returned invalid move:", content);
            return null;
        }
        return move;
    } catch (error) {
        console.error("Groq API error:", error);
        return null;
    }
}

module.exports = { getGroqMove };
