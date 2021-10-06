import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="Skills-container">
      <h1 className="skills-title">{"<Skills />"}</h1>
      <h3 className="heading">Some of my coding skills</h3>
      <ul className="Skills-list">
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "./images/HTML.svg"}
            className="Skills-image"
            alt="HTML"
          ></img>
          <br />
          <div className="SkillsImage-name">HTML5</div>
        </li>
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "./images/CSS.svg"}
            className="Skills-image"
            alt="HTML"
          ></img>
          <br />
          <div className="SkillsImage-name">CSS3</div>
        </li>

        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "./images/SASS.svg"}
            className="Skills-image"
            alt="SASS"
          ></img>
          <br />
          <div className="SkillsImage-name">SASS</div>
        </li>
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "./images/javascript.svg"}
            className="Skills-image"
            alt="JS"
          />{" "}
          <br />
          <div className="SkillsImage-name"> JavaScript</div>
        </li>

        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "./images/TypeScript.png"}
            className="Skills-image"
            alt="TypeScript"
          ></img>{" "}
          <br />
          <div className="SkillsImage-name">TypeScript</div>
        </li>
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "./images/REACT.svg"}
            className="Skills-image"
            alt="REACT"
          ></img>
          <br />
          <div className="SkillsImage-name">React and React Native</div>
        </li>
        <li className="Skills-listItem">
          <img
            src={process.env.PUBLIC_URL + "./images/Redux.png"}
            className="Skills-image"
            alt="REDUX"
          ></img>
          <br />
          <div className="SkillsImage-name">Redux</div>
        </li>
      </ul>

      <div>
        <h2 className="tools-title">Tools</h2>
        <ul className="tools-list">
          <li className="tools-listItem">
            <img
              src={process.env.PUBLIC_URL + "./images/github.jpg"}
              className="tool-image"
              alt="Github"
            ></img>
            <div className="toolImage-name">Github</div>
          </li>
          <li className="tools-listItem">
            <img
              src={process.env.PUBLIC_URL + "./images/Visual_Studio_Code.svg"}
              className="tool-image"
              alt="Visual Studio"
            ></img>
            <div className="toolImage-name">Visual Studio</div>
          </li>
        </ul>
      </div>

      {/* <div>
          <h2 className="os-title">Operating Systems</h2>
          <ul className="os-list">
            <li className="os-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/github.jpg"}
                className="os-image"
                alt="Github"
              ></img>
              <div className="os-name">Github</div>
            </li>
            <li className="os-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/Visual_Studio_Code.svg"}
                className="os-image"
                alt="Visual Studio"
              ></img>
              <div className="os-name">Visual Studio</div>
            </li>
          </ul>
        </div> */}
    </div>
    // </div>
  );
};
export default Skills;
{
  /* <li>
              <img
                src={require("../../images/Visual_Studio_Code_1.35_icon.svg")}
                alt=""
              ></img>
              Visual Studio Code
            </li>
            <li>
              <img src={require("../../images/Codepen-logo.png")} alt=""></img>
              Codepen
            </li>
            <li>
              <img src={require("../../images/Figma-logo.svg")} alt=""></img>
              Figma
            </li> */
}
