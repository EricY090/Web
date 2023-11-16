/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import StatusBar from "./StatusBar";

const SubtractionModule = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    generateProblem();
  }, []);

  const generateProblem = () => {
    const newNum1 = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
    const newNum2 = Math.floor(Math.random() * 100);
    // Ensure num1 is greater than or equal to num2 to avoid negative results
    setNum1(newNum1);
    setNum2(Math.min(newNum1, newNum2));
    setUserAnswer("");
  };

  const checkAnswer = () => {
    const answer = num1 - num2;
    const userEnteredAnswer = parseInt(userAnswer, 10);

    if (userEnteredAnswer === answer) {
      setIsCorrect(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIsCorrect(false);
    }

    setTotalQuestions(totalQuestions + 1);
    generateProblem();
  };

  return (
    <div>
      <h1>Subtraction Module</h1>
      <p>
        Solve the subtraction problem: {num1} - {num2} =
      </p>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Check Answer</button>
      {isCorrect !== null && (
        <p>
          {isCorrect ? "Correct!" : "Wrong!"} Total correct: {correctAnswers}/
          {totalQuestions}
        </p>
      )}
      <StatusBar
        correctAnswers={correctAnswers}
        totalQuestions={totalQuestions}
      />
    </div>
  );
};

export default SubtractionModule;
