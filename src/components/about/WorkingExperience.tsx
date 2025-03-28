import Company from './companies/Company';
import { COMPANIES_WHERE_I_WORK } from '../../data/companies';
import { dateUtils } from '../../utils/dateUtils';
import { useTranslator } from '../../hook/useTranslator';

const WorkingExperience = () => {
  const { tr, trHtml } = useTranslator();

  return (
    <div className='relative mb-5 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl'>
      <h2 className='sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200'>
        {tr('work_experience.title')}
      </h2>
      <div className='mb-4 text-slate-600 dark:text-slate-400'>
        <p className='mb-4'>
          {trHtml(
            'work_experience.years_of_experience',
            { b: <b />, span: <span /> },
            dateUtils.calculateYearsExperience()
          )}
        </p>
        <p className='mb-4'>
          {trHtml('work_experience.companies_worked', { b: <b /> })}
        </p>
      </div>

      {COMPANIES_WHERE_I_WORK.map((company) => (
        <Company
          key={company.name}
          name={company.name}
          dateFrom={company.dateFrom}
          dateTo={company.dateTo}
          job={company.job}
          technologies={company.tecnologies}
        />
      ))}
    </div>
  );
};

export default WorkingExperience;
