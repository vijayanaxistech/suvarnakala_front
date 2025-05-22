'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

// Import images
import bangles from '../assets/e53d641f683f50f4ddd4ae9d6b98e68ac5883320.jpg';
import earrings from '../assets/cb27ea4d1307c89b027cbb6e42b33f7f02e9d2b3.jpg';
import necklace from '../assets/5f541ab13231d4702705fa1ea551220034b6b03b.jpg';
import mangalsutra from '../assets/0ca2bba91029ae5607453572705aa90609c4cee0.jpg';

const collections = [
  { title: 'Bangles', image: bangles },
  { title: 'Earrings', image: earrings },
  { title: 'Necklace', image: necklace },
  { title: 'Mangalsutra', image: mangalsutra },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1441 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
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

const TopCollection = () => {
  return (
    <div className="p-5">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span className="heading-underline">
            Top Trending <span className="text-red">Designs :</span>
          </span>
        </h2>

        <span className="heading-extension">Elevate Your Look with the Latest Designs</span>
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
            <div key={index} className="bg-transparent">
              <div
                className="rounded-top-4"
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '100%',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 576px) 100vw, 300px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div
                className="text-white text-center py-3 rounded-bottom-4"
                style={{ backgroundColor: '#033A79', marginTop: '-4px' }} // merge top-bottom
              >
                {item.title}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopCollection;
