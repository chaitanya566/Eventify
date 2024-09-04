// import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import CalendarMonthReducer from "src/Contexts/calendarCurrentMonth/calendarMonthReducer";
function App() {

  return (
    <>
      <div className="App">
        <CalendarMonthReducer>
          <Calendar />
        </CalendarMonthReducer>
      </div>
    </>
  );
}

export default App;
