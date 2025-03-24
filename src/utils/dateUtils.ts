import { YEAR_STARTED_TO_WORK } from '../data/constants';

export const dateUtils = {
  /**
   * Calculate how old am I.
   * @returns {number} Years i have.
   */
  calculateYearsSinceBornDay: (): number => {
    const currentDate = new Date();
    const targetDate = new Date(1988, 7, 3); // 3 August --> Month: 7

    let yearsDifference = currentDate.getFullYear() - targetDate.getFullYear();

    const hasNotPassedBirthdayThisYear =
      currentDate.getMonth() < targetDate.getMonth() ||
      (currentDate.getMonth() === targetDate.getMonth() &&
        currentDate.getDate() < targetDate.getDate());

    if (hasNotPassedBirthdayThisYear) {
      yearsDifference--;
    }

    return yearsDifference;
  },

  /**
   * Get the number of years working since my first day.
   * @returns {number} Number of years
   */
  calculateYearsExperience: (): number => {
    return new Date().getFullYear() - YEAR_STARTED_TO_WORK;
  },

  /**
   * Get the difference in milliseconds between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Milliseconds difference from the date given.
   */
  getMillisecondsDiff: (date: Date): number => {
    const currentDate = new Date();
    return date.getTime() - currentDate.getTime();
  },
  /**
   * Get the difference in months between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Months difference from the date given.
   */
  dateDiffMonths: (date: Date): number => {
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
  dateDiffDays: (date: Date): number => {
    const daysDiff =
      dateUtils.getMillisecondsDiff(date) / (1000 * 60 * 60 * 24); // milliseconds in one day
    return Math.floor(daysDiff);
  },
  /**
   * Get the difference in hours between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Hours difference from the date given.
   */
  dateDiffHours: (date: Date): number => {
    const hoursDiff = dateUtils.getMillisecondsDiff(date) / (1000 * 60 * 60); // milliseconds in one hour
    return Math.floor(hoursDiff);
  },
  /**
   * Get the difference in minutes between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Minutes difference from the date given.
   */
  dateDiffMinutes: (date: Date): number => {
    const minutesDiff = dateUtils.getMillisecondsDiff(date) / (1000 * 60); // milliseconds in one minute
    return Math.floor(minutesDiff);
  },
  /**
   * Get the difference in seconds between a date and the current date.
   * @param {Date} date Date with the next format --> new Date("October 26, 1985 22:04:00").
   * @returns {number} Seconds difference from the date given.
   */
  dateDiffSeconds: (date: Date): number => {
    const secondsDiff = dateUtils.getMillisecondsDiff(date) / 1000; // milliseconds in a second
    return Math.floor(secondsDiff);
  },
};
