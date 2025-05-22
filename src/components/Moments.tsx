'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import line from '../assets/line466.png';

// Import images
import img1 from '../assets/ade5fbc87023b27a22805a6c15a6a8d407063dfd.jpg';
import img2 from '../assets/0ddd09c64fdb382fe2ce100fc2f910dfdc4fa87a.jpg';
import img3 from '../assets/6fbc28afcc88b0aefaea6773030c737e6fcb26e3.jpg';

const collections = [{ image: img1 }, { image: img2 }, { image: img3 }];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1441 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
  },
  smallTablet: {
    breakpoint: { max: 767, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
  },
};

const Moments = () => {
  return (
    <div className="p-5 py-5">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span className="heading-underline">
            Suvarnakala’s Defining <span className="text-red">Moments :</span>
          </span>
        </h2>

        <span className="heading-extension">Where Every Event Shines with Elegance</span>
      </div>

      <div className="mt-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          arrows={false}
          containerClass="carousel-container"
          itemClass="px-2 pb-5"
        >
          {collections.map((item, index) => (
            <div className="card border-0 shadow-sm" key={index}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '60%',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 576px) 100vw, 300px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Moments;
