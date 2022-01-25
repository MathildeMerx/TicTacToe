function computeStepNumber(boardHistory) {
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
            variant="outlined"
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
    if (gameOutcome || boardHistory[stepNumber][index]) {
        return;
    } else {
        console.log(`stepNumber: ${stepNumber}`);
        let copyHistory = JSON.parse(JSON.stringify(boardHistory));
        copyHistory[stepNumber][index] = nextPlayer;
        for (let j = stepNumber + 1; j <= 9; j++) {
            // console.log(`For loop, here's ${j}th iteration`);
            copyHistory[j] = [...copyHistory[stepNumber]];
        }
        console.log(
            `Here's the board of the current step (${stepNumber}): ${copyHistory[stepNumber]}`
        );
        console.log(`Here's the board when clicking on a cell: ${copyHistory}`);
        setBoardHistory(copyHistory);
        setStepNumber(stepNumber + 1);
    }
}

export { computeStepNumber, BoardCellHistory };
