import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "",
    backdrop: "false",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="about_section">
      <div className="about_container">
        <Modal
          isOpen={isOpen}
          style={customStyles}
          onRequestClose={() => setIsOpen((open) => !open)}
        >
          <div className="modal_container">
            <div className="content_container">
              <h1>About Project</h1>
              <p>
                A React Project with use of basic react features such as
                useState and useEffect. Time taken to built was 2 days. All
                Questions are retrieved from the Trivia API Database
              </p>

              <ul>
                <li class="headings">My struggles with the project:</li>
                <ol>
                  <li>Navigating through the JSON response</li>
                  <li>
                    Randomizing the list of incorrect answers with correct
                    answer.
                  </li>
                  <li>
                    useState not updating fast enough, resulting in empty data
                    state
                  </li>
                </ol>
                <li class="headings">
                  What I learned and improved with this project:
                </li>
                <ol>
                  <li>Practiced some React features and component spliting</li>
                  <li>Working with API in React</li>
                  <li>
                    Unexpected issues with react such as slow state update
                  </li>
                  <li>Working with JSX</li>
                </ol>
              </ul>
              <button
                className="modalCloseButton"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                ❌
              </button>
            </div>
          </div>
        </Modal>
        <h1>About</h1>
        <p>
          A simple React application that retrieves questions and answers from
          the Trivia API.
          <button
            className="about_project"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            About project
          </button>
        </p>
        <p>Web App by: Jerrell Abrahams</p>
        <div className="about_buttons">
          <a href="mailto:jerrellabrahams50@gmail.com">
            <button className="contact me_button">Contact me</button>
          </a>
          <a href="https://www.jerrellabrahams.tech">
            <button className="website_button">View my Website</button>
          </a>
        </div>
      </div>
    </div>
  );
}
