
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
      <div className="Nav">
        <div className="calendarNav">
          <button className="monthChange " onClick={currentDate.previousMonth}>
            &lt;
          </button>
          <div className="month-display">{currentDate.month}</div>
          <button className="monthChange " onClick={currentDate.nextMonth}>
            &gt;
          </button>
        </div>
        <div className="year-display">{currentDate.year}</div>
      </div>
      <CalendarTemplate project={project} />
    </div>
  );
};

export default Calendar;
