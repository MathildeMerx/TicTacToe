import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <header className="title">
                <h1>Welcome to Matilda's website!</h1>
            </header>
            <main className="main-content index-page">
                <section className="subtitle">
                    <h2>
                        Here are my apps! Feel free to explore each page... and
                        have fun :)
                    </h2>
                </section>
                <div className="page-link">
                    <Link className="page-link" to="/tic_tac_toe">
                        {" "}
                        Tic Tac Toe game
                    </Link>
                </div>
                <section>
                    A tic tac toe game, with a history of the ongoing game.
                    Closed the tab by mistake? No worries: your game is locally
                    stored!
                </section>
                <div className="page-link">
                    <Link to="/button_maker"> Button maker</Link>
                </div>
                <section>
                    A button maker, in which you can customize size, color,
                    shape, and many other styles! To be implemented soon.
                </section>
            </main>
        </div>
    );
}

export default App;
