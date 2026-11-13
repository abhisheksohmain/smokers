 


 

import { useState, useEffect, useCallback } from 'react';
import { images } from '../../data/siteData.js';
import './HeroSlider.css';

const slides = [
  { img: images.hookahDetail, alt: 'Premium hookah experience' },
  { img: images.coalsBowl, alt: 'Fresh hookah coals' },
  { img: images.hookahRed, alt: 'Red hookah experience' },
  { img: images.torchLight, alt: 'Warm lounge atmosphere' },
  { img: images.lounge, alt: 'Luxury lounge interior' },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  // NEXT SLIDE
  const next = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, []);

  // PREVIOUS SLIDE
  const prev = useCallback(() => {
    setActive((current) =>
      (current - 1 + slides.length) % slides.length
    );
  }, []);

  // AUTO SLIDE EVERY 5 SECONDS
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="hero"
      aria-label="The Smoke Hauz image slider"
      aria-roledescription="carousel"
    >
      {/* SLIDER IMAGES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero__slide ${
            active === index ? 'is-active' : ''
          }`}
          aria-hidden={active !== index}
        >
          <img
            className="hero__bg"
            src={slide.img}
            alt={slide.alt}
            draggable="false"
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      {/* PREVIOUS ARROW */}
      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* NEXT ARROW */}
      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        onClick={next}
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </section>
  );
}

