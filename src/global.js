import { convertMomentToDate } from "./helper";

// 12 de enero de 2015.
export const WHEN_STARTED_TO_WORK = 2015;

// Usado para contar el tiempo en activo.
export const COUNT_TIME_BY = {
  years: "años",
  months: "meses",
  weeks: "semanas",
  days: "dias",
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos",
};

export const MONTHS_NAMES = [
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

export const COMPANIES_WHERE_I_WORK = {
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
      "11ty",
      "WordPress",
      "PrestaShop",
      "PHP",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
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
    tecnologies: [
      "React",
      "Redux",
      "Zustand",
      "NextJS",
      "GIT",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Tailwind",
      "Python",
    ],
  },
};

export const SERIES_FOR_CHART = [
  // Zitelia
  {
    name: COMPANIES_WHERE_I_WORK.zitelia.name,
    data: [
      {
        x: "💻",
        y: [
          convertMomentToDate(COMPANIES_WHERE_I_WORK.zitelia.dateFrom),
          convertMomentToDate(COMPANIES_WHERE_I_WORK.zitelia.dateTo),
        ],
      },
    ],
  },
  // ITEISA
  {
    name: COMPANIES_WHERE_I_WORK.iteisa.name,
    data: [
      {
        x: "💻",
        y: [
          convertMomentToDate(COMPANIES_WHERE_I_WORK.iteisa.dateFrom),
          convertMomentToDate(COMPANIES_WHERE_I_WORK.iteisa.dateTo),
        ],
      },
    ],
  },
  // LIS Data Solutions
  {
    name: COMPANIES_WHERE_I_WORK.lis.name,
    data: [
      {
        x: "💻",
        y: [
          convertMomentToDate(COMPANIES_WHERE_I_WORK.lis.dateFrom),
          convertMomentToDate(COMPANIES_WHERE_I_WORK.lis.dateTo),
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
    COMPANIES_WHERE_I_WORK.zitelia.color.toString(),
    COMPANIES_WHERE_I_WORK.iteisa.color.toString(),
    COMPANIES_WHERE_I_WORK.lis.color.toString(),
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
      const fromYear = new Date(opts.y1).getFullYear();
      const toYear = new Date(opts.y2).getFullYear();

      return `<p className="p-4">Del ${fromYear} al ${toYear}</p>`;
    },
  },
};
