import { Trans, useTranslation } from 'react-i18next';

const TrainingAndBeginnings = () => {
  const { t } = useTranslation();

  return (
    <div className='relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl'>
      <h2 className='sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200'>
        {t('training_and_beginnings.title')}
      </h2>

      <div className='text-slate-600 dark:text-slate-400'>
        <p className='mb-4'>
          {t('training_and_beginnings.first_computer_formatting')}
        </p>
        <p className='mb-4'>{t('training_and_beginnings.formatted_myself')}</p>
        <p className='mb-4'>
          {t('training_and_beginnings.interest_in_computers')}
        </p>
        <p className='mb-4'>
          <Trans
            i18nKey='training_and_beginnings.computer_engineering_studies'
            components={{ b: <b />, span: <span /> }}
          />
        </p>
        <p className='mb-4'>
          {t('training_and_beginnings.professional_career_start')}
        </p>
        {/* <p className='mb-4'>
          <Trans
            i18nKey='after_completing_the_higher_degree_in_computer_application_development'
            components={{ b: <b />, span: <span /> }}
          />
        </p>
        <p className='mb-4'>
          <Trans
            i18nKey='in_2015_i_pass_all_the_subjects_and_start_working_at_zitelia_combining_work_in_the_company_with_the_completion_of_the_tfc_end_of_degree_project'
            components={{ b: <b /> }}
          />
        </p>
        <p className='mb-4'>
          <Trans
            i18nKey='in_2017_i_present_the_tfc_and_immerse_myself_completely_in_the_working_world'
            components={{ b: <b /> }}
          />
        </p> */}
      </div>
    </div>
  );
};

export default TrainingAndBeginnings;
