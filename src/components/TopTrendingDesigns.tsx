// components/TopCollection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TrendingDesign {
  _id: string;
  name: string;
  image?: string;
}

interface TopCollectionProps {
  initialDesigns: TrendingDesign[];
  baseUrl: string;
}

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1441 }, items: 5 },
  desktop: { breakpoint: { max: 1440, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1023, min: 768 }, items: 3 },
  smallTablet: { breakpoint: { max: 767, min: 576 }, items: 2 },
  mobile: { breakpoint: { max: 575, min: 0 }, items: 1 },
};

const TopCollection: React.FC<TopCollectionProps> = ({ initialDesigns, baseUrl }) => {
  const [designs, setDesigns] = useState<TrendingDesign[]>(initialDesigns);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setDesigns(initialDesigns);
  }, [initialDesigns]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Suvarnakala Top Trending Designs',
    description:
      'Explore Suvarnakala’s top trending jewelry designs, featuring the latest styles in gold, diamond, and more for every occasion.',
    itemListElement: designs.map((design, index) => ({
      '@type': 'Product',
      position: index + 1,
      name: design.name,
      image: design.image
        ? design.image.startsWith('http')
          ? design.image
          : `${baseUrl}/${design.image}`
        : 'https://via.placeholder.com/300x300?text=No+Image',
      description: `Suvarnakala ${design.name} trending jewelry design.`,
      brand: { '@type': 'Brand', name: 'Suvarnakala' },
    })),
  };

  return (
    <>
      <Head>
        <title>Suvarnakala Top Trending Jewelry Designs - Latest Styles</title>
        <meta
          name="description"
          content="Discover Suvarnakala’s top trending jewelry designs, featuring the latest in gold, diamond, and more."
        />
        <meta
          name="keywords"
          content="Suvarnakala, trending jewelry, top jewelry designs, gold jewelry, diamond jewelry, latest jewelry styles"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/top-trending-designs" />
        <meta
          property="og:title"
          content="Suvarnakala Top Trending Jewelry Designs - Latest Styles"
        />
        <meta
          property="og:description"
          content="Explore Suvarnakala’s top trending jewelry designs, featuring the latest in gold, diamond, and more."
        />
        <meta
          property="og:image"
          content={
            designs.length > 0 && designs[0].image
              ? `${baseUrl}/${designs[0].image}`
              : 'https://via.placeholder.com/300x300?text=No+Image'
          }
        />
        <meta property="og:url" content="https://yourwebsite.com/top-trending-designs" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="p-5" aria-label="Suvarnakala Top Trending Designs Section">
        <div className="custom-heading-wrapper d-flex align-items-center mb-4">
          <h2 className="m-0 custom-heading text-wrap me-3">
            <span className="heading-underline">
              Top Trending <span className="text-red">Designs :</span>
            </span>
          </h2>
          <span className="heading-extension">Elevate Your Look with the Latest Designs</span>
        </div>

        <div className="mt-4">
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : designs.length === 0 ? (
            <div className="text-center">No trending designs available</div>
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
              {designs.map((item) => {
                const imageUrl = item.image?.startsWith('http')
                  ? item.image
                  : `${baseUrl}/${item.image}`;

                return (
                  <div
                    key={item._id}
                    className="bg-transparent"
                    role="group"
                    aria-label={`Trending Design: ${item.name}`}
                  >
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
                        src={imageUrl}
                        alt={`Suvarnakala ${item.name} Trending Jewelry Design`}
                        fill
                        sizes="(max-width: 576px) 100vw, 300px"
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="text-white text-center py-3 rounded-bottom-4"
                      style={{ backgroundColor: '#033A79', marginTop: '-4px' }}
                    >
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
    </>
  );
};

export default TopCollection;
