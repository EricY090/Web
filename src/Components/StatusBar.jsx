/* eslint-disable react/prop-types */
const StatusBar = ({ correctAnswers, totalQuestions }) => (
  <div>
    <p>
      Correct: {correctAnswers} / {totalQuestions}
    </p>
  </div>
);

export default StatusBar;
