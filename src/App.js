import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/click-counter/click-counter.component';
import HoverCounter from './components/hover-counter/hover-counter.component';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <main className="app-main">
                <ClickCounter></ClickCounter>
                <HoverCounter></HoverCounter>
            </main>
        </div>
    );
}

export default App;
