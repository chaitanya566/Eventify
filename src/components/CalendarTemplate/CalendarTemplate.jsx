
import { useContext } from "react";
import PropTypes from "prop-types";
import { generateCalendarDays } from "./generateCalendarDays";
import calendarConfig from "src/utils/calendarConfig.json";
import calendarMonthContext from "src/Contexts/calendarCurrentMonth/calendarMonthContext";
import "./calendarTemplate.css";
import TaskDot from "src/components/taskCalendar/Taskcalendar";
import { useTasks } from "src/Contexts/Tasks/taskHooks";
const defaultProject = {};

const CalendarTemplate = ({ project = defaultProject }) => {
    const { state, dispatch } = useTasks();
    const addTask = () => {
      const task1 = {
        id: 1,
        description: "Attend project meeting",
        deadline: new Date("2024-09-10"),
        type: "Birthday",
        completed: false,
      };

      const task2 = {
        id: 2,
        description: "Submit report",
        deadline: new Date("2024-09-15"),
        type: "Important",
        completed: true,
      };
      console.log(state);
      dispatch({ type: "ADD_TASK", payload: task1 });
      dispatch({ type: "ADD_TASK", payload: task2 });
      console.log(state);
    };

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
              {/* <button onClick={addTask}>Add Task</button>
              {state.tasks.map((task) => (
                <TaskDot key={task.id} task={task} />
              ))} */}
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
