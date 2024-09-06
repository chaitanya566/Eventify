// CalendarTemplate.js
import CalendarGrid from "./CalendarGrid";
import PropTypes from "prop-types";
import {
  useContext,
  useState,
  calendarMonthContext,
  ModalForm,
} from "./index";
const defaultProject = {};

const CalendarTemplate = ({ project = defaultProject }) => {
  const currentDate = useContext(calendarMonthContext);

  const month = {
    month: currentDate.month,
    year: currentDate.year,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const openModal = (TempID) => {
    setSelectedDay(TempID);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };

  return (
    <>
      <CalendarGrid month={month} onDayClick={openModal} />
      <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        extraData={{ ID: selectedDay }}
      />
    </>
  );
};

CalendarTemplate.propTypes = {
  project: PropTypes.object,
};

export default CalendarTemplate;
