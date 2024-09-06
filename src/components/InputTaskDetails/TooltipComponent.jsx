import  { useState, useEffect } from "react";


const Tooltip = () => {
  const [tooltip, setTooltip] = useState({
    text: "",
    visible: false,
    top: 0,
    left: 0,
  });
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (tooltip.visible) {
        setTooltip((prev) => ({
          ...prev,
          top: event.pageY + 40,
          left: event.pageX + 40,
        }));
      }
    };

    const handleMouseEnter = (event) => {
      setTooltip({
        text: event.target.getAttribute("data-text"),
        visible: true,
        top: event.pageY + 40,
        left: event.pageX + 40,
      });
    };

    const handleMouseLeave = () => {
      setTooltip((prev) => ({ ...prev, visible: false }));
    };

    // Check if elements exist before adding event listeners
    const elements = document.querySelectorAll(".category-box");
    if (elements.length > 0) {
      elements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      // Cleanup event listeners
      return () => {
        elements.forEach((element) => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mousemove", handleMouseMove);
          element.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }
  }, [tooltip.visible]);

  return (
    <>
      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            top: `${tooltip.top}px`,
            left: `${tooltip.left}px`,
            position: 'fixed',
            /* Ensure no other styles are affecting it */
            transform: "translate(-50%, -50%)",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
};

export default Tooltip;