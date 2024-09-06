import "./taskCalendar.css";
import PropTypes from "prop-types";
import { useTasks } from "src/Contexts/Tasks/taskHooks";
import calenderConfig from "src/utils/calendarConfig.json"

const TaskList = ({ ID }) => {
  const { state } = useTasks(); // use the tasks from state

  console.log(state); // Ensure state has the expected structure { tasks: [...] }

  // Access the tasks array in state
  if (!Array.isArray(state.tasks)) {
    return <p>Error: Tasks is not an array</p>;
  }

  const monthNames = calenderConfig.monthNames;

  const [dayString, monthString] = ID.split("-");
  const day = parseInt(dayString, 10);
  const monthIndex = monthNames.indexOf(monthString);

  // Correctly use state.tasks.filter to filter the tasks based on day and month
  const filteredTasks = state.tasks.filter((task) => {
    const taskDate = new Date(task.deadline);
    return taskDate.getDate() === day && taskDate.getMonth() === monthIndex;
  });

return (
  <div>
    {filteredTasks.length > 0 &&
      filteredTasks.map((task, index) => (
        <TaskDot key={task.id + index} task={task} />
      ))}
  </div>
);
};


TaskList.propTypes = {
  ID: PropTypes.string.isRequired,
};

const TaskDot = ({ task }) => {
  const { description, deadline, type, completed } = task;

  const getTypeStyles = () => {
    switch (type) {
      case "Event":
        return { backgroundImage: "url(src/assets/react.svg)" };
      case "Important":
        return { backgroundImage: "url(src/assets/react.svg)" };
      default:
        return { backgroundColor: "#007bff" };
    }
  };

  return (
    <div className="task-dot-container">
      <div
        className="task-dot"
        title={description}
        style={getTypeStyles()}
      ></div>
      <div className="task-details">
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Deadline:</strong> {deadline.toDateString()}
        </p>
        <p>
          <strong>Type:</strong> {type}
        </p>
        <p>
          <strong>Completed:</strong> {completed ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

// PropTypes validation
TaskDot.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    deadline: PropTypes.instanceOf(Date).isRequired, // Deadline is a Date instance
    type: PropTypes.string.isRequired, // Type is a string
    completed: PropTypes.bool.isRequired, // Completed is a boolean
  }).isRequired, // Task prop is required
};
export default TaskList;
