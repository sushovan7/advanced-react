import React from "react";

function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          // disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "dataDelivered", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
