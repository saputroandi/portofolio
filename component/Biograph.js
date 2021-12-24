import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Biograph() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const { t } = useTranslation();

  return (
    <div data-aos="flip-right" className="biograph" id="biograph">
      <div className="biograph-style container">
        <div className="biograph-content-header">
          <p>{t('biograph.title')}</p>
        </div>
        <div className="biograph-content">
          <p>
            <span></span>
            Hai i&apos;m web developer. I spend my whole day, practically every
            day, experimenting with HTML, CSS, and JavaScript; dabbling with PHP
            and NodeJs. I build websites that delight and inform. I do it well.
          </p>
        </div>
        <div className="biograph-content">
          <p>
            <span></span>
            I&apos;m curious, and I enjoy work that challenges me to learn
            something new and stretch in a different direction. I do my best to
            stay on top of changes in the state of the art so that I can meet
            challenges with tools well suited to the job at hand.
          </p>
        </div>
        <div className="biograph-content">
          <p>
            <span></span>A slight clarification of the above: I&apos;m actually
            a graduates as automotive student cleverly disguised as a web
            developer. Since it was relatively clear early on that it would be
            slightly more than difficult to make a living as mechanical
            engineering, I&apos;ve focused my energies on the web, which happily
            has proven itself to be a wonderful decision.
          </p>
        </div>
      </div>
    </div>
  );
}
