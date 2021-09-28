import "./About.css";
// import { javascript } from "../public/images/javascript.svg";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about">{"<About />"}</h1>
      <p className="description">
        I'm a developer, focussed on building front-end view of Websites and
        Mobile Applications with JavaScript and JavaScript frameworks like
        React. I'm passionate about technology, with high attention to details,
        willing to learn new technologies and improve my knowledge. In my spare
        time, I usually learn new skills.
        {/* I've found great enjoyment in figuring
        out problems, whether how to get a layout to work on various devices, or
        how to program the underlying logic that makes the website functional to
        the user. */}
      </p>
      <div id="about-lists">
        <div className="tech-container">
          <h2 className="tech-title">Technologies</h2>
          <ul className="technologies-list">
            <li className="technologies-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/HTML.svg"}
                className="tech-image"
                alt="HTML"
              ></img>
              <br />
              <div style={{ color: "Gold" }}>HTML5</div>
            </li>
            <li className="technologies-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/CSS.svg"}
                className="tech-image"
                alt="HTML"
              ></img>
              <br />
              <div style={{ color: "Gold" }}>CSS3</div>
            </li>

            <li className="technologies-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/SASS.svg"}
                className="tech-image"
                alt="SASS"
              ></img>
              <br />
              <div style={{ color: "Gold" }}>SASS</div>
            </li>
            <li className="technologies-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/javascript.svg"}
                className="tech-image"
                alt="JS"
              />{" "}
              <br />
              <div style={{ color: "Gold" }}> JavaScript</div>
            </li>

            <li className="technologies-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/TypeScript.png"}
                className="tech-image"
                alt="TypeScript"
              ></img>{" "}
              <br />
              <div style={{ color: "Gold" }}>TypeScript</div>
            </li>
            <li className="technologies-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/REACT.svg"}
                className="tech-image"
                alt="REACT"
              ></img>{" "}
              <br />
              <div style={{ color: "Gold" }}> React</div>
            </li>
            <li className="technologies-listItem">
              <img
                src={process.env.PUBLIC_URL + "./images/ChartJS.jpg"}
                className="tech-image"
                alt="Chart.js"
              ></img>{" "}
              <br />
              <div style={{ color: "Gold" }}> Chart.js</div>
            </li>
            {/*
            <li>
              <img src={require("../../images/react-router.svg")} alt=""></img>
              React Router
            </li>
           
          */}
          </ul>
        </div>
        {/* <div>
          <h2>Tools</h2>
          <ul id="tools">
            <li>
              <img src={require("../../images/github-logo.svg")} alt=""></img>
              Github
            </li>
            <li>
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
            </li>
          </ul>
        </div> */}
        <p style={{ color: "black" }}>
          I've found great enjoyment in figuring out problems, whether how to
          get a layout to work on various devices,
        </p>
      </div>
    </div>
  );
};
export default About;
