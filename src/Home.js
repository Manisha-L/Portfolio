import "./Home.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Home = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className="container">
      <div className="header">
        <div className="nav-container">
          <GiHamburgerMenu size={20} onClick={() => setBurger(!burger)} />
          {burger && (
            <ul className="mob-nav">
              <li className="nav-item">HOME</li>
              <li className="nav-item">ABOUT</li>
              <li className="nav-item">SKILLS</li>
              <li className="nav-item">PROJECTS</li>
              <li className="nav-item">CONTACT</li>
            </ul>
          )}
        </div>
        <div className="name-container">
          <h1 className="name">MANISHA LAKSHMIPATHULA</h1>
        </div>
      </div>
      <div className="image-container"></div>
      <div className="intro-container">
        <p className="hi">Hi! I'm</p>
        <p className="manisha">Manisha</p>
        <p className="profession">-A passionate Software Developer</p>
      </div>
    </div>
  );
};
export default Home;
