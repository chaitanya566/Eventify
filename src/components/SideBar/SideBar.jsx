import ThemeDropdown from "src/components/ThemeSelection/ThemeDropdown";
import "./sideBar.css";
import "./Icons.css"
import links from "./links";
import { downloadData } from "./download";
import { useTasks } from "../CalendarTemplate";

const YourComponent = () => {
  const { state } = useTasks();
    console.log(state);
  const initialState = {
    tasks: [],
  };

  const handleButtonClick = () => {
    if (state.length === initialState.tasks.length) {
      alert("No tasks available. The data is empty.");
    } else {
      console.log("Button clicked!");
      downloadData(state);
    }
  };

  const handleDotClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="sideBarContainer">
      <header className="header">
        <h1 id="headerName">Eventify</h1>
      </header>
      <main className="main-content">
        <button onClick={handleButtonClick} id="download-UserData">Download User Data</button>
        <h3>Select a Theme!</h3>
        <ThemeDropdown />
      </main>
      <footer className="footer">
        <div className="dots">
          <div
            className="dot Github"
            onClick={() => handleDotClick(links.github)}
          ></div>
          <div
            className="dot LinkedIn"
            onClick={() => handleDotClick(links.linkedin)}
          ></div>
        </div>
      </footer>
    </div>
  );
};

export default YourComponent;