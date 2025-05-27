'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head'; // For SEO metadata

import mobile from '../assets/mobile.png';
import storedemo from '../assets/store_demo.png';
import line from '../assets/line466.png';

import API from '../lib/api'; // Adjust import path to your actual API instance

export default function Celebrate() {
  const [bachatMahotsavImages, setBachatMahotsavImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await API.get('api/bachatMahotsav');
        const bachatMahotsavs = response.data.bachatMahotsavs;
        if (bachatMahotsavs && bachatMahotsavs.length > 0) {
          const imageUrls = bachatMahotsavs.map((item: any) => `${BASE_URL}/${item.imagePath}`);
          setBachatMahotsavImages(imageUrls);
        }
      } catch (error) {
        console.error('Error fetching Bachat Mahotsav:', error);
      }
    };

    fetchImages();
  }, []);

  // Change image every 3 seconds
  useEffect(() => {
    if (bachatMahotsavImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bachatMahotsavImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [bachatMahotsavImages]);

  // Structured data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Gold Bachat Mahotsav',
    description:
      'Join our exclusive Bachat Mahotsav for irresistible offers on gold, diamond, and silver jewelry. Enjoy special discounts, making charge waivers, and festive combos.',
    image: bachatMahotsavImages[0] || '',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      description: 'Special discounts and making charge waivers on jewelry',
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Gold Bachat Mahotsav - Exclusive Jewelry Discounts</title>
        <meta
          name="description"
          content="Join Gold Bachat Mahotsav for exclusive offers on gold, diamond, and silver jewelry. Save big with discounts, making charge waivers, and festive combos."
        />
        <meta
          name="keywords"
          content="Bachat Mahotsav, gold jewelry, diamond jewelry, silver jewelry, festive discounts, jewelry offers"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/bachat-mahotsav" />
        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Gold Bachat Mahotsav - Exclusive Jewelry Discounts"
        />
        <meta
          property="og:description"
          content="Join our exclusive Bachat Mahotsav for irresistible offers on gold, diamond, and silver jewelry."
        />
        <meta property="og:image" content={bachatMahotsavImages[0] || ''} />
        <meta
          property="og:url"
          content="https://yourwebsite.com/bachat-mahotsav"
        />
        <meta property="og:type" content="website" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section className="hero-section">
        <div className="p-5">
          <div className="row">
            <div className="col-md-6">
              <div className="main-title">
                <div style={{ display: 'inline-block' }}>
                  <h2 style={{ margin: 0 }}>
                    Celebrate Savings <span className="text-red">with Style!</span>
                  </h2>
                  <Image
                    src={line}
                    alt="Decorative line under title"
                    style={{ display: 'block', marginTop: '2px', width: '100%', height: 'auto' }}
                  />
                </div>
                <p>
                  Join our exclusive <span className="dark_font">Bachat Mahotsav</span> and enjoy
                  irresistible offers on gold, diamond, and silver jewelry. Special discounts, making
                  charge waivers, and festive combos – all crafted to bring sparkle to your
                  celebrations.
                </p>
                <p>
                  The most awaited <span className="dark_font">Gold Bachat Mahotsav</span> is here!
                  It's not just a festival — it’s your golden opportunity to save smart and shine
                  brighter with stunning jewellery collections and exclusive savings plans.
                </p>
              </div>

              <div className="store_demo">
                <Image src={storedemo} alt="Jewelry store demonstration" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="jewellary_image" aria-live="polite">
                {bachatMahotsavImages.length > 0 && (
                  <img
                    src={bachatMahotsavImages[currentImageIndex]}
                    alt={`Bachat Mahotsav jewelry offer ${currentImageIndex + 1}`}
                    className=""
                    style={{ maxHeight: '435px', width: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                )}
                <div className="mobile_img">
                  <Image
                    src={mobile}
                    alt="Mobile app showcasing Bachat Mahotsav offers"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}