import React, { useState, useEffect } from 'react';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './LikeButton.css';

export default function LikeButton({ onPositionChange }) {
    const [position, setPosition] = useState({ bottom: '10px', right: '10px' });
    const [isAnimating, setIsAnimating] = useState(false);
    const [color, setColor] = useState('#2C2C2C');
    const [tooltipPosition, setTooltipPosition] = useState({ top: 'auto', bottom: '100%', left: '50%', transform: 'translateX(-50%)' });

    const changeCorner = () => {
        if (isAnimating) return; // Prevent changing position during animation

        setIsAnimating(true);
        setTimeout(() => {
            const corners = [
                { top: '10px', left: '10px' }, // Top-left
                { top: '10px', right: '10px' }, // Top-right
                { bottom: '10px', left: '10px' }, // Bottom-left
                { bottom: '10px', right: '10px' } // Bottom-right
            ];
            const randomCorner = corners[Math.floor(Math.random() * corners.length)];
            setPosition(randomCorner);
            setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`); // Generate random color
            if (onPositionChange) {
                onPositionChange(randomCorner);
            }
            setIsAnimating(false);
        }, 1000); // Match the animation duration
    };

    useEffect(() => {
        const adjustTooltipPosition = () => {
            const button = document.querySelector('.like-button');
            if (!button) return;

            const rect = button.getBoundingClientRect();
            const tooltip = button.querySelector('.tooltiptext');
            if (!tooltip) return;

            const tooltipRect = tooltip.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let newTooltipPosition = { top: 'auto', bottom: '100%', left: '50%', transform: 'translateX(-50%)' };

            if (rect.bottom + tooltipRect.height > viewportHeight) {
                newTooltipPosition = { top: 'auto', bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
            } else if (rect.top - tooltipRect.height < 0) {
                newTooltipPosition = { top: '100%', bottom: 'auto', left: '50%', transform: 'translateX(-50%)' };
            }

            if (rect.left + tooltipRect.width / 2 > viewportWidth) {
                newTooltipPosition.left = 'auto';
                newTooltipPosition.right = '0';
                newTooltipPosition.transform = 'translateX(-10%)';
            } else if (rect.right - tooltipRect.width / 2 < 0) {
                newTooltipPosition.left = '0';
                newTooltipPosition.right = 'auto';
                newTooltipPosition.transform = 'translateX(10%)';
            }

            setTooltipPosition(newTooltipPosition);
        };

        adjustTooltipPosition();
        window.addEventListener('resize', adjustTooltipPosition);
        return () => window.removeEventListener('resize', adjustTooltipPosition);
    }, [position]);

    return (
        <div
            className={`tooltip like-button ${isAnimating ? 'animating' : ''}`}
            onClick={changeCorner}
            style={{ position: 'fixed', ...position }}
        >
            <FontAwesomeIcon icon={faThumbsUp} color={color} size='2x' />
            <span className='tooltiptext' style={tooltipPosition}>Like button for Cathy</span>
        </div>
    );
}