// CalendarGrid.js
import { generateCalendarDays, calendarConfig, TaskList } from "./index.js";
import PropTypes from "prop-types";
const CalendarGrid = ({ month, onDayClick }) => {
  const { calendarDays, dayCounterPrevMonth, daysInMonth } =
    generateCalendarDays(month);

  function getNextMonth(currentMonth) {
    const monthNames = calendarConfig.monthNames;
    const currentIndex = monthNames.indexOf(currentMonth);
    return currentIndex === -1 || currentIndex === monthNames.length - 1
      ? monthNames[0]
      : monthNames[currentIndex + 1];
  }

  return (
    <div className="calendar-grid">
      {calendarConfig.daysOfWeek.map((day, index) => (
        <div key={index} className="day-name">
          {day}
        </div>
      ))}
      {calendarDays.map((day, index) => {
        let className = "calendar-day";
        let TempID = `${day}-${month.month}`;
        if (index < dayCounterPrevMonth) {
          className += " not-current-month";
        }
        if (index >= dayCounterPrevMonth + daysInMonth) {
          className += " not-current-month";
          TempID = `${day}-${getNextMonth(month.month)}`;
        }

        return (
          <div
            key={index}
            className={className}
            id={TempID}
            onClick={() => onDayClick(TempID)}
          >
            <p className="date-info">{day ? day : ""}</p>
            <TaskList ID={TempID} />
          </div>
        );
      })}
    </div>
  );
};

CalendarGrid.propTypes = {
  month: PropTypes.shape({
    month: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  onDayClick: PropTypes.func.isRequired,
};

export default CalendarGrid;
