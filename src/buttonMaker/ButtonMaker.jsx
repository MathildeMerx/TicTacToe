import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hexToRGB, RGBToHex } from "./colorEncoding";
import axios from "axios";

function ButtonMaker() {
    function queryAnswer(query) {
        console.log(`Color in RGB: from ${query} to ${hexToRGB(query)} `);
        var data = {
            model: "default",
            input: [hexToRGB(query), "N", "N", "N", "N"],
        };

        axios
            .post("http://colormind.io/api/", JSON.stringify(data))
            .then((response) => {
                console.log(`With Axios ${response.data.result}`);
                setButtonBackgroundColor(RGBToHex(response.data.result[1]));
            })
            .catch((error) => console.log(error));
    }

    const [buttonTextColor, setButtonTextColor] = useState("");
    const [buttonText, setButtonText] = useState("Button Text");
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        queryAnswer(buttonTextColor);
    }

    return (
        <div>
            <header className="title">
                <h1>Button maker</h1>
            </header>

            <main className="wrapper">
                <section className="subtitle">
                    <h2>In progress, stay tuned!</h2>
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
                                value={buttonText}
                                onChange={(event) =>
                                    setButtonText(event.target.value)
                                }
                            />
                        </label>
                        <br />
                        <label htmlFor="buttonTextColor">
                            Font color: <br />
                            <input
                                type="text"
                                id="buttonTextColor"
                                value={buttonTextColor}
                                onChange={(event) =>
                                    setButtonTextColor(event.target.value)
                                }
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
