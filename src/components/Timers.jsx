import React, { useState, useEffect } from "react";

const Timers = () => {
  // Initialize state with local storage values
  const [isActive, setIsActive] = useState(() => {
    const savedIsActive = localStorage.getItem("timerActive");
    return savedIsActive ? JSON.parse(savedIsActive) : false;
  });
  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("timerTime");
    return savedTime ? parseInt(savedTime, 10) : 0;
  });

  // Update local storage when time or isActive changes
  useEffect(() => {
    localStorage.setItem("timerTime", time);
  }, [time]);

  useEffect(() => {
    localStorage.setItem("timerActive", JSON.stringify(isActive));
  }, [isActive]);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleClear = () => {
    setIsActive(false);
    setTime(0);
    localStorage.removeItem("timerTime");
    localStorage.removeItem("timerActive");
  };

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600) % 24}`.slice(-2);
    const getDays = Math.floor(seconds / 86400);

    return `${getDays} Days🏡 ${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  // Calculate progress percentage (0-100)
  const calculateProgress = () => {
    // Assuming a 24-hour period for a full progress circle
    const totalSecondsInDay = 24 * 60 * 60;
    return ((time % totalSecondsInDay) / totalSecondsInDay) * 100;
  };

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="radial-progress-container">
          <div
            className="radial-progress"
            style={{
              "--value": calculateProgress(),
              "--size": "12rem",
              "--thickness": "2rem",
            }}
            role="progressbar"
          >
            {Math.round(calculateProgress())}%
          </div>
          <div className="radial-progress-stroke"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <h1 className="text-2xl font-bold mt-5">Count Your Progress.🌳</h1>
          <div className="text-xm font-bold">{formatTime(time)}</div>
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <button className="btn btn-primary px-10" onClick={handleStart}>
          Start
        </button>
        <button className="btn btn-warning px-5" onClick={handleStop}>
          Stop
        </button>
        <button className="btn btn-error px-10" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Timers;
