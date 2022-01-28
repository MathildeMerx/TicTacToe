import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <div className="title">
                <h1>Welcome to Matilda's website!</h1>
                <p>
                    Here are Matilda's apps! Feel free to explore each page...
                    and have fun :)
                </p>
            </div>
            <div class="content">
                <div className="tab-link">
                    <Link to="/TicTacToe"> Tic Tac Toe game</Link>
                </div>
                <div className="description">
                    A tic tac toe game, with a history of the ongoing game.
                    Closed the tab by mistake? No worries: your game is locally
                    stored!{" "}
                </div>
            </div>
            <div class="content">
                <div className="tab-link">
                    <Link to="/Button"> Button maker</Link>
                </div>
                <div className="description">
                    A button maker, in which you can customize size, color,
                    shape, and many other styles! To be implemented soon.{" "}
                </div>
            </div>
        </div>
    );
}

export default App;
