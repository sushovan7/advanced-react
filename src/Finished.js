import React from "react";

function Finished({ points, totalPoints }) {
  const percentage = (points / totalPoints) * 100;
  return (
    <p>
      You scored <strong>{points}</strong> out of {totalPoints} and you got
      {Math.ceil(percentage)}
    </p>
  );
}

export default Finished;
