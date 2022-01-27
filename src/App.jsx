import "./ticTacToe.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            Here are Matilda's apps! Feel free to explore each page... and have
            fun :)
            <Link to="/TicTacToe" className="link">
                {" "}
                Tic Tac Toe game
            </Link>
        </div>
    );
}

export default App;
