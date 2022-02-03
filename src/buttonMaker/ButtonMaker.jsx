import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ButtonMaker() {
    const [buttonText, setButtonText] = useState("");

    function buttonTextChange(event) {
        setButtonText(event.target.value);
    }

    return (
        <div>
            <header className="title">
                <h1>Button maker</h1>
            </header>

            <main className="wrapper">
                <section className="subtitle">
                    <h2>To be done, stay tuned!</h2>
                </section>

                <nav className="page-link link">
                    <Link to="/"> Main page</Link>
                </nav>

                <nav className="page-link link">
                    <Link to="/tic_tac_toe"> Tic Tac Toe game</Link>
                </nav>
            </main>
        </div>
    );
}

export default ButtonMaker;
