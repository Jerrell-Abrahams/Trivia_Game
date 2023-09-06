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

  function handleReset() {
    setShowResults(false);
    setMenu(true);
    setData([]);
    setQuestionNum(0);
    setUserCorrectAnswers(0);
    // setNoData(false);
  }

  function updateState() {
    setMenu(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetch(
        `https://opentdb.com/api.php?amount=${numOfQuestion}&category=${category}&difficulty=${difficulty}&type=${type}&encode=url3986`
      )
        .then((response) => {
          return response.json();
        })
        .then((retrievedData) => {
          // if (retrievedData.response_code === 1) {
          //   console.log("got here");
          //   setNoData(true);
          //   handleReset();
          //   return;
          // }
          setData(retrievedData.results);
        });

      updateState();
    } catch (err) {
      alert(err.message);
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
