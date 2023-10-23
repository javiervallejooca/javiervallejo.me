import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const GoBack = () => {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      className="text-slate-600 underline underline-offset-4 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
    >
      {t("back_to_home")}
    </Link>
  );
};

export default GoBack;
