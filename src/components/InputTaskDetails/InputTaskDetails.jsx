// InputTaskDetails.jsx
import {
  useEffect,
  useState,
  useRef,
  ReactDOM,
  DatePicker,
  PropTypes,
  useTasks,
  TaskCategories,
  handleOverlayClick,
  handleSubmit,
  addScrollListenerToCategoryBox,
  Tooltip,
} from "./index";

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
        <button className="close-btn" onClick={onClose}></button>
        <h2 className="task-input-header">Enter the Task Details</h2>

        <div className="category-boxes" ref={categoryBoxRef}>
          {categories.map((category) => (
            <div
              key={category}
              data-text={category}
              className={`category-box ${category} ${
                selectedCategory === category ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            ></div>
          ))}
          <Tooltip />
        </div>

        <input
          type="text"
          placeholder="Enter Description"
          value={taskDesc}
          className="task-desc-input"
          onChange={(e) => setTaskDesc(e.target.value)}
          required
        />
        <DatePicker
          selected={selectedDate}
          className="task-date-input"
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a Deadline date"
        />

        <div className="button-group">
          <button
            className="task-submit"
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
