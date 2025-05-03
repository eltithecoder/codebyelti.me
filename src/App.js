// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import Timer from './components/Timer';
import LikeButton from './components/LikeButton';
// import Spacer from './components/Spacer';

function App() {
    const [grapePosition, setGrapePosition] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setGrapePosition({
                top: 0,
                left: Math.random() * window.innerWidth
            });
            setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (grapePosition && isVisible) {
            const interval = setInterval(() => {
                setGrapePosition((prev) => {
                    if (prev.top >= window.innerHeight) {
                        clearInterval(interval);
                        setIsVisible(false);
                        return prev;
                    }
                    return {
                        ...prev,
                        top: prev.top + 5
                    };
                });
            }, 50);

            return () => clearInterval(interval);
        }
    }, [grapePosition, isVisible]);

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
            {isVisible && grapePosition && (
                <div
                    className='grape'
                    style={{
                        position: 'absolute',
                        top: grapePosition.top,
                        left: grapePosition.left,
                        fontSize: '2rem'
                    }}
                >
                    🍇
                </div>
            )}
        </div>
    );
}

export default App;