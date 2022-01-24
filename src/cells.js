import "./App.css";

function BoardCell({ index, board, setBoard, nextPlayer, gameOutcome }) {
    return (
        <button
            variant="outlined"
            className="board-cell"
            onClick={() =>
                cellClick(index, board, setBoard, nextPlayer, gameOutcome)
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

export { BoardCell, computeGameOutcome, computeNextPlayer };
