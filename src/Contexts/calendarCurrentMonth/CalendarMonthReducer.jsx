//CalendarMonthReducer.jsx
import  { useReducer } from "react";
import PropTypes from "prop-types";
import calendarMonthContext from "./calendarMonthContext";
import calendarConfig from "src/utils/calendarConfig.json";
const date = new Date();
const monthNames = calendarConfig.monthNames;

const initialState = {
  month: monthNames[date.getMonth()],
  year: date.getFullYear(),
};

const ACTIONS = {
  NEXT_MONTH: "NEXT_MONTH",
  PREVIOUS_MONTH: "PREVIOUS_MONTH",
  SET_MONTH: "SET_MONTH",
};

const calendarReducer = (state, action) => {
  const currentMonthIndex = calendarConfig.monthNames.indexOf(state.month);

  switch (action.type) {
    case ACTIONS.NEXT_MONTH: {
      const nextMonthIndex = (currentMonthIndex + 1) % 12;
      const nextYear = nextMonthIndex === 0 ? state.year + 1 : state.year;
      return {
        ...state,
        month: calendarConfig.monthNames[nextMonthIndex],
        year: nextYear,
      };
    }
    case ACTIONS.PREVIOUS_MONTH: {
      const previousMonthIndex = (currentMonthIndex - 1 + 12) % 12;
      const previousYear =
        previousMonthIndex === 11 ? state.year - 1 : state.year;
      return {
        ...state,
        month: calendarConfig.monthNames[previousMonthIndex],
        year: previousYear,
      };
    }
    case ACTIONS.SET_MONTH: {
      const { month, year } = action.payload;
      return {
        ...state,
        month: month,
        year: year,
      };
    }
    default:
      return state;
  }
};

const CalendarMonthReducer = ({ children }) => {
  const [state, dispatch] = useReducer(calendarReducer, initialState);

  // Action dispatchers
  const nextMonth = () => dispatch({ type: ACTIONS.NEXT_MONTH });
  const previousMonth = () => dispatch({ type: ACTIONS.PREVIOUS_MONTH });
  const setMonth = (month, year) =>
    dispatch({ type: ACTIONS.SET_MONTH, payload: { month, year } });

  return (
    <calendarMonthContext.Provider
      value={{ ...state, nextMonth, previousMonth, setMonth }}
    >
      {children}
    </calendarMonthContext.Provider>
  );
};

CalendarMonthReducer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CalendarMonthReducer;
