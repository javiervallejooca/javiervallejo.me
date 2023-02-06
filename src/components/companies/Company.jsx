import Iteisa from "./descriptionCompanies/Iteisa";
import Lis from "./descriptionCompanies/Lis";
import Technologies from "./Technologies";
import TimeWorked from "./TimeWorked";
import Zitelia from "./descriptionCompanies/Zitelia";

import { companiesWhereIWork } from "../../global.js";

const Company = ({
  companyAsKey,
  current,
  dateFrom,
  dateTo,
  job,
  name,
  technologies,
}) => {
  return (
    <div className="mb-4 flex flex-col rounded border border-slate-200 bg-slate-200 p-4 text-white shadow dark:border-slate-800 dark:bg-slate-800  dark:text-black">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col justify-center">
          <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
            {name}
          </div>
          <div className="text-sm italic text-slate-400 dark:text-slate-500">
            {job}
          </div>
        </div>
        <TimeWorked
          textDateFrom={dateFrom}
          textDateTo={dateTo}
          current={current}
        />
      </div>
      <div className="mt-4 mb-1 text-slate-600 dark:text-slate-400">
        {companyAsKey === companiesWhereIWork.lis.companyAsKey && <Lis />}
        {companyAsKey === companiesWhereIWork.iteisa.companyAsKey && <Iteisa />}
        {companyAsKey === companiesWhereIWork.zitelia.companyAsKey && (
          <Zitelia />
        )}
      </div>
      <Technologies technologies={technologies} />
    </div>
  );
};

export default Company;
