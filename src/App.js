// src/App.js
import React from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import Timer from './components/Timer';
import LikeButton from './components/LikeButton';
// import Spacer from './components/Spacer';

function App() {
    const handlePositionChange = (newPosition) => {
        console.log('Button moved to:', newPosition);
    };

    return (
        <div className='app'>
            {/* <NavBar /> */}
            {/* <Spacer height={"200px"}/> */}
            <Timer />
            {/* <h1 className='caption'>Till you see Elti</h1> */}
            <LikeButton onPositionChange={handlePositionChange} />
        </div>
    );
}

export default App;