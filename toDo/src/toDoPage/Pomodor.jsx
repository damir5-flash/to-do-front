import { useState, useEffect } from "react";
import "./Pomodor.css";

export default function Pomodor() {
  const [time, setTime] = useState(25 * 60); // 25 минут
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const toggleTimer = () => {
    if (time === 0) {
      setTime(25 * 60); // Сбросить таймер
    }
    setIsRunning(!isRunning);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="pomodor-container">
      <h1 className="title">FOCUS TIME</h1>
      <div className="timer">
        <div className="clock">
          <span className="time">{formatTime(time)}</span>
        </div>
      </div>
      <button className="start-button" onClick={toggleTimer}>
        {isRunning ? "STOP" : "START"}
      </button>
    </div>
  );
}
