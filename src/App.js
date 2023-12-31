import "./index.css";
import Heading from "./Heading.js";
import TriviaMenu from "./TriviaMenu";
import QuestionMenu from "./QuestionMenu";
import Results from "./Results";
import About from "./About";
import { useEffect, useState } from "react";

function App() {
  const [numOfQuestion, setNumOfQuestion] = useState(5);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("multiple");
  const [showMenu, setMenu] = useState(true);
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [userCorrectAnswers, setUserCorrectAnswers] = useState(0);
  const [noData, setNoData] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleReset() {
    setShowResults(false);
    setMenu(true);
    setData([]);
    setQuestionNum(0);
    setUserCorrectAnswers(0);
    // setNoData(false);
    setError(false);
  }

  function updateState() {
    setMenu(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      await fetch(
        `https://opentdb.com/api.php?amount=${numOfQuestion}&category=${category}&difficulty=${difficulty}&type=${type}&encode=url3986`
      )
        .then((response) => {
          return response.json();
        })
        .then((retrievedData) => {
          console.log(retrievedData);
          if (retrievedData.response_code === 1) {
            throw new Error("No result from API");
          }
          setData(retrievedData.results);
          setIsLoading(false);
        });
      updateState();
    } catch (err) {
      setError(true);
      setIsLoading(false);
      return;
    }
  }

  return (
    <div>
      <Heading />

      {showMenu ? (
        <TriviaMenu
          numOfQuestion={numOfQuestion}
          category={category}
          difficulty={difficulty}
          type={type}
          setNumOfQuestion={setNumOfQuestion}
          setCategory={setCategory}
          setDifficulty={setDifficulty}
          setType={setType}
          onHandleSubmit={handleSubmit}
          noData={noData}
          error={error}
          isLoading={isLoading}
          setError={setError}
        />
      ) : !showResults ? (
        <QuestionMenu
          data={data}
          questionNum={questionNum}
          setQuestionNum={setQuestionNum}
          numOfQuestion={numOfQuestion}
          setShowResults={setShowResults}
          setUserCorrectAnswers={setUserCorrectAnswers}
          handleReset={handleReset}
          setNoData={setNoData}
        />
      ) : (
        <Results
          numOfQuestion={numOfQuestion}
          userCorrectAnswer={userCorrectAnswers}
          handleReset={handleReset}
        />
      )}
      <About />
    </div>
  );
}

export default App;
