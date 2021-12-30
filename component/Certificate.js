import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Certificate() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="flip-left" className="certificate" id="certificate">
      <div className="certificate-style container">
        <div className="certificate-content-header">
          <p>{t('certificate.title')}</p>
        </div>
        <div className="certificate-container">
          <div className="certificate-content">
            <div
              className="certificate-image"
              style={{
                backgroundImage: "url('/img/sertifikat_udemy.jpg')",
              }}
            ></div>
            <div className="certificate-description">
              Udemy certificate for Java
            </div>
          </div>
          <div className="certificate-content">
            <div
              className="certificate-image"
              style={{
                backgroundImage: "url('/img/sertifikat_dicoding.JPG')",
              }}
            ></div>
            <div className="certificate-description">
              Dicoding certificate for Javascript
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
