import "./App.css";
import { useState } from "react";
import {
    BoardCell,
    computeGameOutcome,
    computeNextPlayer,
    computeCurrentStep,
} from "./cells.js";
import "@fontsource/roboto/300.css";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const nextPlayer = computeNextPlayer(board);
    const gameOutcome = computeGameOutcome(board);

    const [boardHistory, setBoardHistory] = useState(
        Array(10).fill(Array(9).fill(null))
    );
    const currentStep = computeCurrentStep(boardHistory);
    console.log(`From main app: boardHistory ${boardHistory}`);
    const nextPlayerHistory = computeNextPlayer(boardHistory[currentStep]);
    const gameOutcomeHistory = computeGameOutcome(boardHistory[currentStep]);

    return (
        <>
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
                        <BoardCell
                            index={e}
                            board={board}
                            setBoard={setBoard}
                            nextPlayer={nextPlayer}
                            gameOutcome={gameOutcome}
                            history={false}
                        />
                    ))}
                </div>
                <div className="restart-button">
                    <Button
                        onClick={() => setBoard(Array(9).fill(null))}
                        variant="outlined"
                        startIcon={<RestartAltIcon />}
                    >
                        Restart
                    </Button>
                </div>
            </div>
            <div className="game">
                <p className="game-info">
                    {" "}
                    Game with history.{" "}
                    {gameOutcome
                        ? gameOutcome === "draw"
                            ? `Game over: draw`
                            : `Game over, ${gameOutcome} wins!`
                        : `Next player: ${nextPlayer}`}
                </p>
                <div className="game-board">
                    {[...Array(9).keys()].map((e) => (
                        <BoardCell
                            index={e}
                            board={boardHistory}
                            setBoard={setBoardHistory}
                            nextPlayer={nextPlayerHistory}
                            gameOutcome={gameOutcomeHistory}
                            history={true}
                            currentStep={currentStep}
                        />
                    ))}
                </div>
                <div className="restart-button">
                    <Button
                        onClick={() => setBoard(Array(9).fill(null))}
                        variant="outlined"
                        startIcon={<RestartAltIcon />}
                    >
                        Restart
                    </Button>
                </div>
            </div>
        </>
    );
}

export default App;
