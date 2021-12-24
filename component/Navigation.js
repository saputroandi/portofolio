import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-scroll';

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const displayMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="navigation">
      <div className="navigation-style container">
        <div className="navigation-container">
          <div className="navigation-name">
            <p>Andi</p>
          </div>
          <div className="navigation-list">
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
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
