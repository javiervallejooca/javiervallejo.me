import { convertMomentToDate } from "./helper";

// 12 de enero de 2015.
export const whenStartedToWork = 2015;

// Usado para contar el tiempo en activo.
export const countTimeBy = {
  years: "años",
  months: "meses",
  weeks: "semanas",
  days: "dias",
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos",
};

export const monthsNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const companiesWhereIWork = {
  zitelia: {
    companyAsKey: "zitelia",
    dateFrom: "2015-01-21",
    dateTo: "2021-05-01",
    current: false,
    job: "Desarrollador de software",
    name: "Zitelia",
    color: "#ffb50a",
    tecnologies: [
      "C#",
      "WordPress",
      "PrestaShop",
      "SEO",
      "PHP",
      "JavaScript",
      "jQuery",
      "CodeIgniter",
      "Bootstrap",
      "MySQL",
      "SVN",
    ],
  },
  iteisa: {
    companyAsKey: "iteisa",
    dateFrom: "2021-05-01",
    dateTo: "2023-01-31", //{new Date()}
    current: false,
    job: "Desarrollador de software",
    name: "ITEISA",
    color: "#af1685",
    tecnologies: [
      "React",
      "Next.js",
      "11ty",
      "WordPress",
      "PrestaShop",
      "PHP",
      "JavaScript",
      "Tailwind CSS",
      "Boostrap",
      "GIT",
    ],
  },
  lis: {
    companyAsKey: "lis",
    dateFrom: "2023-02-06",
    dateTo: new Date(),
    current: true,
    job: "Desarrollador frontend",
    name: "LIS Data Solutions",
    color: "#00b1e2",
    tecnologies: ["React", "Next.js", "GIT", "JavaScript", "Boostrap"],
  },
};

export const seriesForChart = [
  // Zitelia
  {
    name: companiesWhereIWork.zitelia.name,
    data: [
      {
        x: "💻",
        y: [
          convertMomentToDate(companiesWhereIWork.zitelia.dateFrom),
          convertMomentToDate(companiesWhereIWork.zitelia.dateTo),
        ],
      },
    ],
  },
  // ITEISA
  {
    name: companiesWhereIWork.iteisa.name,
    data: [
      {
        x: "💻",
        y: [
          convertMomentToDate(companiesWhereIWork.iteisa.dateFrom),
          convertMomentToDate(companiesWhereIWork.iteisa.dateTo),
        ],
      },
    ],
  },
  // LIS Data Solutions
  {
    name: companiesWhereIWork.lis.name,
    data: [
      {
        x: "💻",
        y: [
          convertMomentToDate(companiesWhereIWork.lis.dateFrom),
          convertMomentToDate(companiesWhereIWork.lis.dateTo),
        ],
      },
    ],
  },
];

export const optionsForChart = {
  chart: {
    height: 350,
    width: 850,
    type: "rangeBar",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "75%",
      rangeBarGroupRows: true,
    },
  },
  colors: [
    companiesWhereIWork.zitelia.color.toString(),
    companiesWhereIWork.iteisa.color.toString(),
    companiesWhereIWork.lis.color.toString(),
  ],
  fill: {
    type: "solid",
  },
  xaxis: {
    type: "datetime",
  },
  legend: {
    position: "right",
  },
  tooltip: {
    custom: function (opts) {
      console.log(opts);
      const fromYear = new Date(opts.y1).getFullYear();
      const toYear = new Date(opts.y2).getFullYear();

      return `<p className="p-4">Del ${fromYear} al ${toYear}</p>`;
    },
  },
};
