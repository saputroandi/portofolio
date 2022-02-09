import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Biograph() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const { t } = useTranslation();

  return (
    <section data-aos="flip-right" className="biograph" id="biograph">
      <div className="biograph-style container">
        <div className="biograph-content-header">
          <p>{t("biograph.title")}</p>
        </div>
        <div className="biograph-content">
          <p>
            <span></span>
            {t("biograph.description.paragraph_1")}
          </p>
        </div>
        <div className="biograph-content">
          <p>
            <span></span>
            {t("biograph.description.paragraph_2")}
          </p>
        </div>
        <div className="biograph-content">
          <p>
            <span></span>
            {t("biograph.description.paragraph_3")}
          </p>
        </div>
      </div>
    </section>
  );
}
