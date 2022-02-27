import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="about-container" id="about">
      <h1 className="about-title">About</h1>
      <p data-aos="zoom-in" className="description">
        I'm a developer with passion towards Technology and focussed on building
        user interfaces of Web and Mobile Applications with JavaScript and
        TypeScript using React, Next.js and React Native. I like to keep
        upgrading myself by learning new technologies to improve my knowledge.
      </p>
      <div className="education-wrapper">
        <h2 className="education-title">Education</h2>

        <div className="education-container">
          <p data-aos="fade-left" className="education">
            Master's in Computer Science
          </p>
          <p className="uni">
            - Teesside University- Middlesbrough, United Kingdom
          </p>
          <br />
          <p data-aos="fade-left" className="education">
            Bachelor’s in computer science
          </p>
          <p className="uni">
            - Elenki Institute of Engineering and Technology, JNTU- Hyderabad,
            India
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
