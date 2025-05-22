'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

import img1 from '../assets/d68e73d00735ed315cdf8e0757f52b1f69b4a77c.png';
import img2 from '../assets/cf111899016362517bb2fe4c9508dfd5281ec129.png';
import img3 from '../assets/9ff19de89990e49e89066228801b67a45075e6e3.jpg';

const sections = [
  {
    title: 'New Modern Collection',
    text: 'Step into a world where modern sophistication meets artisanal craftsmanship. Our latest collection features statement pieces that celebrate individuality, style, and everyday luxury.',
    image: img1,
  },
  {
    title: 'Elegant Designs',
    text: 'Discover elegant and timeless pieces that complement your style effortlessly. Crafted with precision and passion, designed for the modern connoisseur.',
    image: img2,
  },
  {
    title: 'Luxury Redefined',
    text: 'Experience the epitome of luxury with our exclusive collection, blending innovative design and superior craftsmanship for the ultimate statement.',
    image: img3,
  },
];

export default function ModernCollection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      // Safe null check before accessing clientWidth
      if (containerRef.current instanceof HTMLElement) {
        setSlideWidth(containerRef.current.clientWidth);
      } else {
        setSlideWidth(window.innerWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  }, []);

  useEffect(() => {
    if (slideWidth === 0) return;

    const interval = setInterval(() => {
      goNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [slideWidth, goNext]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  }, []);

  return (
    <div
      ref={containerRef}
      className="position-relative overflow-hidden"
      style={{ width: '100%', maxWidth: '100vw', height: '600px', margin: 'auto' }}
    >
      <div
        style={{
          display: 'flex',
          width: `${sections.length * slideWidth}px`,
          transform: `translateX(-${currentIndex * slideWidth}px)`,
          transition: 'transform 0.7s ease-in-out',
        }}
      >
        {sections.map(({ title, text, image }, idx) => (
          <div
            key={idx}
            style={{
              width: `${slideWidth}px`,
              height: '600px',
              position: 'relative',
              flexShrink: 0,
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 1,
              }}
            />
            {/* Desktop & Tablet Text */}
            <div
              className="d-none d-md-flex flex-column justify-content-center"
              style={{
                position: 'absolute',
                top: 0,
                left: '5%',
                height: '100%',
                color: 'white',
                maxWidth: '40%',
                paddingRight: '15px',
                zIndex: 2,
              }}
            >
              <h1 className="display-4 fw-semibold mb-4">{title}</h1>
              <p className="lead mb-5">{text}</p>
              <button className="btn custom-btn btn-lg w-auto px-4">Check Collection</button>
            </div>

            {/* Mobile Text */}
            <div
              className="d-flex d-md-none flex-column justify-content-center align-items-center text-center"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: '20px',
                color: 'white',
                zIndex: 2,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0))',
              }}
            >
              <h3 className="fw-semibold mb-3">{title}</h3>
              <p className="mb-4">{text}</p>
              <button className="btn custom-btn ">Check Collection</button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={goPrev}
        aria-label="Previous Slide"
        className="position-absolute top-50 start-0 translate-middle-y btn btn-white rounded-circle d-flex align-items-center justify-content-center"
        style={{
          width: '30px', // slightly larger button
          height: '30px',
          marginLeft: '10px',
          backgroundColor: 'white',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 10,
          padding: '0',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={goNext}
        aria-label="Next Slide"
        className="position-absolute top-50 end-0 translate-middle-y btn btn-white rounded-circle d-flex align-items-center justify-content-center"
        style={{
          width: '30px',
          height: '30px',
          marginRight: '10px',
          backgroundColor: 'white',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 10,
          padding: '0',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  );
}
