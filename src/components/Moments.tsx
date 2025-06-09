'use client';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BASE_URL } from '../lib/api'; // ✅ Update path as needed

interface Moment {
  _id: string;
  imagePath: string;
  createdAt: string;
}

interface MomentsProps {
  moments: Moment[];
}

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

const Moments: React.FC<MomentsProps> = ({ moments = [] }) => {
  return (
    <div className="p-5 pt-4 pb-0" aria-label="Suvarnakala Defining Moments Section">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span>
            Suvarnakala’s Defining <span className="text-red">Moments : </span>
          </span>
          <div className="decorative-line">
            <div className="diamond"></div>
            <div className="line"></div>
            <div className="diamond"></div>
          </div>
        </h2>
        <span className="heading-extension">Elevate Your Look with the Latest Designs</span>
      </div>

      <div className="mt-4">
        {moments.length === 0 ? (
          <div className="text-center" role="alert">
            No moments available. Please check the admin panel or try again later.
          </div>
        ) : (
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={false}
            containerClass="carousel-container"
            itemClass="px-2 pb-5"
            aria-live="polite"
          >
            {moments.map((moment, index) => (
              <div
                className="card border-0 shadow-sm"
                key={moment._id}
                role="group"
                aria-label={`Moment ${index + 1}: Suvarnakala Jewelry Moment`}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '60%',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={
                      moment.imagePath
                        ? `${BASE_URL}/${moment.imagePath}`
                        : 'https://via.placeholder.com/300x180?text=No+Image'
                    }
                    alt={`Suvarnakala Defining Moment ${index + 1} - Jewelry Design`}
                    fill
                    sizes="(max-width: 576px) 100vw, 300px"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x180?text=No+Image';
                    }}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Moments;
