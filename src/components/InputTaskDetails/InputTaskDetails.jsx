import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputTaskdetails.css"; // Separate CSS for the modal
import PropTypes from "prop-types";
import { useTasks } from "src/Contexts/Tasks/taskHooks";
import { TaskCategories } from "src/utils/TasksConfig.json";
import {
  handleOverlayClick,
  handleSubmit,
  addScrollListenerToCategoryBox,
} from "./utils_inputTask.js";

const ModalForm = ({ isOpen, onClose, extraData }) => {
  const [selectedCategory, setSelectedCategory] = useState("Task");
  const [taskDesc, setTaskDesc] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const categoryBoxRef = useRef(null);

  const { state, dispatch } = useTasks();
  useEffect(() => {
    const cleanupListener = addScrollListenerToCategoryBox(
      isOpen,
      categoryBoxRef
    );
    
    return cleanupListener;
  }, [isOpen]);

  const categories = TaskCategories;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      onClick={(e) => handleOverlayClick(e, onClose)}
    >
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Fill out the form</h2>

        <div className="category-boxes" ref={categoryBoxRef}>
          {categories.map((category) => (
            <div
              key={category}
              className={`category-box ${
                selectedCategory === category ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Enter Description"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          required
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a Deadline date"
        />

        <div className="button-group">
          <button
            onClick={(e) =>
              handleSubmit(e, {
                selectedCategory,
                taskDesc,
                selectedDate,
                extraData,
                dispatch,
                state,
                onClose,
                setSelectedCategory,
                setTaskDesc,
                setSelectedDate,
              })
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  extraData: PropTypes.object,
};

export default ModalForm;
