import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-style container">
        <div className="hero-profile">
          <div className="hero-image"></div>
        </div>
        <div className="hero-info-container">
          <div className="hero-info">
            <div className="hero-name">
              <p>Andi S</p>
            </div>
            <div className="hero-position">
              <p>Web Dev</p>
            </div>
            <div className="hero-current-position">
              <p>Currently i&apos;m working as Senior Production Operator</p>
            </div>
          </div>
          <div className="hero-contact-container">
            <div className="hero-contact">
              <div className="hero-icon-phone"></div>
              <p>0817-7658-6850</p>
            </div>
            <div className="hero-contact">
              <div className="hero-icon-email"></div>
              <p>saputro.andi593@gmail.com</p>
            </div>
            <div className="hero-contact">
              <div className="hero-icon-github"></div>
              <a
                href="https://github.com/saputroandi"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <div className="hero-contact">
              <div className="hero-icon-telegram"></div>
              <a
                href="https://t.me/sambelkecap"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
