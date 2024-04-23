import React from "react";

function Progress({ index, questionsLength, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={questionsLength} value={index + Number(answer !== null)} />
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
