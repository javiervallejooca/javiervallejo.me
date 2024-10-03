import { useTranslation } from 'react-i18next';
import Technologies from './Technologies';
import TimeWorked from './TimeWorked';

import Ingecid from './descriptionCompanies/Ingecid';
import Iteisa from './descriptionCompanies/Iteisa';
import Lis from './descriptionCompanies/Lis';
import Zitelia from './descriptionCompanies/Zitelia';

import {
  COMPANY_INGECID,
  COMPANY_ITEISA,
  COMPANY_LIS,
  COMPANY_ZITELIA,
} from '../../data/companies';

const renderCompanyDescription = (company: string) => {
  switch (company) {
    case COMPANY_INGECID:
      return <Ingecid />;
    case COMPANY_LIS:
      return <Lis />;
    case COMPANY_ITEISA:
      return <Iteisa />;
    case COMPANY_ZITELIA:
      return <Zitelia />;
    default:
      return null;
  }
};

interface Props {
  name: string;
  dateFrom: string;
  dateTo: Date | string;
  current: boolean;
  job: string;
  technologies: string[];
}

const Company = ({
  name,
  dateFrom,
  dateTo,
  current,
  job,
  technologies,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className='mb-4 flex flex-col rounded border border-slate-200 bg-slate-200 p-4 text-white shadow dark:border-slate-800 dark:bg-slate-800 dark:text-black'>
      <div className='flex flex-col sm:flex-row sm:justify-between'>
        <div className='flex flex-col justify-center'>
          <div className='text-xl font-bold text-slate-800 dark:text-slate-200'>
            {name}
          </div>
          <div className='text-sm italic text-slate-400 dark:text-slate-500'>
            {t(job)}
          </div>
        </div>
        <TimeWorked
          textDateFrom={dateFrom}
          textDateTo={dateTo}
          current={current}
        />
      </div>
      <div className='mt-4 mb-1 text-slate-600 dark:text-slate-400'>
        {renderCompanyDescription(name)}
      </div>
      <Technologies technologies={technologies} />
    </div>
  );
};

export default Company;
