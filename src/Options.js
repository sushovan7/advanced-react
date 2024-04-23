import React from "react";

function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, i) => (
        <button
          onClick={() => dispatch({ type: "dataDelivered", payload: i })}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          disabled={hasAnswered}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
