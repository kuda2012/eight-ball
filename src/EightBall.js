import React, { useState } from "react";
import "./EightBall.css";
import answers from "./EightBallAnswers";
const EightBall = () => {
  const getRandomAnswer = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    return answers[randomIdx];
  };
  const updateCountAndColor = () => {
    setGuessCount(guessCount + 1);
    changeAnswer(getRandomAnswer());
  };
  const restart = () => {
    setGuessCount(0);
  };
  const [ballAnswer, changeAnswer] = useState(getRandomAnswer());
  const [guessCount, setGuessCount] = useState(0);
  let isQuestion = guessCount === 0;
  let eightBallText = isQuestion ? "Think of a question" : ballAnswer.msg;

  return (
    <>
      <div
        className="EightBall"
        onClick={updateCountAndColor}
        style={{ backgroundColor: isQuestion ? "black" : ballAnswer.color }}
      >
        <div className="EightBall-question">{eightBallText}</div>
      </div>
      <button onClick={restart} className="EightBall-reset">
        Reset Game
      </button>
    </>
  );
};

export default EightBall;
