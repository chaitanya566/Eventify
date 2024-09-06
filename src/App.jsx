// import "./App.css";
import React, { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import CalendarMonthReducer from "src/Contexts/calendarCurrentMonth/calendarMonthReducer";
import "src/assets/themes/dark-theme.css";
import { TaskProvider } from "./Contexts/Tasks/TaskContext";
import "./App.css";

function App() {

  // <div className="app-container">
  //   <button onClick={addTask}>Add Task</button>
  //   {state.tasks.map((task) => (
  //     <TaskDot key={task.id} task={task} />
  //   ))}
  // </div>;
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

