import React from "react";
import { useTranslation } from "react-i18next";

const SummarySkills = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200">
        {t("summary_of_my_skills_or_experience")}
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        <p className="mb-4">{t("throughout_my_work_experience")}</p>
        <p className="mb-4">{t("technology_list")}</p>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <b>PHP</b> ~ 4/5 {t("years")}
          </li>
          <li>
            <b>JavaScript</b> ~ 3 {t("years")}
          </li>
          <li>
            <b>React</b> ~ 2 {t("years")}
          </li>
          <li>
            <b>C#</b> ~ 1,5 {t("years")}
          </li>
          <li>
            <b>WordPress</b> ~ 6 {t("years")}
          </li>
          <li>
            <b>PrestaShop</b> ~ 5 {t("years")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummarySkills;
