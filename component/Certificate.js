import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Certificate() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="flip-right" className="certificate" id="certificate">
      <div className="certificate-style container">
        <div className="certificate-content-header">
          <p>Certificate</p>
        </div>
        <div className="certificate-container">
          <div className="certificate-content">
            <div
              className="certificate-image"
              style={{
                backgroundImage: "url('/img/sertifikat_udemy.jpg')",
              }}
            ></div>
            <div className="certificate-description">Serifikat kelas java</div>
          </div>
          <div className="certificate-content">
            <div
              className="certificate-image"
              style={{
                backgroundImage: "url('/img/sertifikat_dicoding.JPG')",
              }}
            ></div>
            <div className="certificate-description">
              sertifikat kelas javascript
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
