import { JSX } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export const useTranslator = () => {
  const { t } = useTranslation();

  const tr = (key: string, value?: string | number) => {
    return value !== undefined ? t(key, { variable: value }) : t(key);
  };

  const trHtml = (
    key: string,
    components: Record<string, JSX.Element>,
    value?: string | number
  ) => {
    return <Trans i18nKey={tr(key, value)} components={components} />;
  };

  return { tr, trHtml };
};
