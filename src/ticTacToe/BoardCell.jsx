// For each cell, indicates which side should (not) have a solid border
let borderStyles = {
    0: "solid none none solid",
    1: "solid solid none solid",
    2: "solid solid none none",
    3: "solid none solid solid",
    4: "solid solid solid solid",
    5: "solid solid solid none",
    6: "none none solid solid",
    7: "none solid solid solid",
    8: "none solid solid none",
};

// One cell of the tic tac toe game
function BoardCell({ index, displayValue, handleClick }) {
    return (
        <button
            className="board-cell"
            style={{ borderStyle: `${borderStyles[index]}` }}
            onClick={handleClick}
        >
            {displayValue}
        </button>
    );
}

// Reaction when clicking in a cell
function cellClick(
    gameOutcome,
    boardHistory,
    stepNumber,
    setStepNumber,
    index,
    nextPlayer,
    setBoardHistory
) {
    // If the game is already finished or the cell is already full, do nothing
    if (gameOutcome || boardHistory[stepNumber - 1][index]) {
        return;
    }

    // Else we create a copy of the board, update it with the new move,
    // set it as the new board value, and increase the step
    else {
        let copyHistory = JSON.parse(JSON.stringify(boardHistory));
        let copyCurrentLine = [...copyHistory[stepNumber - 1]];

        copyCurrentLine[index] = nextPlayer;
        copyHistory[stepNumber] = copyCurrentLine;

        for (let j = stepNumber + 1; j <= 9; j++) {
            copyHistory[j] = [...copyHistory[stepNumber]];
        }

        setBoardHistory(copyHistory);
        setStepNumber(stepNumber);
    }
}

export { BoardCell, cellClick };
