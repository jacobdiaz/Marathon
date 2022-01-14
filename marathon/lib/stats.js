// get the current date/time
// TODO change currentDate to Date.now()
// Todo incorrect calculating of current week
export const currentDate = new Date("08/30/2022"); //! TESTING
export const startDate = new Date("05/30/2022"); // start
export const endDate = new Date("10/09/2022"); // end

// get amount of days between two dates
export const daysTilMarathon = (endDate - currentDate) / (1000 * 60 * 60 * 24);
export const daysTrained = (currentDate - startDate) / (1000 * 60 * 60 * 24);
export const totalTrainingdays = (endDate - startDate) / (1000 * 60 * 60 * 24);

// Training stats returns the an integer number of the day, week, and month
export const currentTrainingDay = currentDate.getDay(); // 1-7
export const currentTrainingWeek = Math.floor(daysTrained / 7) + 1; // 1-18
export const currentTrainingMonth = Math.floor(daysTrained / 30); // 1-4

// Percentages
export const percentCompleted = `${Math.round((daysTrained / totalTrainingdays) * 100)}%`;
export const percentRemaining = `${Math.round((daysTilMarathon / totalTrainingdays) * 100)}%`;

// Returns the date of the first day of the current week
export function addWeeks(weeks, additionalDays) {
  let d = new Date(startDate); // copy startDate
  weeks > 1 ? d.setDate(d.getDate() + weeks * 7 + additionalDays) : d.setDate(startDate.getDate() + additionalDays); // Add all days since start date
  let result = formatDate(d); // format the date to a string thats nice
  return result;
}

// let string = addWeeks(currentTrainingWeek, startDate);
export function addDays(days, date = new Date()) {
  days > 1 ? date.setDate(date.getDate() + days) : date.setDate(startDate.getDate());
  return formatDate(date);
}

export function formatDate(date) {
  let fDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    // year: "numeric",
  });
  return fDate; // String that looks like: April 12, 2002
}

export function getWeekDateRange(week) {
  let start = addWeeks(week, 0);
  let end = addWeeks(week, 7);
  return `${start} - ${end}`;
}

// Turn a training day number (1-7) into a weekday (mon-fri)
export const dayNumToWeekday = (dayNum) => {
  switch (dayNum) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "";
  }
};
