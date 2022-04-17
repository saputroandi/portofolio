import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section data-aos="flip-right" className="projects" id="projects">
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
                kalimat untuk Bahasa Daerah yang ada di Indonesia. klik{" "}
                <a href="https://temanbahasa.id/">disini</a> untuk melihatnya
              </p>
            </div>
          </div>
          <div className="projects-content">
            <div
              className="projects-image"
              style={{
                backgroundImage: "url('/img/product-page.jpg')",
              }}
            ></div>
            <div className="projects-description">
              <p>
                Proyek tantangan dari frontendmentor.io untuk membuat halaman
                product page. Saya menggunakan NextJs dan CSS3 dalam
                pengerjaannya, dan juga React Context untuk state management
                cart nya. klik{" "}
                <a href="https://product-page.andisaputro.online/">disini</a>{" "}
                untuk melihatnya
              </p>
            </div>
          </div>
          <div className="projects-content">
            <div
              className="projects-image"
              style={{
                backgroundImage: "url('/img/api-tester.png')",
              }}
            ></div>
            <div className="projects-description">
              <p>
                Proyek ini saya buat untuk saya sendiri agar mempermudah saya
                dalam mencoba endpoint yg saya buat. Saya menggunakan NextJs
                dalam pengerjaannya. klik{" "}
                <a href="https://api-tester.andisaputro.online/">disini</a>{" "}
                untuk mencobanya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
