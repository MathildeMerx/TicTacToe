import "./App.css";
import { useState } from "react";
import { BoardCell, computeGameOutcome, computeNextPlayer } from "./cells.js";
import "@fontsource/roboto/300.css";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Link } from "react-router-dom";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const nextPlayer = computeNextPlayer(board);
    const gameOutcome = computeGameOutcome(board);

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
                    <BoardCell
                        index={e}
                        board={board}
                        setBoard={setBoard}
                        nextPlayer={nextPlayer}
                        gameOutcome={gameOutcome}
                        key={e}
                    />
                ))}
            </div>
            <div className="restart-button">
                {/* <Button onClick={() => setBoard(Array(9).fill(null))}>
                    {" "}
                    Restart{" "} */}
                <Button
                    onClick={() => setBoard(Array(9).fill(null))}
                    variant="outlined"
                    startIcon={<RestartAltIcon />}
                >
                    Restart
                </Button>
            </div>
            <Link to="/TicTacToeHistory"> Tic tac toe with history</Link>
        </div>
    );
}

export default App;
