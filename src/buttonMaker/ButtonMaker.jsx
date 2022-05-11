import "../App.css";
import { useReducer } from "react";
import { initialForm } from "./initialForm";
import { reducer } from "./reducer";
import { Header } from "./Header";
import { SubTitle } from "./SubTitle";
import { Navigation } from "./Navigation";
import { ButtonViewer } from "./ButtonViewer";
import { Tabs } from "./Tabs/Tabs";

function ButtonMaker() {
    // State of the button
    const [formState, formDispatch] = useReducer(reducer, initialForm);

    return (
        <div>
            <Header />

            <main className="wrapper">
                <SubTitle />

                <Navigation />
                <Tabs formState={formState} formDispatch={formDispatch} />
                <ButtonViewer
                    formState={formState}
                    formDispatch={formDispatch}
                />
            </main>
        </div>
    );
}

export default ButtonMaker;
