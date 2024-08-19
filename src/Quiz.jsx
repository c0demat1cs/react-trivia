import { useState } from "react";
import { resultInitialState } from "./constants";

// Quiz component
const Quiz = ({ questions }) => {
  // useState hook helps maintain the state of the functional component
  const [currentQuestion, setCurrentQuesiton] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  ); // Store selected answers for each question
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  // Destructuring the question, choices, and correctAnswer from the questions array
  const { question, choices, correctAnswer } = questions[currentQuestion];

  // onAnswerClick function is called when the user clicks on an answer
  const onAnswerClick = (answer, index) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = index;
      return updatedAnswers;
    });
    setAnswer(answer === correctAnswer);
  };

  // onClickNext function is called when the user clicks on the Next button
  const onClickNext = () => {
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuesiton((prev) => prev + 1);
    } else {
      setCurrentQuesiton(0);
      setShowResult(true);
    }
  };

  // onClickPrevious function is called when the user clicks on the Previous button
  const onClickPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuesiton((prev) => prev - 1);
    }
  };

  // onTryAgain function is called when the user clicks on the Try Again button
  const onTryAGain = () => {
    setResult(resultInitialState);
    setSelectedAnswers(Array(questions.length).fill(null)); // Reset selected answers
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-questions">/{questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={
                  selectedAnswers[currentQuestion] === index
                    ? "selected-answer"
                    : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button onClick={onClickPrevious} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button
              onClick={onClickNext}
              disabled={selectedAnswers[currentQuestion] === null}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <button onClick={onTryAGain}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
