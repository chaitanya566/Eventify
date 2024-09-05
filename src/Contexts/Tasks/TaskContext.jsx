import { createContext, useReducer } from "react";
import { taskReducer } from "./taskReducer";
import PropTypes from "prop-types";
// Create context
export const TaskContext = createContext();

const initialState = {
  tasks: [],
};
// Context provider component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
