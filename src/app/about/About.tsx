'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import aboutImage from '../../../public/assets/About.jpg';
import qualityBadge from '../../../public/assets/Quality.png';
import serviceBadge from '../../../public/assets/Service.png';
import valueBadge from '../../../public/assets/Value.png';
import breadcrumbImage from '../../../public/assets/About breadcumb.png';
import legacyImage from '../../../public/assets/ade5fbc87023b27a22805a6c15a6a8d407063dfd.jpg';
import cornerImage from '../../../public/assets/Group 41992.png';
import roseImage from '../../../public/assets/rose.png';
import certified from '../../../public/assets/certified.png';
import hallmark from '../../../public/assets/hallmark.png';
import billed from '../../../public/assets/billed.png';
import premium from '../../../public/assets/premium.png';

const totalYears = new Date().getFullYear() - 1970;

const About = () => {
  const [animatedYears, setAnimatedYears] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = totalYears;
          const duration = 2500;
          const stepTime = Math.max(10, Math.floor(duration / end));

          const timer = setInterval(() => {
            start += 1;
            setAnimatedYears(start);
            if (start >= end) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.6 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Breadcrumb Section */}
      <div style={{ position: 'relative', width: '100%', height: '434px' }}>
        <Image
          src={breadcrumbImage}
          alt="Suvarnakala Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* About Section */}
      <div
        className="position-relative py-4"
        style={{ background: 'linear-gradient(to top, #B7B7B7, #FEE4E4)' }}
      >
        <div className="position-absolute top-0 end-0 p-2 d-none d-md-block" style={{ zIndex: 10 }}>
          <Image src={roseImage} alt="Rose" width={100} height={200} className="img-fluid" />
        </div>

        <div className="p-5 py-3">
          <div className="custom-heading-wrapper d-flex align-items-center mb-4">
            <h2 className="m-0 custom-heading text-wrap me-3">
              <span className="">
                About <span className="text-red">Suvarnakala </span>
              </span>
              <div className="decorative-line">
                <div className="diamond"></div>
                <div className="line"></div>
                <div className="diamond"></div>
              </div>
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-5 mb-4 mb-md-0">
              <Image
                src={aboutImage}
                alt="About Suvarnakala"
                width={500}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-7">
              <h5 className="h4 fw-bold text-blue mb-3">Suvarnakala — The Pride of a Woman</h5>
              <p className="text-muted text-justify">
                Established in 1970, Suvarnakala embarked on a journey of excellence that has grown
                into one of the most respected names in the world of fine jewellery. Known for our
                expertise in gold, diamond, and jadtar jewellery, Suvarnakala has become a symbol of
                quality, precision, and timeless craftsmanship.
              </p>

              <div className="row text-center my-4">
                <div className="col-4 col-sm-4">
                  <Image
                    src={qualityBadge}
                    alt="Best Quality"
                    width={80}
                    height={80}
                    className="img-fluid mb-2"
                  />
                  <p className="text-danger fw-semibold small">The Purity Guarantee</p>
                </div>
                <div className="col-4 col-sm-4">
                  <Image
                    src={serviceBadge}
                    alt="Best Service"
                    width={80}
                    height={80}
                    className="img-fluid mb-2"
                  />
                  <p className="text-danger fw-semibold small">Service Excellence</p>
                </div>
                <div className="col-4 col-sm-4">
                  <Image
                    src={valueBadge}
                    alt="Best Value"
                    width={80}
                    height={80}
                    className="img-fluid mb-2"
                  />
                  <p className="text-danger fw-semibold small">Amazing Value Everyday</p>
                </div>
              </div>
              <a
                href="/collections"
                className="custom-btn btn-lg text-white w-auto px-4"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                View Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="p-5 position-relative">
        <div
          className="position-absolute bottom-0 start-0 mb-0 ms-0"
          style={{ zIndex: 1, transform: 'rotate(35deg)' }}
        >
          <Image src={cornerImage} alt="Decorative corner" width={70} height={70} />
        </div>

        <div className="row align-items-center">
          <div className="col-md-7 mb-3">
            <h3 className="text-blue mb-3">Our Legacy</h3>
            <p className="text-justify">
              The foundation of Suvarnakala was laid by the visionary Mr. Soni Prakashchandra
              Shantilal, whose passion and dedication helped shape the brand into a prominent retail
              jewellery destination in Ahmedabad. With over four decades of unwavering commitment
              and relentless effort, Suvarnakala has turned countless dreams into dazzling
              realities.
            </p>
            <p className="text-justify">
              Our legacy is built on the belief that jewellery is not just an accessory—it is a
              cherished adornment that celebrates a woman&apos;s identity and elegance. Every
              masterpiece we create tells a story of beauty, tradition, and heritage. At
              Suvarnakala, we give utmost importance to design, detail, and innovation. Our
              ornaments are crafted with care, stringent quality control, and state-of-the-art
              technology, ensuring each piece resonates with elegance and authenticity.
            </p>
          </div>

          <div className="col-md-5 mt-md-1 mb-3 text-center position-relative">
            <div
              className="experience-ring"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                transform: 'translate(-15%, -30%)',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, #fff 52%, transparent 53%)',
                borderRadius: '50%',
                border: '8px solid #d41b1f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0,0,0,0.12)',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  animation: 'rotateCircle 10s linear infinite',
                }}
              >
                <svg viewBox="0 0 160 160" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <path
                      id="textCircle"
                      d="M80,80 m-60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                  </defs>
                  <text
                    fill="#033a79"
                    fontSize="16"
                    fontWeight="700"
                    letterSpacing="1px"
                    style={{ textTransform: 'uppercase' }}
                  >
                    <textPath href="#textCircle" startOffset="0%" textLength="377">
                      Years of Excellence • Years of Excellence •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center number with animated counter */}
              <div style={{ zIndex: 1, textAlign: 'center' }}>
                <div
                  ref={counterRef}
                  style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: '#d41b1f',
                    lineHeight: '1',
                  }}
                >
                  {animatedYears}
                </div>
              </div>
            </div>

            <Image src={legacyImage} alt="Suvarnakala Store" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div style={{ backgroundColor: '#BCBABA', padding: '30px 0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          {[
            { img: certified, text: '100% Certified Jewelry' },
            { img: hallmark, text: 'BIS Hallmarked Gold' },
            { img: billed, text: 'Certified & Billed Instantly' },
            { img: premium, text: 'Premium Wrap & Etching' },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '250px',
                padding: '10px',
              }}
            >
              <Image src={item.img} alt={item.text} width={40} height={40} />
              <span
                style={{
                  marginLeft: '12px',
                  fontWeight: 'bold',
                  color: '#033a79',
                  fontSize: '16px',
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes rotateCircle {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default About;
