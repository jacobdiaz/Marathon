// get the current date/time
export const currentDate = new Date("09/13/2022"); //! TESTING
export const startDate = new Date("06/05/2022"); // start
export const endDate = new Date("10/09/2022"); // end

// get amount of days between two dates
export const daysTilMarathon = (endDate - currentDate) / (1000 * 60 * 60 * 24);
export const daysTrained = (currentDate - startDate) / (1000 * 60 * 60 * 24);
export const totalTrainingdays = (endDate - startDate) / (1000 * 60 * 60 * 24);

// Training stats returns the an integer number of the day, week, and month
export const currentTrainingDay = currentDate.getDay(); // 1-7
export const currentTrainingWeek = Math.floor(daysTrained / 7); // 1-18
export const currentTrainingMonth = Math.floor(daysTrained / 30); // 1-4

// Percentages
export const percentCompleted = `${Math.round((daysTrained / totalTrainingdays) * 100)}%`;
export const percentRemaining = `${Math.round((daysTilMarathon / totalTrainingdays) * 100)}%`;
