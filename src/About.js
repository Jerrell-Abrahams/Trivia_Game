export default function About() {
  return (
    <div className="about_section">
      <div className="about_container">
        <h1>About</h1>
        <p>
          A simple React application that retrieves questions and answers from
          Trivia API.
        </p>
        <p>Web App by: Jerrell Abrahams</p>
        <div className="about_buttons">
          <a href="mailto:jerrellabrahams50@gmail.com">
            <button className="contact me_button">Contact me</button>
          </a>
          <a href="jerrellabrahams.tech">
            <button className="website_button">View my Website</button>
          </a>
        </div>
      </div>
    </div>
  );
}
