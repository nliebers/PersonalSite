import React from 'react';
import './Slideshow.css';

const golfCourseImages = ["assets/media/augusta.jpg", "assets/media/standrews.jpg", "assets/media/pebble.jpg"];
const golfCourseTitles = ["Augusta National Golf Course", "St. Andrews Golf Courses", "Pebble Beach Golf Course"];

const delay = 5000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === golfCourseImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {golfCourseImages.map((img, index) => (
          <div
            className="slide"
            key={index}>
                <img className= "slideshowImg" src={img} alt="slideshowImg"/>
                <h2>{golfCourseTitles[index]}</h2>
            </div>
        ))}
      </div>

      <div className="slideshowDots">
        {golfCourseImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;