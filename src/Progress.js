import React from "react";

function Progress({ index, questionsLength, points, totalPoints }) {
  return (
    <header className="progress">
      <Progress max={questionsLength} value={index} />
      <p>
        Questions {index} / {questionsLength}
      </p>
      <p>
        {points} / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
