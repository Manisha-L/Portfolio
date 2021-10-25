import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="skills" className="Skills-container">
      <h1 className="skills-title">Skills</h1>
      <h3 className="skills-description">Some of my coding skills</h3>
      <ul data-aos="zoom-in" className="Skills-list">
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "/images/HTML.png"}
            className="Skills-image"
            alt="HTML"
          ></img>
          <br />
          <div className="SkillsImage-name">HTML5</div>
        </li>
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "/images/CSS.png"}
            className="Skills-image"
            alt="HTML"
          ></img>
          <br />
          <div className="SkillsImage-name">CSS3</div>
        </li>

        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "/images/SASS.svg"}
            className="Skills-image"
            alt="SASS"
          ></img>
          <br />
          <div className="SkillsImage-name">SASS</div>
        </li>
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "/images/javascript.png"}
            className="Skills-image"
            alt="JS"
          />{" "}
          <br />
          <div className="SkillsImage-name"> JavaScript</div>
        </li>

        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "/images/TypeScript.png"}
            className="Skills-image"
            alt="TypeScript"
          ></img>{" "}
          <br />
          <div className="SkillsImage-name">TypeScript</div>
        </li>
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "/images/React.png"}
            className="Skills-image"
            alt="REACT"
          ></img>
          <br />
          <div className="SkillsImage-name">React and</div>
          <div className="SkillsImage-name">React Native</div>
        </li>
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "/images/Redux.png"}
            className="Skills-image"
            alt="REDUX"
          ></img>
          <br />
          <div className="SkillsImage-name">Redux</div>
        </li>
      </ul>

      <div className="tools-wrapper">
        <h2 className="tools-title">Tools</h2>
        <ul data-aos="zoom-in" className="tools-list">
          <li className="tools-listItem">
            <img
              src={process.env.PUBLIC_URL + "/images/github.png"}
              className="tool-image"
              alt="Github"
            ></img>
            <div className="toolImage-name">Github</div>
          </li>
          <li className="tools-listItem">
            <img
              src={process.env.PUBLIC_URL + "/images/Visual_Studio_Code.svg"}
              className="tool-image"
              alt="Visual Studio"
            ></img>
            <div className="toolImage-name">Visual Studio</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Skills;
