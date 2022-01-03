import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="flip-left" className="skills" id="skills">
      <div className="skills-style container">
        <div className="skills-header">
          <p>{t("capability.title")}</p>
        </div>
        <div className="skills-content">
          <div className="skills-data">
            <p className="skills-headers-data">
              {t("capability.subTitle.skillsInterest")}:
            </p>
            <p className="skills-content-data">Back-End Development</p>
            <p className="skills-content-data">Front-End Development</p>
          </div>
          <div className="skills-data">
            <p className="skills-headers-data">
              {t("capability.subTitle.programmingLanguages")}:
            </p>
            <p className="skills-content-data">JavaScript</p>
            <p className="skills-content-data">PHP</p>
          </div>
          <div className="skills-data">
            <p className="skills-headers-data">
              {t("capability.subTitle.libraryFrameworks")}:
            </p>
            <p className="skills-content-data">Node Js</p>
            <p className="skills-content-data">Express Js</p>
            <p className="skills-content-data">React Js</p>
            <p className="skills-content-data">Next Js</p>
            <p className="skills-content-data">Laravel</p>
            <p className="skills-content-data">Bootstrap</p>
            <p className="skills-content-data">Material UI</p>
            <p className="skills-content-data">TailwindCSS</p>
            <p className="skills-content-data">Bootstrap</p>
          </div>
          <div className="skills-data">
            <p className="skills-headers-data">
              {t("capability.subTitle.dbms")}:
            </p>
            <p className="skills-content-data">MySQL</p>
          </div>
          <div className="skills-data">
            <p className="skills-headers-data">
              {t("capability.subTitle.other")}:
            </p>
            <p className="skills-content-data">Docker</p>
            <p className="skills-content-data">Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
}
