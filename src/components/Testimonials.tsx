'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Testimonial {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  testimonials: Testimonial[];
}

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1441 }, items: 5 },
  desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1023, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
};

const Testimonials: React.FC<Props> = ({ testimonials }) => {
  return (
    <div className="p-5 pt-4 pb-0" aria-label="Suvarnakala Customer Testimonials Section">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span>
            Customer <span className="text-red">Stories :</span>
          </span>
                    <div className="decorative-line">
            <div className="diamond"></div>
            <div className="line"></div>
            <div className="diamond"></div>
          </div>
        </h2>
        <span className="heading-extension">Stories Behind Every Sparkle</span>
      </div>

      {testimonials && testimonials.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          arrows={false}
          containerClass="carousel-container"
          itemClass="px-1 pb-5"
          aria-live="polite"
        >
          {testimonials.map((testimonial, index) => (
<div
  key={index}
  className="p-4 bg-white rounded-4 shadow-sm d-flex flex-column justify-content-between text-start position-relative testimonial-card"
  style={{
    height: '210px',
    border: '1px solid #e3e6ea',
  }}
  role="group"
  aria-label={`Testimonial by ${testimonial.name}`}
>
  <div className="d-flex align-items-center mb-3">
    <div
      className="rounded-circle d-flex align-items-center justify-content-center me-3"
      style={{
        width: '45px',
        height: '45px',
        backgroundColor: '#012f63',
        color: '#fff',
        fontWeight: 600,
        fontSize: '18px',
      }}
    >
      {testimonial.name.charAt(0)}
    </div>
    <h6 className="m-0 text-dark fw-semibold">{testimonial.name}</h6>
  </div>
  <p className="text-secondary mt-0 mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>
    “{testimonial.description}”
  </p>
</div>

          ))}
        </Carousel>
      ) : (
        <p className="text-center text-muted">No testimonials available at the moment.</p>
      )}
    </div>
  );
};

export default Testimonials;
