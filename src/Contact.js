import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CV from "./CV.pdf";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Contact</h1>

      <p className="contact-description">
        I'm currently open to employment opportunities and interested in
        full-time permanent jobs.
      </p>
      <div data-aos="zoom-in" className="contacts">
        <div className="con-image-wrapper">
          <a href={CV} target="_blank">
            <img
              className="contacts-image"
              src={process.env.PUBLIC_URL + "./images/cv.png"}
              alt="CV"
            />
          </a>

          <div className="contacts-image-name">CV</div>
        </div>
        <div className="con-image-wrapper">
          <a
            href="https://www.linkedin.com/in/isha-dev-26b783218"
            target="_blank"
          >
            <img
              className="contacts-image"
              src={process.env.PUBLIC_URL + "./images/linkedIn.png"}
              alt="Linked in"
            />
          </a>

          <div className="contacts-image-name">Linked in</div>
        </div>
        <div className="con-image-wrapper">
          <a href="mailto:isha3.dev@gmail.com" target="_blank">
            <img
              className="contacts-image"
              src={process.env.PUBLIC_URL + "./images/email.png"}
              alt="Email"
            />
          </a>
          <div className="contacts-image-name">Email</div>
        </div>
        <div className="con-image-wrapper">
          <a href="https://github.com/Manisha-L/" target="_blank">
            <img
              className="contacts-image"
              src={process.env.PUBLIC_URL + "./images/github.png"}
              alt="Github"
            />
          </a>
          <div className="contacts-image-name">Github</div>
        </div>
      </div>
      <h2 className="work"> Let's Work Together</h2>
    </div>
  );
};
export default Contact;
