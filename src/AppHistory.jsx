import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { computeGameOutcome, computeNextPlayer } from "./cells.js";
import { BoardCellHistory, latestStep } from "./cellHistory.js";
import "@fontsource/roboto/300.css";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function AppHistory() {
    const [boardHistory, setBoardHistory] = useState(
        Array(10)
            .fill(null)
            .map(() => Array(9).fill(null))
    );
    let [stepNumber, setStepNumber] = useState(0);
    const nextPlayer = computeNextPlayer(boardHistory[stepNumber]);
    const gameOutcome = computeGameOutcome(boardHistory[stepNumber]);

    return (
        <div className="page">
            <div className="tabs">
                <Link to="/"> Tic tac toe</Link>
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
                        <Button
                            size="small"
                            sx={{ mx: "3px", color: "primary.dark" }}
                            onClick={() => {
                                setBoardHistory(
                                    Array(10)
                                        .fill(null)
                                        .map(() => Array(9).fill(null))
                                );
                                setStepNumber(0);
                            }}
                            variant="text"
                            startIcon={<RestartAltIcon />}
                        >
                            Restart
                        </Button>
                    </div>
                </div>
            </div>
            <div className="history-steps">
                {[...Array(9).keys()].map((e) =>
                    e < latestStep(boardHistory) ? (
                        <Button
                            sx={{ mt: "-2px" }}
                            className="history-button"
                            key={e}
                            onClick={() => {
                                setStepNumber(e);
                            }}
                        >
                            Go back to step {e}
                        </Button>
                    ) : e === latestStep(boardHistory) ? (
                        <Button
                            disabled
                            sx={{ mt: "-2px" }}
                            className="history-button"
                            key={e}
                            onClick={() => {
                                setStepNumber(e);
                            }}
                        >
                            Go back to step {e}
                        </Button>
                    ) : null
                )}
            </div>
        </div>
    );
}

export default AppHistory;
