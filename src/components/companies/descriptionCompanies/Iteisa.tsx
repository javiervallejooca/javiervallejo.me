import { useTranslation } from 'react-i18next';

const Iteisa = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className='mb-4'>{t('iteisa.web_development_focus')}</p>
      <p className='mb-4'>{t('iteisa.wordpress_plugins')}</p>
      <p className='mb-4'>{t('iteisa.theme_customization')}</p>
      <p className='mb-4'>{t('iteisa.responsible_web_development')}</p>
      <p className='mb-4'>{t('iteisa.hosting_services_context')}</p>
      <p className='mb-4'>{t('iteisa.react_and_js_frameworks')}</p>
    </div>
  );
};

export default Iteisa;
