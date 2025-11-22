function checkWinner(board) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function isFull(board) {
    return board.every(cell => cell !== null);
}

function minimax(board, depth, isMaximizing, aiPlayer, humanPlayer) {
    const winner = checkWinner(board);
    if (winner === aiPlayer) return 10 - depth;
    if (winner === humanPlayer) return depth - 10;
    if (isFull(board)) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = aiPlayer;
                const score = minimax(board, depth + 1, false, aiPlayer, humanPlayer);
                board[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = humanPlayer;
                const score = minimax(board, depth + 1, true, aiPlayer, humanPlayer);
                board[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function getBestMoveMinimax(board, player) {
    const aiPlayer = player;
    const humanPlayer = player === 'X' ? 'O' : 'X';
    let bestScore = -Infinity;
    let move = -1;

    // Optimization: If empty board, pick center
    const emptySpots = board.filter(s => s === null).length;
    if (emptySpots === 9) return 4;
    if (emptySpots === 8 && board[4] === null) return 4;

    for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
            board[i] = aiPlayer;
            const score = minimax(board, 0, false, aiPlayer, humanPlayer);
            board[i] = null;
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    return move;
}

module.exports = { getBestMoveMinimax };
