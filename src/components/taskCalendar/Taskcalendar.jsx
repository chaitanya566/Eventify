import "./taskCalendar.css";
import PropTypes from "prop-types";
const TaskDot = ({ task }) => {
  const { description, deadline, type, completed } = task;

  const getTypeStyles = () => {
    switch (type) {
      case "Event":
        return { backgroundImage: "url(src/assets/react.svg)" };
      case "Important":
        return { backgroundImage: "url(src/assets/react.svg)" };
      // Add cases for other types if needed
      default:
        return { backgroundColor: "#007bff" }; // Default color
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
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        deadline: PropTypes.instanceOf(Date).isRequired,
        type: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
};
export default TaskDot;
