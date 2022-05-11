import "./ticTacToe.css";
import "../App.css";
import { Link } from "react-router-dom";

import {
    latestStep,
    computeNextPlayer,
    computeGameOutcome,
} from "./ticTacToeLogic";

import { BoardCell, cellClick } from "./BoardCell";

import { RestartButton } from "./RestartButton";

import { useDataFromLocalStorage } from "./useDataFromLocalStorage";

/* ----------------------------------------------------------------------------------------- */

// The board of the game, with each step stored in board[step]
function TicTacToe() {
    const [boardHistory, setBoardHistory] = useDataFromLocalStorage(
        "boardHistory",
        Array(10)
            .fill(null)
            .map(() => Array(9).fill(null))
    );

    // The step of the game
    let [stepNumber, setStepNumber] = useDataFromLocalStorage("stepNumber", 0);

    // The next player (X or O)
    const nextPlayer = computeNextPlayer(boardHistory[stepNumber]);

    // Whether the game was won (and if yes by whom) or not
    const gameOutcome = computeGameOutcome(boardHistory[stepNumber]);

    // A text describing the state of the game to the player: who's won if it's over, else who's next
    let nextStepText = "";
    if (!gameOutcome) {
        nextStepText = `Next player: ${nextPlayer}`;
    } else if (gameOutcome === "draw") {
        nextStepText = "Game over: draw";
    } else {
        nextStepText = `Game over, ${gameOutcome} wins!`;
    }

    return (
        <>
            <header className="title">
                <h1>Tic Tac Toe</h1>
            </header>

            <main className="wrapper">
                <section className="subtitle game-info">
                    <h2>{nextStepText}</h2>
                </section>

                <nav className="page-link">
                    <Link to="/">Main page</Link>
                    <Link to="/button_maker">Button maker</Link>
                </nav>

                <section className="high-content">
                    <div className="game-board">
                        {[...Array(9).keys()].map((index) => (
                            <BoardCell
                                index={index}
                                displayValue={boardHistory[stepNumber][index]}
                                handleClick={() =>
                                    cellClick(
                                        gameOutcome,
                                        boardHistory,
                                        stepNumber + 1,
                                        setStepNumber,
                                        index,
                                        nextPlayer,
                                        setBoardHistory
                                    )
                                }
                                key={index}
                            />
                        ))}

                        <div className="restart-button">
                            <RestartButton
                                setStepNumber={setStepNumber}
                                setBoardHistory={setBoardHistory}
                            />
                        </div>
                    </div>
                </section>

                <aside className="history-steps">
                    {[...Array(10).keys()].map((step) =>
                        step <= latestStep(boardHistory) ? (
                            <button
                                disabled={step === stepNumber}
                                className="history-button"
                                key={step}
                                onClick={() => {
                                    setStepNumber(step);
                                }}
                            >
                                {step === stepNumber
                                    ? `Current step: ${stepNumber}`
                                    : `Back to step ${step}`}
                                {step === stepNumber ? (
                                    <span className="vertical-line"></span>
                                ) : null}{" "}
                            </button>
                        ) : null
                    )}
                </aside>
            </main>
        </>
    );
}

export default TicTacToe;
