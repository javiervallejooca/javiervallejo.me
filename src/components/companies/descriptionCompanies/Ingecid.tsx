import { useTranslation } from 'react-i18next';

const Ingecid = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className='mb-4'>{t('ingecid.frontend_developer')}</p>
      <p className='mb-4'>{t('ingecid.vircore_migration')}</p>
    </div>
  );
};

export default Ingecid;
