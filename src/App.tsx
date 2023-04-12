import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
    const requestOptions = {
        method: "GET",
    };

    fetch("http://localhost:8000/users", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a
                        className="App-link"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer">
                        React
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer">
                        React Redux
                    </a>
                </span>
            </header>
        </div>
    );
}

export default App;
