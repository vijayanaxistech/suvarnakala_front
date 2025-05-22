'use client';

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
import googleplay from '../assets/playstore.png';
import appstore from '../assets/appstore.png';
import leaf from '../assets/Group 41992.png';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-color pt-5 pb-3 footer">
      <div className="container">
        {/* Flex container for 4 sections */}
        <div className="footer-sections">
          {/* Logo and Description */}
          <div className="footer-logo-section">
            <Image
              src={logo}
              alt="Suvarnakala Logo"
              className="img-fluid mb-3"
              width={200}
              height={80}
            />
            <p className="text-dark small footer-description">
              We offer personalized jewelry experiences, crafted by skilled artisans dedicated to
              quality and timeless elegance.
            </p>
            <div className="d-flex gap-2 mt-3">
              <Image src={googleplay} alt="Google Play" width={120} height={40} />
              <Image src={appstore} alt="App Store" width={120} height={40} />
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-links-section">
            <h6 className="fw-bold mb-3 text-uppercase footer-title">Useful Links</h6>
            <ul className="list-unstyled">
              {[
                'About Us',
                'Blog',
                'Our Showrooms',
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
                <FaMapMarkerAlt className="text-red me-2 mt-1 icon-small" />
                <span>Maninagar - Satellite - C.G.Road, Ahmedabad, Gujarat.</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaPhoneAlt className="text-red me-2 icon-small" />
                <span>+91 7874011144</span>
              </li>
              <li className="d-flex align-items-center">
                <FaEnvelope className="text-red me-2 icon-small" />
                <span>sales@suvarnakala.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-social-section social-media">
            <h6 className="fw-bold mb-3 text-uppercase footer-title">Social Media</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-red hover-social">
                <FaTwitter className="icon-small" />
              </a>
              <a href="#" className="text-red hover-social">
                <FaFacebook className="icon-small" />
              </a>
              <a href="#" className="text-red hover-social">
                <FaInstagram className="icon-small" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="d-flex align-items-center my-3">
          <div className="flex-grow-1 border-top border-secondary"></div>
          <div className="px-3">
            <Image src={leaf} alt="Leaf" width={50} height={50} />
          </div>
          <div className="flex-grow-1 border-top border-secondary"></div>
        </div>

        {/* Copyright */}
        <div className="d-flex justify-content-between align-items-center text-center px-3 footer-bottom">
          <p className="text-dark mb-0">© {currentYear} suvarnakala. All Rights Reserved.</p>
          <p className="text-dark mb-0">
            Designed and Developed by{' '}
            <strong>
              <a
                href="https://www.anaxistech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dev-link"
              >
                Anaxistech
              </a>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
