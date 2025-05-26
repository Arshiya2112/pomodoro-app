import React, { useEffect, useRef, useState } from "react";
import "./PomodoroTimer.css";

const PomodoroTimer = () => {
  const FOCUS_TIME = 25 * 60; // 25 minutes
  const BREAK_TIME = 5 * 60;  // 5 minutes

  const [isRunning, setIsRunning] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);

  const timerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timerRef.current);
            audioRef.current.play();

            // Switch mode after 1 second pause
            const nextFocus = !isFocus;
            setIsFocus(nextFocus);
            setTimeLeft(nextFocus?FOCUS_TIME:BREAK_TIME);
            setTimeout(()=>{
              setIsRunning(true);
            })

            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleStartPause = () => setIsRunning((prev) => !prev);

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setIsFocus(true);
    setTimeLeft(FOCUS_TIME);
  };

  const percentage = (( (isFocus ? FOCUS_TIME : BREAK_TIME) - timeLeft) / (isFocus ? FOCUS_TIME : BREAK_TIME)) * 100;

  return (
    <div className="pomodoro-card">
      <h2>{isFocus ? "Focus Time" : "Break Time"}</h2>

      <div className="circle">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r="65"></circle>
          <circle
            cx="75"
            cy="75"
            r="65"
            style={{
              strokeDasharray: 408,
              strokeDashoffset: 408 - (408 * percentage) / 100,
              transition:"stroke-dashoffset 1s linear",
            }}
          ></circle>
        </svg>
        <div className="time">
          {isFocus ? formatTime(timeLeft) : `(${formatTime(timeLeft)})`}
        </div>
      </div>

      <div className="timer-controls">
        <button onClick={handleStartPause}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <audio ref={audioRef} src="/sounds/rain.mp3" type="audio/mpeg" preload="auto" />
    </div>
  );
};

export default PomodoroTimer;
