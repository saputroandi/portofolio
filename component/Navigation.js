import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

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
              <a href="#">Me</a>
            </div>
            <div className="navigation-button">
              <a href="#">Biograph</a>
            </div>
            <div className="navigation-button">
              <a href="#">Timeline</a>
            </div>
            <div className="navigation-button">
              <a href="#">Language</a>
            </div>
            <div className="navigation-button">
              <a href="#">Contact</a>
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
              <a href="#">Me</a>
            </div>
            <div className="mobile-navigation-button">
              <a href="#">Biograph</a>
            </div>
            <div className="mobile-navigation-button">
              <a href="#">Timeline</a>
            </div>
            <div className="mobile-navigation-button">
              <a href="#">Language</a>
            </div>
            <div className="mobile-navigation-button">
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
