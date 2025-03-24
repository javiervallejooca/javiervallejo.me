import { useTranslation } from 'react-i18next';

const Lis = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className='mb-4'>{t('lis.first_experience')}</p>
      <p className='mb-4'>{t('lis.knowledge_increase')}</p>
      <p className='mb-4'>{t('lis.react_improvement')}</p>
      <p className='mb-4'>{t('lis.backend_help')}</p>
    </div>
  );
};

export default Lis;
