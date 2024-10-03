import { useTranslation } from 'react-i18next';
import { MONTHS_NAMES } from '../../data/constants';
import { Language } from '../../types/types';
import { useTimeWorked } from './hook/useTimeWorked';

interface Props {
  textDateFrom: string;
  textDateTo: Date | string;
  current: boolean;
}

const TimeWorked = ({ textDateFrom, textDateTo, current }: Props) => {
  const { t, i18n } = useTranslation();

  const { years, months, dateFrom, dateTo } = useTimeWorked(
    textDateFrom,
    textDateTo
  );

  const currentLanguage = i18n.resolvedLanguage as Language;

  return (
    <div className='flex flex-col justify-end py-1 text-sm text-slate-500 dark:text-slate-500 sm:py-0'>
      <div className='mb-0 flex justify-start sm:mb-1 sm:justify-end'>
        <span className=' rounded-full bg-slate-300 px-2 py-1 text-slate-700 dark:bg-slate-400 dark:text-slate-700'>
          {years > 0 && (
            <>
              {years} {years === 1 ? t('year') : t('years')}
              {','}
            </>
          )}{' '}
          {months} {months === 1 ? t('month') : t('months')}
        </span>
      </div>
      <div className='flex pt-1 sm:justify-end sm:pt-0'>
        <div className='mr-1'>
          {MONTHS_NAMES[currentLanguage][dateFrom.getMonth()] +
            ' ' +
            dateFrom.getFullYear()}
        </div>
        -
        <div className='ml-1'>
          {current ? (
            <span className='font-bold text-slate-700 dark:text-slate-300'>
              {t('currently')}
            </span>
          ) : (
            <>
              {MONTHS_NAMES[currentLanguage][dateTo.getMonth()] +
                ' ' +
                dateTo.getFullYear()}{' '}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeWorked;
