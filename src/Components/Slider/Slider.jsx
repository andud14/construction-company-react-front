import React, { useEffect, useState, useMemo } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import "../../Styles/Slider.css";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderData = useMemo(() => [
    {
      id: 1,
      name: "Страница проектов",
      description: "/projects"
    },
    {
      id: 2,
      name: "Страница услуг",
      description: "/services"
    },
    {
      id: 3,
      name: "Страница контактов",
      description: "/contacts"
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        activeIndex === sliderData.length - 1 ? 0 : activeIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, sliderData]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} data={sliderData} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? sliderData.length - 1 : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(
            activeIndex === sliderData.length - 1 ? 0 : activeIndex + 1
          )
        }
      />
      <Dots
        activeIndex={activeIndex}
        data={sliderData}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;