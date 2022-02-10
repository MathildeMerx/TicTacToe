import { queryAnswer } from "./apiQuery";
import "../App.css";
import { Link } from "react-router-dom";
import { TextForm } from "./TextForm";
import { BorderForm } from "./BorderForm";
import { FormatForm } from "./FormatForm";
import { useReducer } from "react";

function ButtonMaker() {
    const initialForm = {
        text: "Customize me!",
        textColor: "9dd4c5",
        backgroundColor: "151438",
        align: "center",
        fontSize: "100",
        borderStyle: "solid",
        borderColor: "3f3ba5",
        borderWidth: "3",
        width: "150",
        height: "50",
        borderRadius: "30",
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
        queryAnswer(
            [
                formState.textColor,
                formState.backgroundColor,
                formState.borderColor,
            ],
            formDispatch
        );
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
                    <TextForm
                        formState={formState}
                        formDispatch={formDispatch}
                    />
                    <br />
                    <BorderForm
                        formState={formState}
                        formDispatch={formDispatch}
                    />
                    <br />
                    <FormatForm
                        formState={formState}
                        formDispatch={formDispatch}
                    />
                    The button you are making is:
                    <br />
                    <button
                        style={{
                            color: `#${formState.textColor}`,
                            backgroundColor: `#${formState.backgroundColor}`,
                            textAlign: `${formState.align}`,
                            fontSize: `${formState.fontSize}%`,
                            borderStyle: `${formState.borderStyle}`,
                            borderWidth: `${formState.borderWidth}px`,
                            borderColor: `#${formState.borderColor}`,
                            width: `${formState.width}px`,
                            height: `${formState.height}px`,
                            borderRadius: `${formState.borderRadius}px`,
                        }}
                    >
                        {formState.text}
                    </button>
                    <br />
                    <button onClick={handleSubmit}> Test your button !</button>
                </section>
            </main>
        </div>
    );
}

export default ButtonMaker;
