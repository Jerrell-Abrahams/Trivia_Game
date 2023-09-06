import { useState, useEffect } from "react";

export default function QuestionMenu({
  data,
  questionNum,
  setQuestionNum,
  updateQuestionList,
  numOfQuestion,
  setShowResults,
  setUserCorrectAnswers,
  setNoData,
  handleReset,
}) {
  const [answerList, setAnswerList] = useState([]);
  const [correct_answer, setCorrectAnswer] = useState(null);
  const [noSelectedAnswer, setSelectedAnswer] = useState(false);

  function fisherYatesRandomize(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  useEffect(() => {
    setAnswerList(
      fisherYatesRandomize([
        ...data[questionNum].incorrect_answers,
        data[questionNum].correct_answer,
      ])
    );
  }, [data, questionNum]);

  function handleNext() {
    if (!correct_answer) {
      setSelectedAnswer((state) => !state);
      return;
    }
    if (Number(questionNum + 1) >= Number(numOfQuestion)) {
      setShowResults(true);
      return;
    }
    setCorrectAnswer(null);
    setQuestionNum((state) => state + 1);
  }

  function handleChoosenAnswer(e) {
    const userChoice = e.target.value;
    console.log(userChoice, data[questionNum].correct_answer);

    if (userChoice === decodeURIComponent(data[questionNum].correct_answer)) {
      setUserCorrectAnswers((prevState) => prevState + 1);
    }

    const currentQuestionAnswer = data[questionNum].correct_answer;

    setCorrectAnswer(currentQuestionAnswer);
  }

  return (
    <div className="game_container">
      <button className="close_button" onClick={handleReset}>
        ❌
      </button>
      <div>
        <h3 className="question">
          {decodeURIComponent(data[questionNum].question)}
        </h3>
        {answerList.map((answer) => (
          <button
            className={`question_button ${
              correct_answer === answer ? "correct_answer cancelHover" : ""
            }`}
            onClick={handleChoosenAnswer}
            key={answer}
            value={decodeURIComponent(answer)}
          >
            {decodeURIComponent(answer)}
          </button>
        ))}
        <div className="next_button_container">
          <button
            className={`next_button ${noSelectedAnswer ? "shake" : ""}`}
            title={`${
              questionNum + 1 === numOfQuestion
                ? "View Results"
                : "Next Question"
            }`}
            onClick={() => handleNext()}
          >
            {questionNum + 1 === numOfQuestion ? "📜" : "👉"}
          </button>
        </div>
        <p className="question_hub">
          Question: {questionNum + 1} of {numOfQuestion}
        </p>
      </div>
    </div>
  );
}
