import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputTaskdetails.css"; // Separate CSS for the modal

const ModalForm = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("Task"); // Default value "Task"
  const [input2, setInput2] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const categoryBoxRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Does nothing for now
    console.log({ selectedCategory, input2, selectedDate }); // Just logging values for now
  };

  useEffect(() => {
    const categoryBox = categoryBoxRef.current;
    if (categoryBox) {
      const handleWheelScroll = (event) => {
        // Check if scroll is vertical and prevent default behavior only when necessary
        if (event.deltaY !== 0) {
          event.preventDefault();
          categoryBox.scrollLeft += event.deltaY; // Scroll horizontally using the vertical scroll delta
        }
      };

      categoryBox.addEventListener("wheel", handleWheelScroll);

      return () => {
        categoryBox.removeEventListener("wheel", handleWheelScroll); // Clean up the event listener
      };
    }
  }, []);

  const categories = ["Task", "Important", "Birthday", "Event", "Celebration"];

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Fill out the form</h2>

        {/* Category Selection */}
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
          placeholder="Input 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a date"
        />

        <div className="button-group">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalForm;
