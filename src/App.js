// src/App.js
import React from 'react';
import './App.css';
import Blog from './components/Blog';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Blog</h1>
            </header>
            <Blog />
        </div>
    );
}

export default App;