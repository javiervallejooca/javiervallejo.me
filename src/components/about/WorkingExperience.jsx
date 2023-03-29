import { useState } from "react";
import { useInterval } from "usehooks-ts";
import Company from "../companies/Company";

import {
  COMPANIES_WHERE_I_WORK,
  COUNT_TIME_BY,
  WHEN_STARTED_TO_WORK,
} from "../../global";

const WorkingExperience = () => {
  const workingSince = new Date().getFullYear() - WHEN_STARTED_TO_WORK; //in years
  const [typeDate, setTypeDate] = useState(COUNT_TIME_BY.years);
  const [isPlaying, setPlaying] = useState(false);
  const [date, setDate] = useState(workingSince);

  const delay = 1000;

  useInterval(
    () => {
      setDate(date + 1);
    },
    isPlaying ? delay : null
  );

  const handleDate = () => {
    switch (typeDate) {
      case COUNT_TIME_BY.years:
        setDate(workingSince * 12);
        setTypeDate(COUNT_TIME_BY.months);
        setPlaying(false);
        break;
      case COUNT_TIME_BY.months:
        setDate(parseInt(date * 4.345));
        setTypeDate(COUNT_TIME_BY.weeks);
        setPlaying(false);
        break;
      case COUNT_TIME_BY.weeks:
        setDate(date * 7);
        setTypeDate(COUNT_TIME_BY.days);
        setPlaying(false);
        break;
      case COUNT_TIME_BY.days:
        setDate(date * 24);
        setTypeDate(COUNT_TIME_BY.hours);
        setPlaying(false);
        break;
      case COUNT_TIME_BY.hours:
        setDate(date * 60);
        setTypeDate(COUNT_TIME_BY.minutes);
        setPlaying(false);
        break;
      default:
        setDate(workingSince);
        setTypeDate(COUNT_TIME_BY.years);
        setPlaying(false);
        break;
    }
  };

  return (
    <div className="relative mb-5 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="sticky top-0 right-0 mb-4 bg-slate-100 py-4 px-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200">
        Experiencia laboral
      </div>
      <div className="mb-4 text-slate-600 dark:text-slate-400">
        <p className="mb-4">
          Durante los últimos 2 años de la carrera estuve compaginando estudios
          y trabajo.
        </p>
        <p className="mb-4">
          Es decir,{" "}
          <span
            onClick={handleDate}
            className="cursor-pointer bg-slate-600 px-1 text-slate-200 dark:bg-slate-400 dark:text-slate-800"
          >
            desde el 2015 estoy desarrollando software, esto es un total de{" "}
            {date} {typeDate}.
          </span>
        </p>
        <p className="mb-4">
          Este sería el <u>orden cronológico inverso</u> de las empresas donde
          he estado/estoy trabajando.
        </p>
      </div>

      <Company
        companyAsKey={COMPANIES_WHERE_I_WORK.lis.companyAsKey}
        current={COMPANIES_WHERE_I_WORK.lis.current}
        dateFrom={COMPANIES_WHERE_I_WORK.lis.dateFrom}
        dateTo={COMPANIES_WHERE_I_WORK.lis.dateTo}
        job={COMPANIES_WHERE_I_WORK.lis.job}
        name={COMPANIES_WHERE_I_WORK.lis.name}
        technologies={COMPANIES_WHERE_I_WORK.lis.tecnologies}
      ></Company>

      <Company
        companyAsKey={COMPANIES_WHERE_I_WORK.iteisa.companyAsKey}
        current={COMPANIES_WHERE_I_WORK.iteisa.current}
        dateFrom={COMPANIES_WHERE_I_WORK.iteisa.dateFrom}
        dateTo={COMPANIES_WHERE_I_WORK.iteisa.dateTo}
        job={COMPANIES_WHERE_I_WORK.iteisa.job}
        name={COMPANIES_WHERE_I_WORK.iteisa.name}
        technologies={COMPANIES_WHERE_I_WORK.iteisa.tecnologies}
      ></Company>

      <Company
        companyAsKey={COMPANIES_WHERE_I_WORK.zitelia.companyAsKey}
        current={COMPANIES_WHERE_I_WORK.zitelia.current}
        dateFrom={COMPANIES_WHERE_I_WORK.zitelia.dateFrom}
        dateTo={COMPANIES_WHERE_I_WORK.zitelia.dateTo}
        job={COMPANIES_WHERE_I_WORK.zitelia.job}
        name={COMPANIES_WHERE_I_WORK.zitelia.name}
        technologies={COMPANIES_WHERE_I_WORK.zitelia.tecnologies}
      ></Company>
    </div>
  );
};

export default WorkingExperience;
