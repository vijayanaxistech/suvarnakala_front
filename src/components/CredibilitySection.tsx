'use client';

import Image from 'next/image';
import Head from 'next/head'; // For SEO metadata
import styles from '../app/page.module.css';
import badge1 from '../assets/Group 41427.png';
import badge2 from '../assets/Group 41429.png';
import badge3 from '../assets/Group 41428.png';

const CredibilitySection = () => {
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
            <h2>
              Our <span className="text-red">Credibility</span>
            </h2>
            <h5 className="fw-bold mt-3 text-blue ">Suvarnakala — The Pride of a Woman</h5>
            <p className="mt-3">
              Since 1970, Suvarnakala has been a symbol of timeless craftsmanship, creating exquisite
              gold, diamond, and jadtar jewelry that blends rich tradition with modern elegance. With
              over five decades of legacy, our pieces reflect a deep commitment to heritage, quality,
              and innovation—each one a celebration of culture, milestones, and refined beauty.
            </p>
            <p>
              We believe jewelry is more than adornment—it’s a personal expression of identity and
              emotion. Designed with precision and care, our collections aim to empower women with
              elegance and confidence.
            </p>
            <button className="btn custom-btn text-white mt-3">Read More</button>
          </div>

          {/* Right Side */}
          <div
            className={`col-md-6 d-flex justify-content-around align-items-center ${styles.rightSection}`}
            aria-label="Suvarnakala credibility badges"
          >
            <div className="text-center">
              <Image src={badge1} alt="Suvarnakala Purity Guarantee Badge" width={100} height={100} loading="lazy" />
              <p className="mt-2 text-red">The Purity Guarantee</p>
            </div>
            <div className="text-center">
              <Image src={badge2} alt="Suvarnakala Service Excellence Badge" width={100} height={100} loading="lazy" />
              <p className="mt-2 text-red">Service Excellence</p>
            </div>
            <div className="text-center">
              <Image src={badge3} alt="Suvarnakala Best Value Badge" width={100} height={100} loading="lazy" />
              <p className="mt-2 text-red">Amazing Value Everyday</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CredibilitySection;