function latestStep(boardHistory) {
    return 9 - boardHistory[9].filter((e) => e === null).length;
}

function BoardCellHistory({
    gameOutcome,
    boardHistory,
    stepNumber,
    setStepNumber,
    index,
    nextPlayer,
    setBoardHistory,
}) {
    return (
        <button
            className="board-cell"
            onClick={() =>
                cellClickHistory(
                    gameOutcome,
                    boardHistory,
                    stepNumber + 1,
                    setStepNumber,
                    index,
                    nextPlayer,
                    setBoardHistory
                )
            }
        >
            {" "}
            {boardHistory[stepNumber][index]}
        </button>
    );
}

function cellClickHistory(
    gameOutcome,
    boardHistory,
    stepNumber,
    setStepNumber,
    index,
    nextPlayer,
    setBoardHistory
) {
    if (gameOutcome || boardHistory[stepNumber - 1][index]) {
        return;
    } else {
        let copyHistory = JSON.parse(JSON.stringify(boardHistory));
        let copyCurrentLine = [...copyHistory[stepNumber - 1]];
        copyCurrentLine[index] = nextPlayer;
        copyHistory[stepNumber] = copyCurrentLine;
        for (let j = stepNumber + 1; j <= 9; j++) {
            copyHistory[j] = [...copyHistory[stepNumber]];
        }
        console.log(
            `Here's the board of the current step (${stepNumber}): ${copyHistory[stepNumber]}`
        );
        console.log(`Here's the board when clicking on a cell: ${copyHistory}`);
        setBoardHistory(copyHistory);
        setStepNumber(stepNumber);
    }
}

function computeNextPlayer(board) {
    return board.filter((x) => x === null).length % 2 === 0 ? "O" : "X";
}

function computeGameOutcome(board) {
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
    if (board.filter((x) => x === null).length === 0) {
        return "draw";
    }
    return null;
}

export { BoardCellHistory, latestStep, computeNextPlayer, computeGameOutcome };
