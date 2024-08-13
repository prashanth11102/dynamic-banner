import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = ({ description, link, timer, onClose, isVisible }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (isVisible) {
      const countdown = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(countdown);
            onClose();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, onClose, isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="banner">
      <div className="banner-content">
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        )}
        <p className="timer">Time left: {timeLeft}s</p>
      </div>
      <button className="close-btn" onClick={onClose}>
✕
      </button>
    </div>
  );
};

export default Banner;
