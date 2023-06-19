import React from 'react';
import sl1 from '../../Img/sl1.jpg';

function SliderContent({ activeIndex, data }) {
  return (
    <section>
      {data.map((slide, index) => (
        <div
          key={slide.id}
          className={
            index === activeIndex ? "slides active" : "inactive"
          }
        >
          <img
            className="slide-image"
            src={sl1}
            alt='slider'
          />
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="slide-title"
          >
            <h2>{slide.name}</h2>
          </div>
          <a href={slide.description}>
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="slide-button"
            >
              Перейти
            </button>
          </a>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;