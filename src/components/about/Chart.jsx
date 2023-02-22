import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  seriesForChart,
  optionsForChart,
  whenStartedToWork,
} from "../../global";
import { getDaysWorked } from "../../helper";
import { useInterval } from "usehooks-ts";

const Chart = () => {
  const [seconds, setSeconds] = useState(getDaysWorked());

  useInterval(() => {
    setSeconds(seconds + 1);
  }, 1000);

  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="text-slate-600 dark:text-slate-400">
        <p>
          En esta gráfica puedes ver, de forma dividida por empresas, mis{" "}
          {seconds} segundos en activo desde que me inicié laboralmente como
          desarrollador en el año {whenStartedToWork}.
        </p>
        <ReactApexChart
          options={optionsForChart}
          series={seriesForChart}
          type="rangeBar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
