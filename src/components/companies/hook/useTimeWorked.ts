import { useEffect, useState } from 'react';

export const useTimeWorked = (
  textDateFrom: string,
  textDateTo: Date | string
) => {
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const dateFrom = new Date(textDateFrom);
  const dateTo = new Date(textDateTo);

  useEffect(() => {
    if (isNaN(dateFrom.getTime()) || isNaN(dateTo.getTime())) {
      console.error('Invalid date provided');
      return;
    }

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

  return { years, months, dateFrom, dateTo };
};
