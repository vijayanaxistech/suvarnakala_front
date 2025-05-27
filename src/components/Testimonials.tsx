'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head'; // For SEO metadata
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../lib/api';

interface Testimonial {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1441 }, items: 5 },
  desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1023, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
};

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await API.get<{ message: string; testimonials: Testimonial[] }>(
          '/api/testimonials'
        );
        setTestimonials(response.data.testimonials);
      } catch (error: unknown) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  // Structured data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Suvarnakala Customer Testimonials',
    description:
      'Read customer stories and testimonials about their experiences with Suvarnakala’s exquisite jewelry collections.',
    itemListElement: testimonials.map((testimonial, index) => ({
      '@type': 'Review',
      position: index + 1,
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewBody: testimonial.description,
      datePublished: testimonial.createdAt,
      itemReviewed: {
        '@type': 'Product',
        name: 'Suvarnakala Jewelry',
        brand: {
          '@type': 'Brand',
          name: 'Suvarnakala',
        },
      },
    })),
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Suvarnakala Customer Stories - Testimonials for Exquisite Jewelry</title>
        <meta
          name="description"
          content="Discover customer stories and testimonials about Suvarnakala’s exquisite jewelry collections, highlighting the elegance and quality of our designs."
        />
        <meta
          name="keywords"
          content="Suvarnakala, customer testimonials, jewelry reviews, gold jewelry, diamond jewelry, customer stories"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/testimonials" />
        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Suvarnakala Customer Stories - Testimonials for Exquisite Jewelry"
        />
        <meta
          property="og:description"
          content="Read customer stories and testimonials about Suvarnakala’s exquisite jewelry collections."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/testimonials-og.jpg" // Replace with an actual image
        />
        <meta property="og:url" content="https://yourwebsite.com/testimonials" />
        <meta property="og:type" content="website" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="p-5" aria-label="Suvarnakala Customer Testimonials Section">
        <div className="custom-heading-wrapper d-flex align-items-center mb-4">
          <h2 className="m-0 custom-heading text-wrap me-3">
            <span className="heading-underline">
              Customer <span className="text-red">Stories :</span>
            </span>
          </h2>
          <span className="heading-extension">Stories Behind Every Sparkle</span>
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
          aria-live="polite"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded text-center py-4 px-3 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: '#012f63',
                borderRadius: '15px',
                color: '#fff',
                border: '1px solid #c40000',
                height: '250px', // fixed height
              }}
              role="group"
              aria-label={`Testimonial by ${testimonial.name}`}
            >
              <h5 className="fw-bold mb-3">{testimonial.name}</h5>
              <p style={{ fontSize: '14px', flexGrow: 1 }}>{testimonial.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;