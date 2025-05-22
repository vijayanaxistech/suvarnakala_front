'use client';

// pages/shopstyle.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Import all images
import Earrings from '../assets/Earrings.png';
import Rings from '../assets/Rings.png';
import Neckless from '../assets/Neckless.png';
import Pendant from '../assets/Pendant.png';
import Bracelets from '../assets/Bracelets.png';
import Bangles from '../assets/Bangles.png';
import Chains from '../assets/Chains.png';
import line from '../assets/line466.png';

// Define categories array
const categories = [
  {
    label: 'Earrings',
    image: Earrings,
    alt: 'Pair of traditional gold earrings with green beads on green fabric with floral decoration',
  },
  {
    label: 'Rings',
    image: Rings,
    alt: 'Gold ring with diamonds on green fabric with floral decoration',
  },
  {
    label: 'Neckless',
    image: Neckless,
    alt: 'Diamond necklace and matching earrings on green fabric with floral decoration',
  },
  {
    label: 'Pendant',
    image: Pendant,
    alt: 'Gold pendant and earrings with diamonds and rubies on green fabric with floral decoration',
  },
  {
    label: 'Bracelets',
    image: Bracelets,
    alt: 'Diamond bracelet on green fabric with floral decoration',
  },
  {
    label: 'Bangles',
    image: Bangles,
    alt: 'Set of gold bangles with colored stones on green fabric with floral decoration',
  },
  {
    label: 'Chains',
    image: Chains,
    alt: 'Gold chain necklace and matching earrings with diamonds on green fabric with floral decoration',
  },
];

const ShopStyle = () => {
  return (
    <div className="p-5 pb-0">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span className="heading-underline">
            Shop by <span className="text-red">Style :</span>
          </span>
        </h2>

        <span className="heading-extension">Find Your Perfect Match</span>
      </div>

      {/* Scrollable container on mobile, grid on desktop */}
      <div className="categories-container">
        {categories.map((item, idx) => (
          <div className="category-item" key={idx}>
            <img
              src={item.image.src}
              alt={item.alt}
              className="img-fluid rounded"
              style={{ height: '250px', objectFit: 'cover', width: '100%' }}
            />
            <p className="text-red mt-2 fs-5 text-center">{item.label}</p>
          </div>
        ))}

        <div className="category-item extra-category">
          <div
            className="d-flex flex-column justify-content-center align-items-center text-red text-center rounded"
            style={{
              height: '250px',
              background: 'linear-gradient(180deg, #EBC08D 0%, #EAEAEA 100%)',
            }}
          >
            <p className="fs-5 mb-0">Explore additional</p>
            <p className="fs-5">categories</p>
          </div>
          <p className="text-red mt-2 fs-5 text-center">View all</p>
        </div>
      </div>
    </div>
  );
};

export default ShopStyle;
