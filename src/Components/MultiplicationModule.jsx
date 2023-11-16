import { useState, useEffect } from "react";
import StatusBar from "./StatusBar";

const MultiplicationModule = () => {
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
    const newNum1 = Math.floor(Math.random() * 25) + 1; // Random number between 1 and 25 for multiplication tables
    const newNum2 = Math.floor(Math.random() * 25) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    const answer = num1 * num2;
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
      <h1>Multiplication Module</h1>
      <p>
        Solve the multiplication problem: {num1} × {num2} =
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

export default MultiplicationModule;
