import React, { useEffect, useReducer } from "react";
import Header from "../src/Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Ready from "./Ready";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Finished from "./Finished";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  points: 0,
  answer: null,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "end":
      return {
        ...state,
        status: "finished",
      };

    case "dataDelivered":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestions":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        points: 0,
        answer: null,
        highScore: 0,
      };
    default:
      throw new Error("action unKnown");
  }
}

function App() {
  const [{ questions, status, index, answer, points, highScore }, dispatch] =
    useReducer(reducer, initialState);

  const questionsLength = questions.length;
  const totalPoints = questions.reduce((acc, curr) => acc + curr.points, 0);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Ready questionsLength={questionsLength} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              points={points}
              index={index}
              questionsLength={questionsLength}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Questions
              questions={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              questionsLength={questionsLength}
            />
          </>
        )}
        {status === "finished" && (
          <Finished
            points={points}
            totalPoints={totalPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
