import { useTranslation } from 'react-i18next';

import englishFlag from '../../img/flags/english.png';
import spanishFlag from '../../img/flags/spanish.png';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div style={{ zIndex: '10' }} className='fixed bottom-12 right-0 p-4'>
        <div className='flex justify-end rounded-full bg-slate-600 p-1 text-blue-800 dark:bg-slate-200 dark:text-slate-600'>
          {i18n.resolvedLanguage === 'es' ? (
            <div
              className='h-8 w-8 overflow-hidden rounded-full transition hover:rotate-12 hover:cursor-pointer'
              onClick={() => {
                changeLanguage('en');
              }}
            >
              <img
                className='h-full w-full object-cover'
                src={englishFlag}
                alt='Bandera inglesa'
              />
            </div>
          ) : (
            <div
              className='h-8 w-8 overflow-hidden rounded-full transition hover:rotate-12 hover:cursor-pointer'
              onClick={() => {
                changeLanguage('es');
              }}
            >
              <img
                className='h-full w-full object-cover'
                src={spanishFlag}
                alt='Bandera española'
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LanguageSelector;
