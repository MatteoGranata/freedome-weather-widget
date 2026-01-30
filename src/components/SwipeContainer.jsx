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
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 cursor-grab active:cursor-grabbing"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {children.map((child, idx) => (
            <div key={idx} className="shrink-0 w-full select-none">
              {child}
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 cursor-pointer">
          {children.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-[#313A52]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
