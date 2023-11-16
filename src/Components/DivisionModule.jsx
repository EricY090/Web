import { useState, useEffect } from "react";
import StatusBar from "./StatusBar";

const DivisionModule = () => {
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
    let newNum1 = Math.floor(Math.random() * 625); // Generate random number between 0 and 625 for division
    let newNum2 = Math.floor(Math.random() * 25); // Generate random divisor between 0 and 25

    // Ensure num1 is divisible by num2 without a remainder
    while (newNum1 % newNum2 !== 0) {
      newNum1 = Math.floor(Math.random() * 625);
      newNum2 = Math.floor(Math.random() * 25);
    }

    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    const answer = num1 / num2;
    const userEnteredAnswer = parseFloat(userAnswer);

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
      <h1>Division Module</h1>
      <p>
        Solve the division problem: {num1} ÷ {num2} =
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

export default DivisionModule;
