import { useState } from "react";
import { useInterval } from "usehooks-ts";
import Company from "../companies/Company";

import {
  companiesWhereIWork,
  countTimeBy,
  whenStartedToWork,
} from "../../global";

const WorkingExperience = () => {
  const workingSince = new Date().getFullYear() - whenStartedToWork; //in years
  const [typeDate, setTypeDate] = useState(countTimeBy.years);
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
      case countTimeBy.years:
        setDate(workingSince * 12);
        setTypeDate(countTimeBy.months);
        setPlaying(false);
        break;
      case countTimeBy.months:
        setDate(parseInt(date * 4.345));
        setTypeDate(countTimeBy.weeks);
        setPlaying(false);
        break;
      case countTimeBy.weeks:
        setDate(date * 7);
        setTypeDate(countTimeBy.days);
        setPlaying(false);
        break;
      case countTimeBy.days:
        setDate(date * 24);
        setTypeDate(countTimeBy.hours);
        setPlaying(false);
        break;
      case countTimeBy.hours:
        setDate(date * 60);
        setTypeDate(countTimeBy.minutes);
        setPlaying(false);
        break;
      case countTimeBy.minutes:
        setDate(date * 60);
        setTypeDate(countTimeBy.seconds);
        setPlaying(true);
        break;
      case countTimeBy.seconds:
        setDate(workingSince);
        setTypeDate(countTimeBy.years);
        setPlaying(false);
        break;
      default:
        setDate(workingSince);
        setTypeDate(countTimeBy.years);
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
          Durante los últimos 2 años de la carrera he estado compaginando
          estudios y trabajo.
        </p>
        <p className="mb-4">
          Es decir, llevo{" "}
          <span
            onClick={handleDate}
            className="cursor-pointer bg-slate-600 px-1 text-slate-200 dark:bg-slate-400 dark:text-slate-800"
          >
            trabajando de forma continua durante los últimos {date} {typeDate}.
          </span>
        </p>
        <p className="mb-4">
          Este sería el <u>orden cronológico inverso</u> de las empresas donde
          he estado/estoy trabajando.
        </p>
      </div>

      <Company
        companyAsKey={companiesWhereIWork.iteisa.companyAsKey}
        current={companiesWhereIWork.iteisa.current}
        dateFrom={companiesWhereIWork.iteisa.dateFrom}
        dateTo={companiesWhereIWork.iteisa.dateTo}
        job={companiesWhereIWork.iteisa.job}
        name={companiesWhereIWork.iteisa.name}
        technologies={companiesWhereIWork.iteisa.tecnologies}
      ></Company>

      <Company
        companyAsKey={companiesWhereIWork.zitelia.companyAsKey}
        current={companiesWhereIWork.zitelia.current}
        dateFrom={companiesWhereIWork.zitelia.dateFrom}
        dateTo={companiesWhereIWork.zitelia.dateTo}
        job={companiesWhereIWork.zitelia.job}
        name={companiesWhereIWork.zitelia.name}
        technologies={companiesWhereIWork.zitelia.tecnologies}
      ></Company>
    </div>
  );
};

export default WorkingExperience;
