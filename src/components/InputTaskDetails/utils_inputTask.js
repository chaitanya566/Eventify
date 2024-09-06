// utility functions

/**
 * Handles overlay click to close the modal
 * @param {Event} e - Event triggered when user clicks on the overlay
 * @param {Function} onClose - Callback to close the modal
 */

export const handleOverlayClick = (e, onClose) => {
  if (e.target.classList.contains("modal-overlay")) {
    onClose();
  }
};

/**
 * Submits the task form data
 * @param {Event} e - Form submit event
 * @param {Object} options - Various form data and handlers
 */
export const handleSubmit = (
  e,
  {
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
  }
) => {
  e.preventDefault();

  console.log({ selectedCategory, taskDesc, selectedDate, extraData });
  const Task = {
    id: Date.now,
    description: taskDesc,
    deadline: selectedDate,
    type: selectedCategory,
    completed: false,
  };


  dispatch({ type: "ADD_TASK", payload: Task });
  setSelectedCategory("Task");
  setTaskDesc("");
  setSelectedDate(null);
  console.log("tasks: ");
  console.log(state);
  onClose();
};

/**
 * Adds or removes the wheel scroll event listener to a given category box
 * @param {Boolean} isOpen - Whether the modal is open or not
 * @param {RefObject} categoryBoxRef - Ref to the category box DOM element
 */
export const addScrollListenerToCategoryBox = (isOpen, categoryBoxRef) => {
  const categoryBox = categoryBoxRef.current;
  if (categoryBox) {
    const handleWheelScroll = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        categoryBox.scrollLeft += event.deltaY;
      }
    };

    if (isOpen) {
      categoryBox.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      categoryBox.removeEventListener("wheel", handleWheelScroll);
    };
  }
};
