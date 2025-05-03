import React from 'react';
import './Timer.css';
import Confetti from 'react-confetti';

export default function Timer() {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
    const [showConfetti, setShowConfetti] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);
            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                setShowConfetti(true);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function calculateTimeLeft() {
        const myDate = new Date(Date.UTC(2025, 4, 6, 12, 0, 0)); // Target date in UTC
        const currentDate = new Date();

        const timeLeft = Math.max(0, myDate.getTime() - currentDate.getTime()); // Ensure timeLeft is not negative
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <div className="timer-container">
            {showConfetti && <Confetti />}
            <div className='timer'>
                <TimerBox number={timeLeft.days} unit={"Days"} />
                <Colon />
                <TimerBox number={timeLeft.hours} unit={"Hours"} />
                <Colon />
                <TimerBox number={timeLeft.minutes} unit={"Minutes"} />
                <Colon />
                <TimerBox number={timeLeft.seconds} unit={"Seconds"} />
            </div>
        </div>
    );
}

function Colon() {
    return <div className='colon'>:</div>;
}

function TimerBox({ number, unit }) {
    return (
        <div className='timer-box'>
            <div className='number'>{number > 9 ? number : "0"+number}</div>
            <div className='unit'>{unit}</div>
        </div>
    );
}