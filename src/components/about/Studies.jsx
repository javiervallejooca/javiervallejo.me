import { Trans, useTranslation } from "react-i18next";

const Studies = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200">
        {t("training_and_beginnings")}
      </div>

      <div className="text-slate-600 dark:text-slate-400">
        <p className="mb-4">
          {t("since_i_was_a_child_i_liked_computers_and_tinkered_with_them")}
        </p>
        <p className="mb-4">
          <Trans
            i18nKey="after_completing_the_higher_degree_in_computer_application_development"
            components={{ b: <b />, span: <span /> }}
          />
        </p>
        <p className="mb-4">
          <Trans
            i18nKey="in_2015_i_pass_all_the_subjects_and_start_working_at_zitelia_combining_work_in_the_company_with_the_completion_of_the_tfc_end_of_degree_project"
            components={{ b: <b /> }}
          />
        </p>
        <p className="mb-4">
          <Trans
            i18nKey="in_2017_i_present_the_tfc_and_immerse_myself_completely_in_the_working_world"
            components={{ b: <b /> }}
          />
        </p>
      </div>
    </div>
  );
};

export default Studies;
