// Determines the number of moves already played
function latestStep(boardHistory) {
    return 9 - boardHistory[9].filter((cell) => cell === null).length;
}

// Returns whether the next player is X or O
function computeNextPlayer(board) {
    return board.filter((x) => x === null).length % 2 === 0 ? "O" : "X";
}

// Returns whether a player has won, the game is draw, or none of these
function computeGameOutcome(board) {
    // `combinations` represents the possible trios of indexes needed to win:
    // each line, each column, and each diagonal
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < combinations.length; i++) {
        let [a, b, c] = combinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    if (board.every((x) => x !== null)) {
        return "draw";
    }

    return null;
}

export { latestStep, computeNextPlayer, computeGameOutcome };
