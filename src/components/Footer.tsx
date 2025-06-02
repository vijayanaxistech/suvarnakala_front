'use client';

import React from 'react';
import Head from 'next/head'; // For SEO metadata
import Image from 'next/image';
import logo from '../assets/Suvarnakala.png';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import googleplay from '../assets/googleplay.png';
import appstore from '../assets/appstore.png';
import leaf from '../assets/Group 41992.png';

const currentYear = new Date().getFullYear();

export default function Footer() {
  // Structured data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Suvarnakala',
    description:
      'Suvarnakala offers personalized jewelry experiences, crafted by skilled artisans dedicated to quality and timeless elegance.',
    logo: logo.src,
    url: 'https://yourwebsite.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 7874011144',
        contactType: 'Customer Service',
        email: 'sales@suvarnakala.com',
        areaServed: 'IN',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
      streetAddress: 'Maninagar - Satellite - C.G.Road',
    },
    sameAs: [
      'https://twitter.com/yourprofile', // Replace with actual social media URLs
      'https://facebook.com/yourprofile',
      'https://instagram.com/yourprofile',
    ],
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <meta
          name="description"
          content="Contact Suvarnakala for personalized jewelry experiences. Visit our showrooms in Ahmedabad, Gujarat, or connect with us online."
        />
        <meta
          name="keywords"
          content="Suvarnakala, jewelry store, Ahmedabad jewelry, contact Suvarnakala, personalized jewelry"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph for social media */}
        <meta property="og:title" content="Suvarnakala - Personalized Jewelry Experiences" />
        <meta
          property="og:description"
          content="Connect with Suvarnakala for exquisite jewelry crafted with timeless elegance. Visit us in Ahmedabad or online."
        />
        <meta property="og:image" content={logo.src} />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <footer className="bg-color pt-5 pb-3 footer" aria-label="Suvarnakala Footer">
        <div className="container">
          {/* Flex container for 4 sections */}
          <div className="footer-sections">
            {/* Logo and Description */}
            <div className="footer-logo-section">
              <Image
                src={logo}
                alt="Suvarnakala Jewelry Logo"
                className="img-fluid mb-3"
                width={200}
                height={80}
                loading="lazy"
              />
              <p className="text-dark small footer-description">
                We offer personalized jewelry experiences, crafted by skilled artisans dedicated to
                quality and timeless elegance.
              </p>
              <div className="d-flex gap-2 mt-3">
                <Image
                  src={googleplay}
                  alt="Download Suvarnakala App on Google Play"
                  width={120}
                  height={40}
                  loading="lazy"
                />
                <Image
                  src={appstore}
                  alt="Download Suvarnakala App on App Store"
                  width={120}
                  height={40}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Useful Links */}
            <div className="footer-links-section">
              <h6 className="fw-bold mb-3 text-uppercase footer-title">Useful Links</h6>
              <ul className="list-unstyled">
                {[
                  'About Us',
                  'Blog',
                  'Collections',
                  'Return Policy',
                  'Shipping & Delivery',
                  'Disclaimer',
                  'Privacy Policy',
                ].map((item, index) => (
                  <li key={index} className="mb-1">
                    <a href="#" className="text-dark text-decoration-none footer-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="footer-contact-section">
              <h6 className="fw-bold mb-3 text-uppercase footer-title">Get In Touch</h6>
              <ul className="list-unstyled text-dark small">
                <li className="mb-2 d-flex align-items-start">
                  <FaMapMarkerAlt className="text-red me-2 mt-1 icon-small" aria-hidden="true" />
                  <span>Maninagar - Satellite - C.G.Road, Ahmedabad, Gujarat.</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaPhoneAlt className="text-red me-2 icon-small" aria-hidden="true" />
                  <span>+91 7874011144</span>
                </li>
                <li className="d-flex align-items-center">
                  <FaEnvelope className="text-red me-2 icon-small" aria-hidden="true" />
                  <span>sales@suvarnakala.com</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-social-section social-media">
              <h6 className="fw-bold mb-3 text-uppercase footer-title">Social Media</h6>
              <div className="d-flex gap-3">
                <a
                  href="#"
                  className="text-red hover-social"
                  aria-label="Follow Suvarnakala on Twitter"
                >
                  <FaTwitter className="icon-small" />
                </a>
                <a
                  href="#"
                  className="text-red hover-social"
                  aria-label="Follow Suvarnakala on Facebook"
                >
                  <FaFacebook className="icon-small" />
                </a>
                <a
                  href="#"
                  className="text-red hover-social"
                  aria-label="Follow Suvarnakala on Instagram"
                >
                  <FaInstagram className="icon-small" />
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="d-flex align-items-center my-2">
            <div className="flex-grow-1 border-top border-secondary"></div>
            <div className="px-3">
              <Image src={leaf} alt="Decorative Leaf Icon" width={70} height={70} loading="lazy" />
            </div>
            <div className="flex-grow-1 border-top border-secondary"></div>
          </div>

          {/* Copyright */}
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center px-3 footer-bottom">
            <p className="text-blue mb-1 mb-md-0">
              © {currentYear} suvarnakala. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
