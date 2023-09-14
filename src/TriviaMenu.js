export default function TriviaMenu({
  numOfQuestion,
  type,
  setDifficulty,
  setNumOfQuestion,
  difficulty,
  category,
  setCategory,
  setType,
  onHandleSubmit,
  noData,
  error,
  isLoading,
  setError,
}) {
  return (
    <section className="game_section">
      <div className="game_container">
        <form onSubmit={onHandleSubmit}>
          <div className="select_container">
            <label>Number of Questions:</label>
            <select
              value={numOfQuestion}
              onChange={(e) => {
                setNumOfQuestion(Number(e.target.value));
                setError(false);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>

            <label>Select Category:</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(Number(e.target.value));
                setError(false);
              }}
            >
              <option value={0}>Any Category</option>
              <option value={9}>General Knowledge</option>
              <option value={10}>Entertainment: Books</option>
              <option value={11}>Entertainment: Film</option>
              <option value={12}>Entertainment: Music</option>
              <option value={13}>Entertainment: Musicals and Theaters</option>
              <option value={14}>Entertainment: Television</option>
              <option value={15}>Entertainment: Video Games</option>
              <option value={16}>Entertainment: Board Games</option>
              <option value={17}>Science and Nature</option>
              <option value={18}>Science: Computers</option>
              <option value={19}>Science: Mathematics</option>
              <option value={20}>Mythology</option>
              <option value={21}>Sports</option>
              <option value={22}>Geography</option>
              <option value={23}>History</option>
              <option value={24}>Politics</option>
              <option value={25}>Art</option>
              <option value={26}>Celebrities</option>
              <option value={27}>Animals</option>
              <option value={28}>Vehicles</option>
              <option value={29}>Entertainment: Comics</option>
              <option value={30}>Science: Gadgets</option>
              <option value={31}>Entertainment: Janpanese Anime & Manga</option>
              <option value={32}>Entertainment: Cartoons and Animations</option>
            </select>

            <label>Select Difficulty:</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value={0}>Any Difficulty</option>
              <option value={"easy"}>Easy</option>
              <option value={"medium"}>Medium</option>
              <option value={"hard"}>Hard</option>
            </select>

            <label>Select Type:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value={0}>Any Type</option>
              <option value={"multiple"}>Multiple Choice</option>
              <option value={"boolean"}>True/False</option>
            </select>
            {error ? (
              <p className="no_questions_text">No questions were available!</p>
            ) : null}
            <div className="start_button_container">
              <button className="button">
                {isLoading ? "Loading..." : "Start Trivia!"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
