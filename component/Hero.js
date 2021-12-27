import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

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
              <p>{t('hero.currentWork')}</p>
            </div>
          </div>
          <div className="hero-contact-container">
            <div className="hero-contact">
              <div className="hero-icon-phone"></div>
              <p>+62 817-7658-6850</p>
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
