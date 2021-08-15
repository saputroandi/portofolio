import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Language({ repos }) {
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
        label: 'Language based on my github repo',
        data: chartData,
        backgroundColor: 'rgba(17, 50, 77, 0.8)',
        borderColor: 'rgba(17, 50, 77, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="language">
      <div className="language-style container">
        <div className="language-content-header">
          <p>Language</p>
        </div>

        <div className="language-content">
          <Bar
            data={data}
            width={250}
            height={290}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
}
