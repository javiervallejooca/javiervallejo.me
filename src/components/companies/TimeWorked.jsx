import { useState, useEffect } from "react";
import { MONTHS_NAMES } from "../../global";

const TimeWorked = ({ textDateFrom, textDateTo, current }) => {
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const dateFrom = new Date(textDateFrom);
  const dateTo = new Date(textDateTo);

  useEffect(() => {
    let monthsWorked =
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear());

    let i = 0;

    while (monthsWorked > 12) {
      monthsWorked = monthsWorked - 12;
      i++;
    }

    if (monthsWorked === 12) {
      i++;
      monthsWorked = 0;
    }

    setMonths(monthsWorked + 1);
    setYears(i);
  }, []);

  return (
    <div className="flex flex-col justify-end py-1 text-sm text-slate-500 dark:text-slate-500 sm:py-0">
      <div className="mb-0 flex justify-start sm:mb-1 sm:justify-end">
        <span className=" rounded-full bg-slate-300 px-2 py-1 text-slate-700 dark:bg-slate-400 dark:text-slate-700">
          {years > 0 && (
            <>
              {years} {years === 1 ? "año" : "años"}
              {","}
            </>
          )}{" "}
          {months} {months === 1 ? "mes" : "meses"}
        </span>
      </div>
      <div className="flex pt-1 sm:justify-end sm:pt-0">
        <div className="mr-1">
          {MONTHS_NAMES[dateFrom.getMonth()] + "/" + dateFrom.getFullYear()}
        </div>
        -
        <div className="ml-1">
          {current ? (
            <span className="font-bold text-slate-700 dark:text-slate-300">
              Actualmente
            </span>
          ) : (
            <>{MONTHS_NAMES[dateTo.getMonth()] + "/" + dateTo.getFullYear()} </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeWorked;
