import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { computeGameOutcome, computeNextPlayer } from "./cells.js";
import { BoardCellHistory } from "./cellHistory.js";
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
            </div>
            <div>
                <button
                    onClick={() => {
                        setStepNumber(3);
                        console.log(
                            `Here's the board when clicking on back to step 3: ${boardHistory}`
                        );
                    }}
                >
                    Go back to step 3
                </button>
            </div>
            <div className="restart-button">
                <Button
                    onClick={() =>
                        setBoardHistory(
                            Array(10)
                                .fill(null)
                                .map(() => Array(9).fill(null))
                        )
                    }
                    variant="outlined"
                    startIcon={<RestartAltIcon />}
                >
                    Restart
                </Button>
            </div>
            <Link to="/"> Tic tac toe</Link>
        </div>
    );
}

export default AppHistory;
