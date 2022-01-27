import Button from "@mui/material/Button";

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
        <Button
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
        </Button>
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

export { BoardCellHistory, latestStep };
