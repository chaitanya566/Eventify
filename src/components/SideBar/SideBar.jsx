import ThemeDropdown from "src/components/ThemeSelection/ThemeDropdown";
import "./sideBar.css"; // Import your CSS file for styling
import "./Icons.css"
import links from "./links";

const YourComponent = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const handleDotClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="sideBarContainer">
      <header className="header">
        <h1>Eventify</h1>
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