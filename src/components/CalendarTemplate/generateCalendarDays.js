//generateCalendarDays.js
export const generateCalendarDays = ({ month, year }) => {
  const firstDayOfMonth = new Date(
    year,
    new Date(Date.parse(`${month} 1, ${year}`)).getMonth(),
    1
  );

  // Get the number of days in the current month
  const daysInMonth = new Date(
    year,
    firstDayOfMonth.getMonth() + 1,
    0
  ).getDate();

  // Calculate the number of days in the previous month
  const previousMonth = new Date(year, firstDayOfMonth.getMonth(), 0);
  const daysInPreviousMonth = previousMonth.getDate();

  const calendarDays = [];

  // Add days from the previous month to fill the startDay slots
  let dayCounterPrevMonth = 0;
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    calendarDays.push(daysInPreviousMonth - firstDayOfMonth.getDay() + i + 1);
    dayCounterPrevMonth++;
  }
  // Add the days of the current month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  let dayCounterNextMonth = 1;
  while (calendarDays.length < 42) {
    calendarDays.push(dayCounterNextMonth++);
  }

  return {
    calendarDays,
    dayCounterPrevMonth,
    daysInMonth,
  };
};
