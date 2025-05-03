import React from 'react';
import './Timer.css';

export default function Timer() {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function calculateTimeLeft() {
        const myDate = (new Date('2025-05-06T14:00:00Z')).getTime();
        const currentDate = Date.now();

        const timeLeft = myDate - currentDate;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        // <div className="timer-container">
            <div className='timer'>
                <TimerBox number={timeLeft.days} unit={"Days"} />
                <Colon />
                <TimerBox number={timeLeft.hours} unit={"Hours"} />
                <Colon />
                <TimerBox number={timeLeft.minutes} unit={"Minutes"} />
                <Colon />
                <TimerBox number={timeLeft.seconds} unit={"Seconds"} />
            </div>
        // </div>
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