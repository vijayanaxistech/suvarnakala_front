'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import mobile from '../assets/mobile.png';
import playstore from '../assets/googleplay.png';
import appstore from '../assets/appstore.png';

import line from '../assets/line466.png';

interface CelebrateProps {
  bachatMahotsavImages: string[];
}

export default function Celebrate({ bachatMahotsavImages }: CelebrateProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slider effect
  useEffect(() => {
    if (bachatMahotsavImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bachatMahotsavImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [bachatMahotsavImages]);

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Gold Bachat Mahotsav',
    description:
      'Join our exclusive Bachat Mahotsav for irresistible offers on gold, diamond, and silver jewelry.',
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
      <Head>
        <title>Gold Bachat Mahotsav - Exclusive Jewelry Discounts</title>
        <meta name="description" content="Join Bachat Mahotsav for exclusive jewelry offers." />
        <meta name="keywords" content="gold, diamond, silver, jewelry, discounts" />
        <meta property="og:image" content={bachatMahotsavImages[0] || ''} />
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
                <p className="text-justify">
                  Join our exclusive <span className="dark_font">Bachat Mahotsav</span> and enjoy
                  irresistible offers on gold, diamond, and silver jewelry. Special discounts,
                  making charge waivers, and festive combos – all crafted to bring sparkle to your
                  celebrations.
                </p>
                <p>
                  The most awaited <span className="dark_font">Gold Bachat Mahotsav</span> is here!
                  It's not just a festival — it’s your golden opportunity to save smart and shine
                  brighter with stunning jewellery collections and exclusive savings plans.
                </p>
              </div>

              <div className="d-flex gap-3 align-items-center">
                <Image src={playstore} alt="Play Store" width={120} height={40} />
                <Image src={appstore} alt="App Store" width={120} height={40} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="jewellary_image" aria-live="polite">
                {bachatMahotsavImages.length > 0 && (
                  <img
                    src={bachatMahotsavImages[currentImageIndex]}
                    alt={`Bachat Mahotsav jewelry offer ${currentImageIndex + 1}`}
                    className=""
                    style={{ maxHeight: '401px', width: '100%', objectFit: 'cover' }}
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
