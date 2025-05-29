'use client';

import Image from 'next/image';
import Head from 'next/head'; // For SEO metadata
import styles from '../app/page.module.css';
import badge1 from '../assets/Group 41427.png';
import logo from '../assets/Suvarnakala.png';
import jewelryImage from '../assets/0b4fd82ca5984f9fbf3f4fd33751e69c27f12de0.jpg';

const AboutUs = () => {
  // Structured data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Suvarnakala',
    description:
      'Since 1970, Suvarnakala has been a symbol of timeless craftsmanship, creating exquisite gold, diamond, and jadtar jewelry that blends tradition with modern elegance.',
    logo: badge1.src, // Using badge1 as a representative logo
    foundingDate: '1970',
    url: 'https://yourwebsite.com',
    sameAs: [
      'https://yourwebsite.com/about', // Add actual social media or related URLs
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://yourwebsite.com/contact',
    },
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Suvarnakala - Timeless Jewelry Craftsmanship Since 1970</title>
        <meta
          name="description"
          content="Discover Suvarnakala's legacy of crafting exquisite gold, diamond, and jadtar jewelry since 1970. Experience timeless tradition, quality, and elegance."
        />
        <meta
          name="keywords"
          content="Suvarnakala, gold jewelry, diamond jewelry, jadtar jewelry, craftsmanship, tradition, elegance"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Suvarnakala - Timeless Jewelry Craftsmanship Since 1970"
        />
        <meta
          property="og:description"
          content="Discover Suvarnakala's legacy of crafting exquisite gold, diamond, and jadtar jewelry since 1970."
        />
        <meta property="og:image" content={badge1.src} />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:type" content="website" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className={`container-fluid ${styles.credibilitySection}`}>
        <div className="row">
          {/* Left Side */}
          <div className={`col-md-6 p-5 ${styles.leftSection}`}>
            <div className="custom-heading-wrapper d-flex align-items-center mb-4">
              <h2 className="m-0 custom-heading text-wrap me-3">
                <span className="heading-underline">
                  Our <span className="text-red">Credibility </span>
                </span>
              </h2>
            </div>

            <h5 className="fw-bold mt-3 text-blue ">Timeless Elegance, Redefined</h5>
            <p className="mt-3">
              Discover the enduring charm of Gold, the brilliance of Real Diamonds, and the
              innovation of Lab-Grown Diamonds. Whether you seek classic luxury, natural sparkle, or
              sustainable sophistication, our carefully curated collection offers something for
              every style and occasion. Crafted to perfection, each piece reflects purity, beauty,
              and value you can treasure forever.
            </p>
            {/* <p>
                We believe jewelry is more than adornment—it’s a personal expression of identity and
                emotion. Designed with precision and care, our collections aim to empower women with
                elegance and confidence.
              </p> */}
            <button className="btn custom-btn text-white mt-3">Read More</button>
          </div>

          {/* Right Side */}
          <div
            className={`col-md-6 d-flex justify-content-around align-items-center ${styles.rightSection}`}
            aria-label="Suvarnakala credibility badges"
          >
            {/* Left Panel */}
            <div className={styles.goldLeftPanel}>
              <div className={styles.contentWrapper}>
                <Image
                  src={logo}
                  alt="Suvarnakala Jewelry Logo"
                  className="img-fluid mb-3"
                  width={200}
                  height={80}
                  loading="lazy"
                />
                <p className={styles.textRed}>Timeless Elegance, Pure Gold</p>
                <p className={styles.textBlue}>
                  Indulge in the luxury of our finest gold jewelry — perfect for every occasion.
                </p>
                <a href="#" className={styles.textRed}>
                  → Explore Gold Collection
                </a>
              </div>
            </div>
            {/* Right Panel */}
            <div className={styles.goldRightPanel}>
              <Image
                src={jewelryImage}
                alt="Jewelry Showcase"
                className="img-fluid"
                width={400}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
