import "./Home.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
const Home = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div id="home" className="container">
      <div className="header">
        <div className="nav-container">
          <GiHamburgerMenu
            size={20}
            className="nav"
            onClick={() => setBurger(!burger)}
          />

          <div className={burger ? "mob-nav mob-nav-active" : "mob-nav"}>
            <IoCloseSharp
              className="close"
              size={30}
              onClick={() => setBurger(!burger)}
            />
            <ul className="nav-items">
              <li
                className="nav-item"
                onClick={() => {
                  window.scrollTo({
                    top:
                      document.getElementById("home").getBoundingClientRect()
                        .top - 55,
                    behavior: "smooth",
                  });

                  setBurger(!burger);
                }}
              >
                HOME
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  window.scrollTo({
                    top:
                      document.getElementById("About").getBoundingClientRect()
                        .top - 55,
                    behavior: "smooth",
                  });

                  setBurger(!burger);
                }}
              >
                ABOUT
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  window.scrollTo({
                    top:
                      document.getElementById("skills").getBoundingClientRect()
                        .top - 55,
                    behavior: "smooth",
                  });

                  setBurger(!burger);
                }}
              >
                SKILLS
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  window.scrollTo({
                    top:
                      document
                        .getElementById("projects")
                        .getBoundingClientRect().top - 55,
                    behavior: "smooth",
                  });

                  setBurger(!burger);
                }}
              >
                PROJECTS
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  window.scrollTo({
                    top:
                      document.getElementById("contact").getBoundingClientRect()
                        .top - 55,
                    behavior: "smooth",
                  });

                  setBurger(!burger);
                }}
              >
                CONTACT
              </li>
            </ul>
          </div>
        </div>
        <div className="name-container">
          <h1 className="name">MANISHA LAKSHMIPATHULA</h1>
        </div>
      </div>
      <div className="image-container">
        <div className="image-con">
          <div className="my-pic"></div>
        </div>
      </div>
      <div className="intro-container">
        <p className="hi">Hi! I'm</p>
        <p className="manisha">Manisha</p>
        <p className="profession">-A passionate Software Developer</p>
      </div>
    </div>
  );
};
export default Home;
