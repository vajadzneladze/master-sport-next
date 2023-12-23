// components/HorizontalScroll.js
import { useState } from 'react';

const HorizontalScroll = ({ children }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the multiplier for smoother scrolling
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="wrapper"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
      <style jsx>{`
        .wrapper {
          display: flex;
          overflow-x: auto;
          white-space: nowrap;
        }

        .item {
          flex: 0 0 auto;
          width: 300px; /* Set a fixed width for each item */
          height: 200px; /* Set a fixed height for each item */
          margin-right: 10px; /* Optional margin between items */
        }
      `}</style>
    </div>
  );
};

export default HorizontalScroll;
