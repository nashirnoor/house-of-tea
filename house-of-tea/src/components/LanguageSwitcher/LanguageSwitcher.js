// import React from 'react';
// import { useTranslation } from 'react-i18next';

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('ar')}>العربية</button>
//     </div>
//   );
// }

// export default LanguageSwitcher;

// import React from 'react';
// import { useTranslation } from 'react-i18next';

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem('language', lng); // Save the selected language to local storage
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')} style={{color:'red',background:"none"}}>EN </button>
//       <button onClick={() => changeLanguage('ar')}> AR</button>
//     </div>
//   );
// }

// export default LanguageSwitcher;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './languageSwitcher.css'; 

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); 
  };

  return (
    <div>
      <button className="language-button" onClick={() => changeLanguage('en')}>EN</button>
      <button className="language-button" onClick={() => changeLanguage('ar')}>AR</button>
    </div>
  );
}

export default LanguageSwitcher;
