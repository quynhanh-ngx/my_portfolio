import React from 'react';
import './App.css';
import {Footer} from "./Footer";
import {Header} from "./Header";
import {Main} from "./Main";

function App() {
    return (
    <div className="App">
        {Header()}
        {Main()}
        {Footer()}
        <div className="stars "></div>
    </div>
    );
}

export default App;
