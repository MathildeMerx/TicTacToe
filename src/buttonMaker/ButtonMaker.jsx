import "../App.css";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { queryAnswer } from "./apiQuery";
import { RadioAlignText } from "./RadioAlignText";

function ButtonMaker() {
    const initialForm = {
        text: "",
        textColor: "",
        backgroundColor: "",
        align: "",
    };

    function reducer(state, { type, payload }) {
        switch (type) {
            case "update":
                return { ...state, [payload.key]: payload.value };
            case "reset":
                return initialForm;
            default:
                throw new Error(
                    `Unexpected action type: ${type} when trying to modify ${payload.key}.`
                );
        }
    }

    const [formState, formDispatch] = useReducer(reducer, initialForm);

    function handleSubmit(event) {
        event.preventDefault();
        queryAnswer(formState.backgroundColor, formDispatch);
    }

    function changeForm(event) {
        formDispatch({
            type: "update",
            payload: {
                key: event.target.id,
                value: event.target.value,
            },
        });
    }

    function clickForm(event) {
        formDispatch({
            type: "update",
            payload: {
                key: event.target.name,
                value: event.target.id,
            },
        });
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
                        <label htmlFor="text">
                            Button text: <br />
                            <input
                                type="text"
                                id="text"
                                value={formState.text}
                                onChange={changeForm}
                                placeholder=""
                            />
                        </label>

                        <br />

                        <label htmlFor="textColor">
                            Font color (between <i>000000</i> and <i>ffffff</i>
                            ): <br />
                            <input
                                type="text"
                                id="textColor"
                                value={formState.textColor}
                                onChange={changeForm}
                            />
                        </label>

                        <br />
                        <div>
                            <p>Align text: </p>
                            {["left", "center", "right"].map((e) => (
                                <RadioAlignText
                                    whereAlign={e}
                                    onClick={clickForm}
                                    key={e}
                                />
                            ))}
                        </div>

                        <br />
                        <button onClick={handleSubmit}>
                            {" "}
                            Test your button !
                        </button>
                    </form>
                    The button you are making is:
                    <br />
                    <button
                        style={{
                            color: `#${formState.textColor}`,
                            backgroundColor: `#${formState.backgroundColor}`,
                            textAlign: `${formState.align}`,
                            minWidth: "120px",
                        }}
                    >
                        {formState.text}
                    </button>
                </section>
            </main>
        </div>
    );
}

export default ButtonMaker;
