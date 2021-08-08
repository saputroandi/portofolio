import React from 'react';

export default function Language({ repos }) {
  // reduce languages data from github
  const languages = repos.map((repo) => repo.language);
  const chartData = languages.reduce(
    (arrayLanguage, currentLanguage, index) => {
      if (!currentLanguage) {
        arrayLanguage['Other'] = 1;
      } else if (!arrayLanguage[currentLanguage]) {
        arrayLanguage[currentLanguage] = 1;
      } else {
        arrayLanguage[currentLanguage] = arrayLanguage[currentLanguage] + 1;
      }
      return arrayLanguage;
    },
    {}
  );
  console.log(chartData);

  return (
    <div className="language">
      <div className="language-style container">
        <div className="language-content-header">
          <p>Language</p>
        </div>

        <div className="language-content">
          <p>your chart here</p>
        </div>
      </div>
    </div>
  );
}
