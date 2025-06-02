'use client';

import Image from 'next/image';
import breadcrumbImage from '../../assets/our-showroom-bg.png';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import shopnowbg from '../../assets/dark-brown-colour-flower-pattern-background-abstract-banner-multipurpose-design 1.png';
import shopWomen from '../../assets/shopWomwn.png';
import styles from '../page.module.css';

// Satellite images (renamed to St1)
import st1 from '../../assets/showrooms/Satellite/1.png';
import st2 from '../../assets/showrooms/Satellite/2.png';
import st3 from '../../assets/showrooms/Satellite/3.png';
import st4 from '../../assets/showrooms/Satellite/4.png';
import st5 from '../../assets/showrooms/Satellite/5.png';
import st6 from '../../assets/showrooms/Satellite/6.png';
import st7 from '../../assets/showrooms/Satellite/7.png';
import st8 from '../../assets/showrooms/Satellite/8.png';
import st9 from '../../assets/showrooms/Satellite/9.png';

// CG Road images
import cg1 from '../../assets/showrooms/Cgroad/1.png';
import cg2 from '../../assets/showrooms/Cgroad/2.png';
import cg3 from '../../assets/showrooms/Cgroad/3.png';
import cg4 from '../../assets/showrooms/Cgroad/4.png';
import cg5 from '../../assets/showrooms/Cgroad/5.png';
import cg6 from '../../assets/showrooms/Cgroad/6.png';
import cg7 from '../../assets/showrooms/Cgroad/7.png';
import cg8 from '../../assets/showrooms/Cgroad/8.png';
import cg9 from '../../assets/showrooms/Cgroad/9.png';

// Maninagar images
import mn1 from '../../assets/showrooms/Maninagar/1.png';
import mn2 from '../../assets/showrooms/Maninagar/2.png';
import mn3 from '../../assets/showrooms/Maninagar/3.png';
import mn4 from '../../assets/showrooms/Maninagar/4.png';
import mn5 from '../../assets/showrooms/Maninagar/5.png';
import mn6 from '../../assets/showrooms/Maninagar/6.png';

// Image arrays
const St1 = [st1, st2, st3, st4, st5, st6, st7, st8, st9];
const Cgroad = [cg1, cg2, cg3, cg4, cg5, cg6, cg7, cg8, cg9];
const Maninagar = [mn1, mn2, mn3, mn4, mn5, mn6];

const WhySuvarnakala = () => {
  return (
    <>
      {/* Banner Image */}
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image
          src={breadcrumbImage}
          alt="Suvarnakala Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Showrooms Section */}
      <div>
        <div className="bg-color p-5">
          {/* Satellite (ST1) Section */}
          <Row className="mt-4 g-4">
            <div className="custom-heading-wrapper text-center justify-content-center d-flex align-items-center mb-4">
              <h2 className="m-0 custom-heading text-wrap me-3">
                <span className="heading-underline">
                  <span className="text-red">Jodhpur Cross Roads, Satellite</span>
                </span>
              </h2>
            </div>

            <p className="text-blue mt-0 text-center">
              Venus Amadeus Jodhpur Cross Road, B.R.T.S Bus Stand, Satellite
            </p>
            {St1.map((img, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <div>
                  <Image
                    src={img}
                    alt={`Satellite Image ${idx + 1}`}
                    className="img-fluid"
                    placeholder="blur"
                  />
                </div>
              </Col>
            ))}
          </Row>

          {/* CG Road Section */}
          <Row className="mt-4 g-4">
            <div className="custom-heading-wrapper text-center justify-content-center d-flex align-items-center mb-4">
              <h2 className="m-0 custom-heading text-wrap me-3">
                <span className="heading-underline">
                  <span className="text-red">C G Road</span>
                </span>
              </h2>
            </div>
            <p className="text-blue mt-0 text-center">
              National Plaza, Opp. Lal Bungalow, C. G. Road
            </p>
            {Cgroad.map((img, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <div>
                  <Image
                    src={img}
                    alt={`CG Road Image ${idx + 1}`}
                    className="img-fluid"
                    placeholder="blur"
                  />
                </div>
              </Col>
            ))}
          </Row>

          {/* Maninagar Section */}
          <Row className="mt-4 g-4">
            <div className="custom-heading-wrapper text-center justify-content-center d-flex align-items-center mb-4">
              <h2 className="m-0 custom-heading text-wrap me-3">
                <span className="heading-underline">
                  <span className="text-red">Maninagar</span>
                </span>
              </h2>
            </div>
            <p className="text-blue mt-0 text-center">
              Opp. Pintoo Garments, Maninagar Cross Rd, Maninagar
            </p>
            {Maninagar.map((img, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <div>
                  <Image
                    src={img}
                    alt={`Maninagar Image ${idx + 1}`}
                    className="img-fluid"
                    placeholder="blur"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {/* Shop Now section */}
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
          {/* Background Image */}
          <Image src={shopnowbg} alt="Shop Now Banner" layout="fill" objectFit="cover" priority />

          {/* Overlay Content */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              padding: '0 20px',
            }}
          >
            <Container>
              <Row className="align-items-center">
                {/* Left Image - hidden on mobile */}
                <Col md={6} className="d-none d-md-flex justify-content-start">
                  <Image
                    src={shopWomen}
                    alt="Shop Girl"
                    width={300}
                    height={300}
                    objectFit="contain"
                  />
                </Col>

                {/* Right Text + Button */}
                <Col xs={12} md={6} className="text-center text-md-start text-white">
                  <h1 className="fs-4 fs-md-3 fw-semibold lh-tight mb-4">
                    Elevate Every Moment with Timeless Jewellery
                  </h1>
                  <Button variant="outline-light rounded-0" className={styles.shopNowBtn}>
                    Shop Now
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySuvarnakala;
