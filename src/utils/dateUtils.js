export const dateUtils = {
  /**
   * Get the difference in milliseconds between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number}  Milliseconds difference from the date given.
   */
  getMillisecondsDiff: (date) => {
    const currentDate = new Date();
    return date.getTime() - currentDate.getTime();
  },
  /**
   * Get the difference in months between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Months difference from the date given.
   */
  dateDiffMonths: (date) => {
    const currentDate = new Date();
    const yearDiff = currentDate.getFullYear() - date.getFullYear();
    const monthDiff = date.getMonth() - currentDate.getMonth();
    const months = yearDiff * 12 + monthDiff;

    return months;
  },
  /**
   * Get the difference in days between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Days difference from the date given.
   */
  dateDiffDays: (date) => {
    const daysDiff =
      dateUtils.getMillisecondsDiff(date) / (1000 * 60 * 60 * 24); // milliseconds in one day
    return Math.floor(daysDiff);
  },
  /**
   * Get the difference in hours between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Hours difference from the date given.
   */
  dateDiffHours: (date) => {
    const hoursDiff = dateUtils.getMillisecondsDiff(date) / (1000 * 60 * 60); // milliseconds in one hour
    return Math.floor(hoursDiff);
  },
  /**
   * Get the difference in minutes between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Minutes difference from the date given.
   */
  dateDiffMinutes: (date) => {
    const minutesDiff = dateUtils.getMillisecondsDiff(date) / (1000 * 60); // milliseconds in one minute
    return Math.floor(minutesDiff);
  },
  /**
   * Get the difference in seconds between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Seconds difference from the date given.
   */
  dateDiffSeconds: (date) => {
    const secondsDiff = dateUtils.getMillisecondsDiff(date) / 1000; // milliseconds in a second
    return Math.floor(secondsDiff);
  },
  /**
   * Get how many months, days, hourse, minutes and seconds until the date "arrives" to zero.
   * We have too a boolean to check if the current date "is bigger" than the event date.
   * @param date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {object} Object with properties (month, days, hours, minutes, seconds, currentDateIsAfterEventDate) to get how much time remains to the given date
   */
  dateDiffsWithDate: (date) => {
    const currentDate = new Date();

    // Difference in years, months, days, hours, minutes and seconds
    let yearDiff = date.getFullYear() - currentDate.getFullYear();
    let monthDiff = date.getMonth() - currentDate.getMonth();
    let dayDiff = date.getDate() - currentDate.getDate();
    let hourDiff = date.getHours() - currentDate.getHours();
    let minuteDiff = date.getMinutes() - currentDate.getMinutes();
    let secondDiff = date.getSeconds() - currentDate.getSeconds();
    let currentDateIsAfterEventDate = currentDate >= date;

    // Checking the differences to be positives
    if (secondDiff < 0) {
      secondDiff += 59;
      minuteDiff--;
    }
    if (minuteDiff < 0) {
      minuteDiff += 59;
      hourDiff--;
    }
    if (hourDiff < 0) {
      hourDiff += 23;
      dayDiff--;
    }
    if (dayDiff < 0) {
      const lastDayOfMonth = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();
      dayDiff += lastDayOfMonth;
      monthDiff--;
    }
    if (monthDiff < 0) {
      monthDiff += 12;
      yearDiff--;
    }

    return {
      months: monthDiff,
      days: dayDiff,
      hours: hourDiff,
      minutes: minuteDiff,
      seconds: secondDiff,
      currentDateIsAfterEventDate: currentDateIsAfterEventDate,
    };
  },
};
