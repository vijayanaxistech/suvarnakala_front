'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    name: 'Disha',
    message:
      'A big shout out to you guys for improving my hubby’s gifting tastes. Completely in love with my ring!',
  },
  {
    name: 'Neha',
    message:
      'A big shout out to you guys for improving my hubby’s gifting tastes. Completely in love with my ring!',
  },
  {
    name: 'Mamta',
    message:
      'A big shout out to you guys for improving my hubby’s gifting tastes. Completely in love with my ring!',
  },
  {
    name: 'Pooja',
    message: 'Absolutely loved the ring! It’s classy and elegant – just my style.',
  },
  {
    name: 'Anjali',
    message: 'The craftsmanship is stunning. I can’t stop staring at it!',
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1441 }, items: 5 },
  desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1023, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
};

const Testimonials = () => {
  return (
    <div className="p-5">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span className="heading-underline">
            Customer <span className="text-red">Stories :</span>
          </span>
        </h2>

        <span className="heading-extension">Stories Behind Every Sparkle </span>
      </div>
      {/* Carousel */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        showDots={true}
        arrows={false}
        containerClass="carousel-container"
        itemClass="px-1 pb-5"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded text-center py-4 px-3"
            style={{
              backgroundColor: '#012f63',
              borderRadius: '15px',
              color: '#fff',
              border: '1px solid #c40000',
              minHeight: '200px',
            }}
          >
            <h5 className="fw-bold mb-3">{testimonial.name}</h5>
            <p style={{ fontSize: '14px' }}>{testimonial.message}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
