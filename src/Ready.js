import React from "react";

function Ready({ questionsLength, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{questionsLength} questions to test your react mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let's Start
      </button>
    </div>
  );
}

export default Ready;
