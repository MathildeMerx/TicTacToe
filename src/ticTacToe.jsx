import "./ticTacToe.css";
import { Link } from "react-router-dom";
import {
    useDataFromLocalStorage,
    BoardCellHistory,
    latestStep,
    computeNextPlayer,
    computeGameOutcome,
} from "./ticTacToeLogic.jsx";
import { RefreshIcon } from "@heroicons/react/solid";

/* ----------------------------------------------------------------------------------------- */

function TicTacToe() {
    const [boardHistory, setBoardHistory] = useDataFromLocalStorage(
        "boardHistory",
        Array(10)
            .fill(null)
            .map(() => Array(9).fill(null))
    ); /* The board of the game, with each step stored in board[step] */

    let [stepNumber, setStepNumber] = useDataFromLocalStorage(
        "stepNumber",
        0
    ); /* The state show on screen */
    const nextPlayer = computeNextPlayer(
        boardHistory[stepNumber]
    ); /* The next player (X or O) */
    const gameOutcome = computeGameOutcome(
        boardHistory[stepNumber]
    ); /* Whether the game was won (and if yes by whom) or not */

    return (
        <>
            <div className="title">
                {" "}
                <p>Tic Tac Toe</p>
            </div>
            <div className="page">
                <div className="tabs">
                    <Link to="/" className="link">
                        {" "}
                        Main page
                    </Link>
                </div>
                <div className="game">
                    <p className="game-info">
                        {gameOutcome
                            ? gameOutcome === "draw"
                                ? `Game over: draw`
                                : `Game over, ${gameOutcome} wins!`
                            : `Next player: ${nextPlayer}`}
                    </p>
                    <div className="game-board">
                        {[...Array(9).keys()].map((e) => (
                            <BoardCellHistory
                                index={e}
                                boardHistory={boardHistory}
                                setBoardHistory={setBoardHistory}
                                nextPlayer={nextPlayer}
                                gameOutcome={gameOutcome}
                                stepNumber={stepNumber}
                                setStepNumber={setStepNumber}
                                key={e}
                            />
                        ))}
                        <div className="restart-button">
                            <button
                                className="button-icon"
                                onClick={() => {
                                    setBoardHistory(
                                        Array(10)
                                            .fill(null)
                                            .map(() => Array(9).fill(null))
                                    );
                                    setStepNumber(0);
                                }}
                            >
                                <RefreshIcon className="icon" />
                                Restart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="history-steps">
                    {[...Array(9).keys()].map((e) =>
                        e < latestStep(boardHistory) ? (
                            <button
                                className="history-button"
                                key={e}
                                onClick={() => {
                                    setStepNumber(e);
                                }}
                            >
                                Go back to step {e}
                            </button>
                        ) : e === latestStep(boardHistory) ? (
                            <button
                                disabled
                                sx={{ mt: "-2px" }}
                                className="history-button"
                                key={e}
                                onClick={() => {
                                    setStepNumber(e);
                                }}
                            >
                                Go back to step {e}
                            </button>
                        ) : null
                    )}
                </div>
            </div>
        </>
    );
}

export default TicTacToe;
