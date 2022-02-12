import { queryAnswer } from "./apiQuery";
import "../App.css";
import { Link } from "react-router-dom";
import { TextForm } from "./TextForm";
import { BorderForm } from "./BorderForm";
import { FormatForm } from "./FormatForm";
import { IconForm } from "./IconForm";
import { useState, useReducer } from "react";
import * as allIcons from "@chakra-ui/icons";
import { TabContent } from "./TabContent";
import { QuestionIcon } from "./QuestionIcon";
import { generateRandom } from "./generateRandom";
import { apiPun } from "./apiPun";

function ButtonMaker() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
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
        height: "75",
        borderRadius: "30",
        icon: "EditIcon",
        iconWidth: "1",
    };

    function reducer(state, { type, payload }) {
        switch (type) {
            case "update":
                return { ...state, [payload.key]: payload.value };
            case "reset":
                return payload;
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

    const Icon = allIcons[formState.icon];

    return (
        <div>
            <header className="title">
                <h1>Button maker</h1>
            </header>

            <main className="wrapper">
                <section className="subtitle">
                    <h2 style={{ fontSize: "1.2em" }}>
                        Create a lovely button with this button generator! Wanna
                        have fun? Try and generate a random button with the help
                        of the bread pun API.
                    </h2>
                </section>
                <nav className="page-link">
                    <Link to="/"> Main page</Link>
                    <Link to="/tic_tac_toe"> Tic Tac Toe game</Link>
                </nav>
                <div>
                    <nav className="tab-nav">
                        <button
                            className={
                                activeTabIndex === 0
                                    ? "tab-active"
                                    : "tab-inactive"
                            }
                            onClick={() => setActiveTabIndex(0)}
                        >
                            Text
                        </button>
                        <button
                            className={
                                activeTabIndex === 1
                                    ? "tab-active"
                                    : "tab-inactive"
                            }
                            onClick={() => setActiveTabIndex(1)}
                        >
                            Border
                        </button>
                        <button
                            className={
                                activeTabIndex === 2
                                    ? "tab-active"
                                    : "tab-inactive"
                            }
                            onClick={() => setActiveTabIndex(2)}
                        >
                            Format
                        </button>
                        <button
                            className={
                                activeTabIndex === 3
                                    ? "tab-active"
                                    : "tab-inactive"
                            }
                            onClick={() => setActiveTabIndex(3)}
                        >
                            Icon
                        </button>
                    </nav>

                    <div className="tab-content">
                        <TabContent
                            tabIndex={0}
                            activeTabIndex={activeTabIndex}
                        >
                            <TextForm
                                formState={formState}
                                formDispatch={formDispatch}
                            />
                        </TabContent>
                        <TabContent
                            tabIndex={1}
                            activeTabIndex={activeTabIndex}
                        >
                            <BorderForm
                                formState={formState}
                                formDispatch={formDispatch}
                            />
                        </TabContent>
                        <TabContent
                            tabIndex={2}
                            activeTabIndex={activeTabIndex}
                        >
                            <FormatForm
                                formState={formState}
                                formDispatch={formDispatch}
                            />
                        </TabContent>
                        <TabContent
                            tabIndex={3}
                            activeTabIndex={activeTabIndex}
                        >
                            <IconForm
                                formState={formState}
                                formDispatch={formDispatch}
                            />
                        </TabContent>
                    </div>
                </div>

                <aside className="button-viewer">
                    <p> The button you are making is: </p>
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
                            margin: "64px auto",
                            display: "block",
                        }}
                    >
                        <Icon
                            style={{
                                paddingRight: "0.75em",
                                width: `${formState.iconWidth}em`,
                            }}
                        />
                        {formState.text}
                    </button>
                    <div className="button-line">
                        <button
                            onClick={() => {
                                formDispatch({
                                    type: "reset",
                                    payload: generateRandom(),
                                });
                                apiPun(formDispatch);
                            }}
                        >
                            Generate random
                        </button>
                        <div>
                            <button onClick={handleSubmit}>
                                Generate colors
                            </button>
                            <QuestionIcon />
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}

export default ButtonMaker;
