import Calendar from "./components/Calendar/Calendar";
import CalendarMonthReducer from "./Contexts/calendarCurrentMonth/CalendarMonthReducer";
import "src/assets/themes/dark-Theme/dark-theme.css";
import { TaskProvider } from "./Contexts/Tasks/TaskContext";
import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import ThemeDropdown from "./components/ThemeSelection/ThemeDropdown";

function App() {
  return (
    <>
      <div className="App">
        <TaskProvider>
          <CalendarMonthReducer>
            <div className="layout">
              <SideBar />
              <div className="calendar-container">
                <Calendar />
              </div>
            </div>
          </CalendarMonthReducer>
        </TaskProvider>
      </div>
    </>
  );
}

export default App;
