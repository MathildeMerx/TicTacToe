import "./App.css";

function BoardCell({
    index,
    board,
    setBoard,
    nextPlayer,
    gameOutcome,
    history,
    currentStep,
}) {
    return (
        <button
            variant="outlined"
            className="board-cell"
            onClick={
                !history
                    ? () =>
                          cellClick(
                              index,
                              board,
                              setBoard,
                              nextPlayer,
                              gameOutcome
                          )
                    : () =>
                          cellClickHistory(
                              index,
                              board,
                              setBoard,
                              nextPlayer,
                              gameOutcome,
                              currentStep
                          )
            }
        >
            {board[index]}
        </button>
    );
}
function cellClick(i, board, setBoard, nextPlayer, gameOutcome) {
    if (gameOutcome || board[i]) {
        return;
    } else {
        const copyBoard = [...board];
        copyBoard[i] = nextPlayer;
        setBoard(copyBoard);
    }
}

function cellClickHistory(
    i,
    board,
    setBoard,
    nextPlayer,
    gameOutcome,
    currentStep
) {
    if (gameOutcome || board[currentStep][i]) {
        return;
    } else {
        const copyBoard = Array(board.length).fill(null);
        for (let j = 0; j < board.length; j++) {
            copyBoard[j] = [...board[j]];
        }
        copyBoard[currentStep + 1][i] = nextPlayer;
        setBoard(copyBoard);
    }
}

function computeNextPlayer(board) {
    console.log(
        `The first element of board is: ${board[0]}, and the board is ${board}`
    );
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

function computeCurrentStep(boardHistory) {
    return 10 - boardHistory.filter((e) => e.every((x) => x === null)).length;
}

export { BoardCell, computeGameOutcome, computeNextPlayer, computeCurrentStep };
