import logo from "../carrot.svg";
import React from "react";
import "./Header.css";

export function Header() {
    return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>Hi, my name is Anh Nguyen</h1>
        <p>
            I am a Computer Science student at the University of North Carolina at Charlotte.
        </p>
    </header>;
}