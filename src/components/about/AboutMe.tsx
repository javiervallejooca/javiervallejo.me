import { Trans, useTranslation } from 'react-i18next';

import { YEAR_STARTED_DJ } from '../../data/constants';

import { dateUtils } from '../../utils/dateUtils';

const AboutMe = () => {
  const { t } = useTranslation();

  const years = dateUtils.calculateYearsSinceBornDay();

  const yearsDjing = new Date().getFullYear() - YEAR_STARTED_DJ;

  //   <Trans
  //   i18nKey={t('work_experience.years_of_experience', {
  //     years: workingSince,
  //   })}
  //   components={{ b: <b />, span: <span /> }}
  // />

  return (
    <div className='relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl'>
      <h2 className='sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-700 opacity-100 dark:bg-slate-900 dark:text-slate-200'>
        {t('aboutMe.title')}
      </h2>
      <div className='text-slate-600 dark:text-slate-400'>
        <p className='mb-4'> {t('aboutMe.level', { level: years })}</p>
        <p className='mb-4'>
          {t('aboutMe.hobbies', {
            yearsDjing,
          })}
        </p>
        <p className='mb-4 ml-3 py-2 px-4 border-l-4'>
          <Trans i18nKey={t('aboutMe.djAnecdotes')} components={{ a: <a /> }} />
        </p>
        <p className='mb-4'>{t('aboutMe.officePreference')}</p>
        <p className='mb-4'>{t('aboutMe.learning')}</p>
        <p className='mb-4'>
          <Trans
            i18nKey={t('aboutMe.personalProject')}
            components={{ a: <a /> }}
          />
        </p>
        <p className='mb-4'>{t('aboutMe.note')}</p>
      </div>
    </div>
  );
};

export default AboutMe;
