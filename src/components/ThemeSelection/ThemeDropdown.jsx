import React, { useState, useEffect, useRef } from "react";
import "./ThemeDropdown.css";
import themes from "src/utils/themes.json";
import themeStyles from "./themeStyles";

const ThemeDropdown = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const currentStyleRef = useRef(null);

  useEffect(() => {
    const removeCurrentStyle = () => {
      if (currentStyleRef.current) {
        document.head.removeChild(currentStyleRef.current);
        currentStyleRef.current = null;
      }
    };

    const applyNewStyle = async () => {
      removeCurrentStyle();

      const themeUrl = themeStyles[selectedTheme.themeName];

      if (themeUrl) {
        // Create a new link element
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = themeUrl;

        document.head.appendChild(linkElement);
        currentStyleRef.current = linkElement; // Track the current style
      }
    };

    applyNewStyle();

    // Cleanup function to remove the stylesheet
    return () => {
      removeCurrentStyle();
    };
  }, [selectedTheme]);

  const handleChange = (event) => {
    const newTheme = themes.find(
      (theme) => theme.themeName === event.target.value
    );
    setSelectedTheme(newTheme);
  };

  return (
    <div className="dropdown-container">
      <select
        value={selectedTheme.themeName}
        onChange={handleChange}
        className="theme-dropdown"
      >
        {themes.map((theme) => (
          <option key={theme.themeName} value={theme.themeName}>
            {theme.themeName}
          </option>
        ))}
      </select>
      <div className="theme-icons">
        <div
          className="circle"
          style={{ backgroundColor: selectedTheme.circle1 }}
        />
        <div
          className="circle"
          style={{ backgroundColor: selectedTheme.circle2 }}
        />
        <div
          className="circle"
          style={{ backgroundColor: selectedTheme.circle3 }}
        />
      </div>
    </div>
  );
};

export default ThemeDropdown;
