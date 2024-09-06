import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { generateCalendarDays } from "./generateCalendarDays";
import calendarConfig from "src/utils/calendarConfig.json";
import calendarMonthContext from "src/Contexts/calendarCurrentMonth/calendarMonthContext";
import "./calendarTemplate.css";
import TaskList from "src/components/taskCalendar/Taskcalendar";
import { useTasks } from "src/Contexts/Tasks/taskHooks";
import ModalForm from "../InputTaskDetails/InputTaskDetails";

const defaultProject = {};

const CalendarTemplate = ({ project = defaultProject }) => {
  const { state, dispatch } = useTasks();
  
function getNextMonth(currentMonth) {
  // Find the index of the current month
  const monthNames = calendarConfig.monthNames;
  const currentIndex = monthNames.indexOf(currentMonth);
  
  // If the month is not found or is December, return the first month
  if (currentIndex === -1 || currentIndex === monthNames.length - 1) {
    return monthNames[0];
  }
  
  // Get the next month
  return monthNames[currentIndex + 1];
}
  const currentDate = useContext(calendarMonthContext);

  const month = {
    month: currentDate.month,
    year: currentDate.year,
  };
  console.log(month)

  const { calendarDays, dayCounterPrevMonth, daysInMonth } =
    generateCalendarDays(month);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const openModal = (TempID) => {
    setSelectedDay(TempID);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };

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
          let TempID = `${day}-${month.month}`;
          // Add special class for days from the previous month
          if (index < dayCounterPrevMonth) {
            className += " not-current-month";

          }
          // Add special class for days from the next month
          if (index >= dayCounterPrevMonth + daysInMonth) {
            className += " not-current-month";
            TempID = `${day}-${getNextMonth(month.month)}`;
          }

          return (
            <div
              key={index}
              className={className}
              id={TempID}
              onClick={() => openModal(TempID)}
            >
              {day ? day : ""}
              <TaskList ID={TempID} />
            </div>
          );
        })}
      </div>
      <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        extraData={{ ID: selectedDay }}
      />
    </>
  );
};
CalendarTemplate.propTypes = {
  project: PropTypes.object,
};

export default CalendarTemplate;
