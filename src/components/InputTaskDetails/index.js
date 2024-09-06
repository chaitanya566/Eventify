// index.js

// React and hooks
export { useEffect, useState, useRef } from "react";

// ReactDOM for portal rendering
export { default as ReactDOM } from "react-dom";

// DatePicker component
export { default as DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Styles for the DatePicker

// CSS for modal
import "./inputTaskdetails.css"; // Separate CSS for the modal

// PropTypes for type checking
export { default as PropTypes } from "prop-types";

// Task context hooks
export { useTasks } from "src/Contexts/Tasks/taskHooks";

// Task categories
export { TaskCategories } from "src/utils/TasksConfig.json";

// Utility functions for handling overlay clicks, form submission, and scroll listener
export {
  handleOverlayClick,
  handleSubmit,
  addScrollListenerToCategoryBox,
} from "./utils_inputTask.js";
