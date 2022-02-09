import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const options = [
  {
    label: "Bahasa",
    value: "id",
  },
  {
    label: "English",
    value: "en",
  },
];

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [language, setLanguage] = useState("en");

  const displayMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const changeLanguage = (e) => {
    if (i18n.language !== e.target.value) {
      i18n.changeLanguage(e.target.value);
      setLanguage(e.target.value);
      setMobileMenu(!mobileMenu);
    }
  };

  return (
    <nav className="navigation">
      <div className="navigation-style container">
        <div className="navigation-container">
          <div className="navigation-name">
            <p>Andi</p>
          </div>
          <div className="navigation-list">
            <div className="navigation-option">
              <select
                name="language"
                defaultValue={language}
                onChange={(e) => changeLanguage(e)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="navigation-button">
              <Link to="biograph" smooth={true} duration={800}>
                Biograph
              </Link>
            </div>
            <div className="navigation-button">
              <Link to="skills" smooth={true} duration={800}>
                Capability
              </Link>
            </div>
            <div className="navigation-button">
              <Link to="projects" smooth={true} duration={800}>
                Projects
              </Link>
            </div>
            <div className="navigation-button">
              <Link to="certificate" smooth={true} duration={800}>
                Certificate
              </Link>
            </div>
            <div className="navigation-button">
              <Link to="language" smooth={true} duration={800}>
                Language
              </Link>
            </div>
          </div>
          <div className="mobile-hamburger-icon" onClick={() => displayMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <CSSTransition
        in={mobileMenu}
        unmountOnExit
        timeout={300}
        classNames="fade"
      >
        <div className="mobile-navigation container">
          <div className="mobile-navigation-list">
            <div className="mobile-navigation-button">
              <Link
                to="biograph"
                smooth={true}
                duration={800}
                onClick={() => displayMenu()}
              >
                Biograph
              </Link>
            </div>
            <div className="mobile-navigation-button">
              <Link
                to="skills"
                smooth={true}
                duration={800}
                onClick={() => displayMenu()}
              >
                Capability
              </Link>
            </div>
            <div className="mobile-navigation-button">
              <Link
                to="projects"
                smooth={true}
                duration={800}
                onClick={() => displayMenu()}
              >
                Projects
              </Link>
            </div>
            <div className="mobile-navigation-button">
              <Link
                to="certificate"
                smooth={true}
                duration={800}
                onClick={() => displayMenu()}
              >
                Certificate
              </Link>
            </div>
            <div className="mobile-navigation-button">
              <Link
                to="language"
                smooth={true}
                duration={800}
                onClick={() => displayMenu()}
              >
                Language
              </Link>
            </div>
            <div className="mobile-navigation-option">
              <select
                name="language"
                defaultValue={language}
                onChange={(e) => changeLanguage(e)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </CSSTransition>
    </nav>
  );
}
