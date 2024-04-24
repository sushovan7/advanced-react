import React from "react";
import Options from "./Options";

function Questions({ questions, answer, dispatch }) {
  if (!questions) {
    console.error("Question data is not provided");
    return null; // or some fallback UI
  }
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Questions;
