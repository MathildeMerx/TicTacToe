import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import TicTacToe from "./ticTacToe/TicTacToe";
import ButtonMaker from "./buttonMaker/ButtonMaker";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/tic_tac_toe" element={<TicTacToe />} />
            <Route path="/button_maker" element={<ButtonMaker />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
