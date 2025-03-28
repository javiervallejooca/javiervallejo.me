import { useTranslator } from '../../hook/useTranslator';

const TrainingAndBeginnings = () => {
  const { tr, trHtml } = useTranslator();

  return (
    <div className='relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl'>
      <h2 className='sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200'>
        {tr('training_and_beginnings.title')}
      </h2>

      <div className='text-slate-600 dark:text-slate-400'>
        <p className='mb-4'>
          {tr('training_and_beginnings.first_computer_formatting')}
        </p>
        <p className='mb-4'>{tr('training_and_beginnings.formatted_myself')}</p>
        <p className='mb-4'>
          {tr('training_and_beginnings.interest_in_computers')}
        </p>
        <p className='mb-4'>
          {trHtml('training_and_beginnings.computer_engineering_studies', {
            b: <b />,
            span: <span />,
          })}
        </p>
        <p className='mb-4'>
          {tr('training_and_beginnings.professional_career_start')}
        </p>
      </div>
    </div>
  );
};

export default TrainingAndBeginnings;
