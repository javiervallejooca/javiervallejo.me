import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  SERIES_FOR_CHART,
  optionsForChart,
  WHEN_STARTED_TO_WORK,
} from "../../global";

import { getDaysWorked } from "../../helper";

import ReactApexChart from "react-apexcharts";
import { useInterval } from "usehooks-ts";

const Chart = () => {
  const { t } = useTranslation();

  const [seconds, setSeconds] = useState(getDaysWorked());

  useInterval(() => {
    setSeconds(seconds + 1);
  }, 1000);

  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="text-slate-600 dark:text-slate-400">
        <p>
          {t("graph_info", { seconds: seconds, year: WHEN_STARTED_TO_WORK })}
        </p>
        <ReactApexChart
          options={optionsForChart}
          series={SERIES_FOR_CHART}
          type="rangeBar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
