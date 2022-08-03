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
                backgroundImage: "url('/img/product-page.jpg')",
              }}
            ></div>
            <div className="projects-description">
              <p>
                Proyek tantangan dari frontendmentor.io untuk membuat halaman
                product page. Saya menggunakan NextJs dan CSS3 dalam
                pengerjaannya, dan juga React Context untuk state management
                cart nya. klik{" "}
                <a
                  // href="https://product-page-andis.vercel.app/"
                  onClick={() =>
                    window.open(
                      "https://product-page-andis.vercel.app/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  disini
                </a>{" "}
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
                <a
                  // href="https://api-tester-andis.vercel.app/"
                  onClick={() =>
                    window.open(
                      "https://api-tester-andis.vercel.app/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  disini
                </a>{" "}
                untuk mencobanya.
              </p>
            </div>
          </div>
          <div className="projects-content">
            <div
              className="projects-image"
              style={{
                backgroundImage: "url('/img/undangan.png')",
              }}
            ></div>
            <div className="projects-description">
              <p>
                Ini adalah undangan berbasis website dan salah satu tema-nya
                yang saya bangun menggunakan NextJs, CSS3 dan Sanity sebagai
                tempat menyimpan ucapan dati tamu undangan. Klik{" "}
                <a
                  // href="https://undangan-andis.vercel.app/"
                  onClick={() =>
                    window.open(
                      "https://undangan-andis.vercel.app/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  disini
                </a>{" "}
                untuk melihatnya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
