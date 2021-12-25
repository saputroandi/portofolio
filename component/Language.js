import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Language({ repos }) {
  const { t } = useTranslation();

  // reduce languages data from github
  const languages = repos.map((repo) => repo.language);
  const chartData = languages.reduce(
    (accLanguages, currentLanguages, index) => {
      if (!currentLanguages) currentLanguages = 'Other';

      let language = accLanguages.some((obj) => obj.x === currentLanguages);

      if (!language) accLanguages.push({ x: `${currentLanguages}`, y: 1 });

      if (language) {
        let indexOfObj = accLanguages.findIndex(
          (obj) => obj.x === currentLanguages
        );
        accLanguages[indexOfObj].y = accLanguages[indexOfObj].y + 1;
      }

      return accLanguages;
    },
    []
  );

  const data = {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: `The language I use`,
        data: chartData,
        backgroundColor: 'rgba(17, 50, 77, 0.8)',
        borderColor: 'rgba(17, 50, 77, 1)',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="flip-left" className="language" id="language">
      <div className="language-style container">
        <div className="language-content-header">
          <p>{t('programmingLanguage.title')}</p>
        </div>

        <div className="language-content">
          <Bar
            data={data}
            width={250}
            height={290}
            options={{
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
            }}
          />
        </div>
        <div>
          <p>{t('programmingLanguage.desc')}</p>
        </div>
      </div>
    </div>
  );
}
