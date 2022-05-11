import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="page-link">
            <Link to="/"> Main page</Link>
            <Link to="/tic_tac_toe"> Tic Tac Toe game</Link>
        </nav>
    );
}

export { Navigation };
