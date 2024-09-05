// import "./App.css";
import React, { useState } from "react";
import ModalForm from "./components/InputTaskDetails/InputTaskDetails";
import Calendar from "./components/Calendar/Calendar";
import CalendarMonthReducer from "src/Contexts/calendarCurrentMonth/calendarMonthReducer";
// import "src/assets/themes/neon-blue-theme.css";
import { TaskProvider } from "./Contexts/Tasks/TaskContext";
import "./App.css";

function App() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
  // <div className="app-container">
  //   <button onClick={addTask}>Add Task</button>
  //   {state.tasks.map((task) => (
  //     <TaskDot key={task.id} task={task} />
  //   ))}
  // </div>;
  return (
    <>
      <div className="App">
        <div className="app-container">
          <div className="open-modal-btn" onClick={openModal}>
            Open Form
          </div>

          {/* ModalForm Component */}
          <ModalForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </>
  );
}

export default App;
        // <TaskProvider>
        //   <CalendarMonthReducer>
        //     <Calendar />
        //   </CalendarMonthReducer>
        // </TaskProvider>;