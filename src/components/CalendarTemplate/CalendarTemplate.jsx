
import { useContext } from "react";
import PropTypes from "prop-types";
import { generateCalendarDays } from "./generateCalendarDays";
import calendarConfig from "src/utils/calendarConfig.json";
import calendarMonthContext from "src/Contexts/calendarCurrentMonth/calendarMonthContext";
import "./calendarTemplate.css";

const defaultProject = {};

const CalendarTemplate = ({ project = defaultProject }) => {


  const currentDate = useContext(calendarMonthContext);
  console.log(project)
  const month = {
    // gotta convert to useState sometime soon
    month: currentDate.month,
    year: currentDate.year,
  };

  const { calendarDays, dayCounterPrevMonth, daysInMonth } =
    generateCalendarDays(month);

  return (
    <>
      <div className="calendar-grid">
        {calendarConfig.daysOfWeek.map((day, index) => (
          <div key={index} className="day-name">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => {
          let className = "calendar-day";

          // Add special class for days from the previous month
          if (index < dayCounterPrevMonth) {
            className += " not-current-month";
          }
          // Add special class for days from the next month
          if (index >= dayCounterPrevMonth + daysInMonth) {
            className += " not-current-month";
          }

          return (
            <div key={index} className={className}>
              {day ? day : ""}
            </div>
          );
        })}
      </div>
    </>
  );
};

// Adding PropTypes validation
CalendarTemplate.propTypes = {
  project: PropTypes.object,
};

export default CalendarTemplate;
