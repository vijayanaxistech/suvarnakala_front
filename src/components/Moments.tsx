'use client';

import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Moment {
  _id: string;
  imagePath: string;
  createdAt: string;
}

interface MomentsProps {
  moments: Moment[];
  baseUrl?: string;
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

const Moments: React.FC<MomentsProps> = ({ moments = [], baseUrl = 'http://localhost:5000' }) => {
  // Structured data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Suvarnakala Defining Moments',
    description:
      'Explore Suvarnakala’s defining moments, showcasing elegant jewelry designs for special occasions.',
    itemListElement: moments.map((moment, index) => ({
      '@type': 'ImageObject',
      position: index + 1,
      contentUrl: `${baseUrl}/${moment.imagePath}`,
      name: `Suvarnakala Moment ${index + 1}`,
      description: `A defining moment from Suvarnakala’s collection, captured on ${new Date(moment.createdAt).toLocaleDateString()}`,
    })),
  };

  return (
    <>
      <Head>
        <title>Suvarnakala Defining Moments - Elegant Jewelry for Every Occasion</title>
        <meta
          name="description"
          content="Discover Suvarnakala’s defining moments, showcasing exquisite jewelry designs that shine with elegance for every special occasion."
        />
        <meta
          name="keywords"
          content="Suvarnakala, defining moments, jewelry designs, gold jewelry, diamond jewelry, elegant jewelry, special occasions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/moments" />
        <meta
          property="og:title"
          content="Suvarnakala Defining Moments - Elegant Jewelry for Every Occasion"
        />
        <meta
          property="og:description"
          content="Explore Suvarnakala’s defining moments, showcasing elegant jewelry designs for every occasion."
        />
        <meta
          property="og:image"
          content={
            moments.length > 0
              ? `${baseUrl}/${moments[0].imagePath}`
              : 'https://via.placeholder.com/300x180?text=No+Image'
          }
        />
        <meta property="og:url" content="https://yourwebsite.com/moments" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="p-5 py-5" aria-label="Suvarnakala Defining Moments Section">
        <div className="custom-heading-wrapper d-flex align-items-center mb-4">
          <h2 className="m-0 custom-heading text-wrap me-3">
            <span className="heading-underline">
              Suvarnakala’s Defining <span className="text-red">Moments :</span>
            </span>
          </h2>
          <span className="heading-extension">Where Every Event Shines with Elegance</span>
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
              showDots={true}
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
                      src={`${baseUrl}/${moment.imagePath}`}
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
    </>
  );
};

export default Moments;
