import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="flip-right" className="projects" id="projects">
      <div className="projects-style container">
        <div className="projects-content-header">
          <p>Projects</p>
        </div>
        <div className="projects-container">
          <div className="projects-content">
            <div
              className="projects-image"
              style={{
                backgroundImage: "url('/img/project_temanbahasa.JPG')",
              }}
            ></div>
            <div className="projects-description">
              <p>
                Teman Bahasa merupakan sebuah layanan translator otomatis multi
                kalimat untuk Bahasa Daerah yang ada di Indonesia. klik{' '}
                <a href="https://temanbahasa.id/">disini</a> untuk melihatnya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
