import "../App.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

function ButtonMaker() {
    function queryAnswer(query) {
        axios
            .get(
                `https://www.thecolorapi.com/scheme?hex=${query}&mode=monochrome&count=5`
            )
            .then((response) => {
                console.log(
                    `API query: ${response.data.colors["0"].hex.clean}`
                );
                setButtonBackgroundColor(response.data.colors["0"].hex.clean);
            })
            .catch((error) => console.error(error));
    }
    const refButtonTextColor = useRef();
    const refButtonText = useRef();

    const [buttonTextColor, setButtonTextColor] = useState("ffffff");
    const [buttonText, setButtonText] = useState("Customize your button!");
    const [buttonBackgroundColor, setButtonBackgroundColor] =
        useState("000000");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`This is the color: ${refButtonTextColor.current.value}`);
        console.log(`This is the color: ${refButtonText.current.value}`);
        setButtonTextColor(refButtonTextColor.current.value);
        setButtonText(refButtonText.current.value);
        queryAnswer(buttonTextColor);
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

                <nav className="page-link">
                    <Link to="/"> Main page</Link>
                    <Link to="/tic_tac_toe"> Tic Tac Toe game</Link>
                </nav>

                <section className="high-content">
                    <form>
                        <label htmlFor="buttonText">
                            Button text: <br />
                            <input
                                type="text"
                                id="buttonText"
                                ref={refButtonText}
                            />
                        </label>
                        <br />
                        <label htmlFor="buttonTextColor">
                            Font color: <br />
                            <input
                                type="text"
                                id="buttonTextColor"
                                ref={refButtonTextColor}
                            />
                        </label>
                        <br />
                        <button onClick={handleSubmit}>
                            {" "}
                            Test your button !
                        </button>
                    </form>
                    The button you are making is:
                    <button
                        style={{
                            color: `#${buttonTextColor}`,
                            backgroundColor: `#${buttonBackgroundColor}`,
                        }}
                    >
                        {buttonText}
                    </button>
                </section>
            </main>
        </div>
    );
}

export default ButtonMaker;
