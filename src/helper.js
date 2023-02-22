import moment from "moment/moment";

/**
 * @description Función usada en el global.js para pasar un fecha de la librería moment a la fecha de JavaScript.
 *
 * @param {string} date Fecha de inicio o fin de la barra del gráfico, debe tener el formato --> YYYY-MM-DD
 * @returns
 */
export const convertMomentToDate = (date = moment()) => {
  const momentDate = moment(date, "YYYY-MM-DD");
  const myDate = momentDate.toDate(); // Lo convertimos a objeto Date de JS.
  return myDate.getTime();
};

/**
 * @description Devuelve la cantidad de segundos trabajados desde mi primer día en Zitelia.
 */
export const getDaysWorked = () => {
  let today = moment(new Date());
  let startDate = moment("2015-01-12");
  let duration = moment.duration(today.diff(startDate));
  let seconds = duration.asSeconds();
  return parseInt(seconds);
};
