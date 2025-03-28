import { YEAR_STARTED_DJ } from '../../data/constants';
import { dateUtils } from '../../utils/dateUtils';
import { useTranslator } from '../../hook/useTranslator';

const AboutMe = () => {
  const { tr, trHtml } = useTranslator();

  const yearsOld = dateUtils.calculateYearsSinceBornDay();
  const yearsDjing = new Date().getFullYear() - YEAR_STARTED_DJ;

  return (
    <div className='relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl'>
      <h2 className='sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-700 opacity-100 dark:bg-slate-900 dark:text-slate-200'>
        {tr('aboutMe.title')}
      </h2>
      <div className='text-slate-600 dark:text-slate-400'>
        <p className='mb-4'> {tr('aboutMe.level', yearsOld)}</p>
        <p className='mb-4'>{tr('aboutMe.hobbies', yearsDjing)}</p>
        <p className='mb-4 ml-3 py-2 px-4 border-l-4'>
          {trHtml('aboutMe.djAnecdotes', { a: <a /> })}
        </p>
        <p className='mb-4'>{tr('aboutMe.officePreference')}</p>
        <p className='mb-4'>{tr('aboutMe.learning')}</p>
        <p className='mb-4'>
          {trHtml('aboutMe.personalProject', { a: <a /> })}
        </p>
        <p className='mb-4'>{tr('aboutMe.note')}</p>
      </div>
    </div>
  );
};

export default AboutMe;
