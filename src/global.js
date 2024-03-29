// 12 de enero de 2015.
export const WHEN_STARTED_TO_WORK = 2015;

// Usado para contar el tiempo en activo.
export const COUNT_TIME_BY = {
  years: "años",
  months: "meses",
  weeks: "semanas",
  days: "días",
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos",
};

export const MONTHS_NAMES = {
  es: [
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
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

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
    dateTo: "2023-01-31",
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
    dateTo: "2023-11-30", //{new Date()}
    current: false,
    job: "Desarrollador frontend",
    name: "LIS Data Solutions",
    color: "#00b1e2",
    tecnologies: [
      "React",
      "Redux",
      "Zustand",
      "NextJs",
      "GIT",
      "JavaScript",
      "TypeScript",
      "Formik",
      "Axios",
      "Tailwind CSS",
      "Python",
    ],
  },
  ingecid: {
    companyAsKey: "ingecid",
    dateFrom: "2023-12-01",
    dateTo: new Date(),
    current: true,
    job: "Desarrollador frontend",
    name: "Ingecid",
    color: "#212f40",
    tecnologies: ["React", "Redux", "Redux Toolkit", "TypeScript", "Axios"],
  },
};
