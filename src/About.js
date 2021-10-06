import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="About">
      <h1 className="about">{"<About />"}</h1>
      <p className="description">
        I'm a developer, focussed on building front-end view of Websites and
        Mobile Applications with JavaScript, React and React Native. I'm
        passionate about technology, with high attention to details, willing to
        learn new technologies and improve my knowledge. In my spare time, I
        usually learn new skills.
      </p>
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        <p className="education"> Master's in Computer Science</p>
        <p className="uni">
          - Teesside University- Middlesbrough, United Kingdom
        </p>
        <br />
        <p className="education"> Bachelor’s in computer science</p>
        <p className="uni">
          - Elenki Institute Of Engineering And Technology, JNTU- Hyderabad,
          India
        </p>
      </div>
    </div>
  );
};
export default About;
