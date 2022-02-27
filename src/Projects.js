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
        experience in front-end.
      </p>
      <div className="projects-wrapper">
        <div data-aos="fade-left" className="amazon">
          <img
            src={process.env.PUBLIC_URL + "/images/Amazon-v2.png"}
            className="amazon-image"
            alt="AmazonImage"
          />
          <h1 className="amazon-title">Amazon-v2</h1>
          <br />
          <h3 className="about-project">
            Amazon-v2 is an Amazon Shopping Site's clone version developed using
            Next.js which provides functionality from sign up till payment
            checkout.
          </h3>
          <br />

          <p className="amazon-stack">
            NEXT.JS, NEXTAUTH.JS, REDUX, STRIPE, WEBHOOKS, FIREBASE, TAILWIND
            CSS
          </p>

          <div className="amazon-button-container">
            <a href="https://amazon-v2.isha-dev.com/" target="_blank">
              <button className="project-buttons">Live website</button>
            </a>
            <a href="https://github.com/Manisha-L/Amazon-v2" target="_blank">
              <button className="project-buttons">Github code</button>
            </a>
          </div>
        </div>

        <div data-aos="fade-right" className="budget">
          <img
            src={process.env.PUBLIC_URL + "/images/BudgetTrackerImage.png"}
            className="budgetTracker-image"
            alt="BudgetTrackerImage"
          />
          <h1 className="budget-title">Budget Tracker</h1>
          <br />
          <h3 className="about-project">
            Budget Tracker is a responsive web application for money management
            which helps to keep track of income and expense transactions which
            features nice visualizations using Chart.js library
          </h3>
          <br />

          <p className="stack">TYPESCRIPT, REACT</p>

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
            src={process.env.PUBLIC_URL + "/images/MusicPlayerImage.png"}
            className="musicPlayer-image"
            alt="MusicPlayerImage"
          />
          <h1 className="music-title">Music Player</h1>
          <br />
          <h3 className="about-project">
            Music Player is a mobile application which runs on both Android and
            iOS devices to play music. It allows user to play/pause/play
            next/play previous song using expo-av library
          </h3>
          <br />

          <p className="stack">JAVASCRIPT, REACT-NATIVE</p>
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
