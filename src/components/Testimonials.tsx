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
    <div className="p-5" aria-label="Suvarnakala Customer Testimonials Section">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span className="heading-underline">
            Customer <span className="text-red">Stories :</span>
          </span>
        </h2>
        <span className="heading-extension">Stories Behind Every Sparkle</span>
      </div>

      {testimonials && testimonials.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          showDots={true}
          arrows={false}
          containerClass="carousel-container"
          itemClass="px-1 pb-5"
          aria-live="polite"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded text-center py-4 px-3 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                color: '#fff',
                border: '1px solid #012f63',
                height: '220px',
              }}
              role="group"
              aria-label={`Testimonial by ${testimonial.name}`}
            >
              <h5 className="fw-bold text-blue mb-3">{testimonial.name}</h5>
              <p className=" text-blue" style={{ fontSize: '14px', flexGrow: 1 }}>
                {testimonial.description}
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
