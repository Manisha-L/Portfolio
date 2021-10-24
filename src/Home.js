import "./Home.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
const Home = () => {
  const [burger, setBurger] = useState(false);
  const [itemClicked, setItemClicked] = useState("");
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
                  if (window.scrollY > 0) {
                    window.scrollTo({
                      top:
                        window.scrollY +
                        document.getElementById("about").getBoundingClientRect()
                          .top -
                        50,
                      behavior: "smooth",
                    });
                    setBurger(!burger);
                    return;
                  }
                  window.scrollTo({
                    top:
                      document.getElementById("about").getBoundingClientRect()
                        .top - 50,
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
                  if (window.scrollY > 0) {
                    window.scrollTo({
                      top:
                        window.scrollY +
                        document
                          .getElementById("skills")
                          .getBoundingClientRect().top -
                        50,
                      behavior: "smooth",
                    });
                    setBurger(!burger);
                    return;
                  }
                  window.scrollTo({
                    top:
                      document.getElementById("skills").getBoundingClientRect()
                        .top - 50,
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
                  if (window.scrollY > 0) {
                    window.scrollTo({
                      top:
                        window.scrollY +
                        document
                          .getElementById("projects")
                          .getBoundingClientRect().top -
                        50,
                      behavior: "smooth",
                    });
                    setBurger(!burger);
                    return;
                  }
                  window.scrollTo({
                    top:
                      document
                        .getElementById("projects")
                        .getBoundingClientRect().top - 50,
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
                  if (window.scrollY > 0) {
                    window.scrollTo({
                      top:
                        window.scrollY +
                        document
                          .getElementById("contact")
                          .getBoundingClientRect().top -
                        50,
                      behavior: "smooth",
                    });
                    setBurger(!burger);
                    return;
                  }
                  window.scrollTo({
                    top:
                      document.getElementById("contact").getBoundingClientRect()
                        .top - 50,
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
        {/* <div className="header-forLarge"> */}
        <ul className="nav-conLarge">
          <li
            className={
              itemClicked === "home"
                ? " nav-itemLarge  nav-itemLarge-active "
                : "nav-itemLarge "
            }
            onClick={() => {
              setItemClicked("home");
              window.scrollTo({
                top:
                  document.getElementById("home").getBoundingClientRect().top -
                  55,
                behavior: "smooth",
              });
            }}
          >
            Home
          </li>
          <li
            className={
              itemClicked === "about"
                ? " nav-itemLarge  nav-itemLarge-active "
                : "nav-itemLarge "
            }
            onClick={() => {
              setItemClicked("about");
              if (window.scrollY > 0) {
                window.scrollTo({
                  top:
                    window.scrollY +
                    document.getElementById("about").getBoundingClientRect()
                      .top -
                    65,
                  behavior: "smooth",
                });
                return;
              }
              window.scrollTo({
                top:
                  document.getElementById("about").getBoundingClientRect().top -
                  65,
                behavior: "smooth",
              });
            }}
          >
            About
          </li>
          <li
            className={
              itemClicked === "skills"
                ? " nav-itemLarge  nav-itemLarge-active "
                : "nav-itemLarge "
            }
            onClick={() => {
              setItemClicked("skills");
              if (window.scrollY > 0) {
                window.scrollTo({
                  top:
                    window.scrollY +
                    document.getElementById("skills").getBoundingClientRect()
                      .top -
                    65,
                  behavior: "smooth",
                });
                return;
              }
              window.scrollTo({
                top:
                  document.getElementById("skills").getBoundingClientRect()
                    .top - 65,
                behavior: "smooth",
              });
            }}
          >
            Skills
          </li>
          <li
            className={
              itemClicked === "projects"
                ? " nav-itemLarge  nav-itemLarge-active "
                : "nav-itemLarge "
            }
            onClick={() => {
              setItemClicked("projects");
              if (window.scrollY > 0) {
                window.scrollTo({
                  top:
                    window.scrollY +
                    document.getElementById("projects").getBoundingClientRect()
                      .top -
                    65,
                  behavior: "smooth",
                });
                return;
              }
              window.scrollTo({
                top:
                  document.getElementById("projects").getBoundingClientRect()
                    .top - 65,
                behavior: "smooth",
              });
            }}
          >
            Projects
          </li>
          <li
            className={
              itemClicked === "contact"
                ? " nav-itemLarge  nav-itemLarge-active "
                : "nav-itemLarge "
            }
            onClick={() => {
              setItemClicked("contact");
              if (window.scrollY > 0) {
                window.scrollTo({
                  top:
                    window.scrollY +
                    document.getElementById("contact").getBoundingClientRect()
                      .top -
                    65,
                  behavior: "smooth",
                });
                return;
              }
              window.scrollTo({
                top:
                  document.getElementById("contact").getBoundingClientRect()
                    .top - 65,
                behavior: "smooth",
              });
            }}
          >
            Contact
          </li>
        </ul>
      </div>

      <div className="intro-container">
        <p className="first-line">Hi! I'm</p>
        <p className="second-line">Manisha</p>
        <p className="third-line">-A passionate Software Developer</p>
      </div>
      <div className="homeImage-container">
        <a href="https://github.com/Manisha-L/" target="_blank">
          <img
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="home-image"
            src={process.env.PUBLIC_URL + "/images/github.png"}
            alt="Github"
          />
        </a>
        <a href="mailto:isha3.dev@gmail.com" target="_blank">
          <img
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="home-image"
            src={process.env.PUBLIC_URL + "./images/email.png"}
            alt="Email"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/isha-dev-26b783218"
          target="_blank"
        >
          <img
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="home-image"
            src={process.env.PUBLIC_URL + "./images/linkedIn.png"}
            alt="Linked in"
          />
        </a>
      </div>
    </div>
  );
};
export default Home;
