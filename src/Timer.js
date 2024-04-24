import React, { useEffect } from "react";

function Timer({ remainingSeconds, dispatch }) {
  const mins = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  useEffect(() => {
    const interval = setInterval(() => dispatch({ type: "timer" }), 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <footer className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </footer>
  );
}

export default Timer;
