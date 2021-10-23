import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <p className="projects-description">
        Personal projects I have worked on to improve my skills and gain
        experience in front-end
      </p>
      <div className="projects-wrapper">
        <div data-aos="fade-right" className="budget">
          <img
            src={process.env.PUBLIC_URL + "./images/BudgetTrackerImage.png"}
            className="budgetTracker-image"
            alt="BudgetTrackerImage"
          />
          <h1 className="budget-title">Budget Tracker</h1>
          <br />
          <h3 className="about-project">
            This project was initially developed using javascript with React.
            Upon learning TypeScript, upgraded this project to TypeScript.
          </h3>
          <br />

          <p className="stack">TYPESCRIPT REACT</p>

          <div className="budget-button-container">
            <a
              href="https://manisha-l.github.io/Budget-Tracker/"
              target="_blank"
            >
              <button className="project-buttons">Live website</button>
            </a>
            <a
              href="https://github.com/Manisha-L/Budget-Tracker"
              target="_blank"
            >
              <button className="project-buttons">Github code</button>
            </a>
          </div>
        </div>

        <div data-aos="fade-left" className="music">
          <img
            src={process.env.PUBLIC_URL + "./images/MusicPlayerImage.png"}
            className="musicPlayer-image"
            alt="MusicPlayerImage"
          />
          <h1 className="music-title">Music Player</h1>
          <br />
          <h3 className="about-project">
            This project is developed using javascript with React-Native
            framework. After learning web development, learnt React-Native as it
            used to build mobile apps on both Android and ios.
          </h3>
          <br />

          <p className="stack">JAVASCRIPT REACT-NATIVE</p>
          <div className="music-button-container">
            <a
              href="https://github.com/Manisha-L/Music-Player/blob/master/README.md"
              target="_blank"
            >
              <button className="project-buttons">
                Live website (Instructions)
              </button>
            </a>
            <a href="https://github.com/Manisha-L/Music-Player" target="_blank">
              <button className="project-buttons">Github code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
