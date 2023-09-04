// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function Results({
  userCorrectAnswer,
  numOfQuestion,
  handleReset,
}) {
  const percentage = Math.round((userCorrectAnswer / numOfQuestion) * 100);
  //   const { width, height } = useWindowSize();
  return (
    <div className="game_container">
      {percentage >= 60 ? (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          recycle={false}
        />
      ) : null}
      <div>
        <h1 className="results_heading">
          🎊 You got {userCorrectAnswer} out of {numOfQuestion} 🎊
        </h1>
        <p className={`percentage ${percentage >= 60 ? "green" : "orange"}`}>
          {percentage}%
        </p>

        <div className="next_button_container">
          <button className="play_again_button" onClick={handleReset}>
            Play Again🔁
          </button>
        </div>
      </div>
    </div>
  );
}
