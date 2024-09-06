import Calendar from "./components/Calendar/Calendar";
import CalendarMonthReducer from "src/Contexts/calendarCurrentMonth/calendarMonthReducer";
import "src/assets/themes/dark-Theme/dark-theme.css";
import { TaskProvider } from "./Contexts/Tasks/TaskContext";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <TaskProvider>
          <CalendarMonthReducer>
            <Calendar />
          </CalendarMonthReducer>
        </TaskProvider>
        ;
      </div>
    </>
  );
}

export default App;

