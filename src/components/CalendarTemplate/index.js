// index.js

// React imports
export { useContext, useState } from "react";

// PropTypes
export { default as PropTypes } from "prop-types";

// Calendar-related imports
export { generateCalendarDays } from "./generateCalendarDays";
export { default as calendarConfig } from "src/utils/calendarConfig.json";
export { default as calendarMonthContext } from "src/Contexts/calendarCurrentMonth/calendarMonthContext";

// Task-related imports
export { default as TaskList } from "src/components/taskCalendar/Taskcalendar";
export { useTasks } from "src/Contexts/Tasks/taskHooks";

// Modal form
export { default as ModalForm } from "../InputTaskDetails/InputTaskDetails";

// CSS import
import "./calendarTemplate.css";
