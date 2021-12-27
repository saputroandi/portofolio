import React from 'react';

export default function Projects() {
  return (
    <div className="projects" id="projects">
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
