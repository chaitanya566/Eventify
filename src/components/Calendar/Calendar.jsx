
import { useContext } from "react";
import CalendarTemplate from "../CalendarTemplate/CalendarTemplate";
import calendarMonthContext from "src/Contexts/calendarCurrentMonth/calendarMonthContext";
import "./calendar.css";

const project = {
  title: "Project Alpha",
  description: "A placeholder project description.",
};
const Calendar = () => {
  const currentDate = useContext(calendarMonthContext);
  return (
    <div>
      <h1>{currentDate.month} {currentDate.year}</h1>
      <div className="calendarNav">
        <button onClick={currentDate.previousMonth}>&lt;</button>
        <div className="month-display">Month Year</div>
        <button onClick={currentDate.nextMonth}>&gt;</button>
      </div>
      <CalendarTemplate project={project} />
    </div>
  );
};

export default Calendar;
