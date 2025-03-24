import { useTranslation } from 'react-i18next';

const Zitelia = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className='mb-4'>{t('zitelia.first_experience')}</p>
      <p className='mb-4'>{t('zitelia.initially')}</p>
      <p className='mb-4'>{t('zitelia.after_project')}</p>
      <p className='mb-4'>{t('zitelia.talking_clients')}</p>
      <p className='mb-4'>{t('zitelia.job_description')}</p>
      <p className='mb-4'>{t('zitelia.seo_learning')}</p>
      <p className='mb-4'>{t('zitelia.last_years')}</p>
    </div>
  );
};

export default Zitelia;
