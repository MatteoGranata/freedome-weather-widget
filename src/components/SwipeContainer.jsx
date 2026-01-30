import { useRef, useState } from "react";

export default function SwipeContainer({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  // touch event handlers for mobile devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50 && currentIndex < children.length - 1)
      setCurrentIndex(currentIndex + 1);
    else if (delta < -50 && currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  //   mouse drag event for desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };
  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50 && currentIndex < children.length - 1)
      setCurrentIndex(currentIndex + 1);
    else if (delta < -50 && currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  return (
    <>
      <div
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {children.map((child, idx) => (
          <div key={idx}>{child}</div>
        ))}
        <div>
          {children.map((_, idx) => (
            <span key={idx}></span>
          ))}
        </div>
      </div>
    </>
  );
}
