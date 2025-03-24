import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";

const SummarySkills = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <h2 className="sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200">
        {t("summary_skills.title")}
      </h2>
      <div className="text-slate-600 dark:text-slate-400">
        <p className="mb-4">
          {t("summary_skills.throughout_my_work_experience")}
        </p>
        <p className="mb-4">{t("summary_skills.technology_list")}</p>
        <ul className="mb-4 list-inside">
          <li>
            <div className="flex items-center gap-2 mb-2">
              <FaArrowRightLong /> <b>React</b> ~ 4 {t("years")}
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mb-2">
              <FaArrowRightLong /> <b>JavaScript</b> ~ 4 {t("years")}
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mb-2">
              <FaArrowRightLong /> <b>PHP</b> ~ 4/5 {t("years")}
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mb-2">
              <FaArrowRightLong /> <b>C#</b> ~ 1,5 {t("years")}
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mb-2">
              <FaArrowRightLong /> <b>WordPress</b> ~ 6 {t("years")}
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mb-2">
              <FaArrowRightLong /> <b>PrestaShop</b> ~ 5 {t("years")}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummarySkills;
