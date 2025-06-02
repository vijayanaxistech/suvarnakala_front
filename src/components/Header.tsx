'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaWhatsapp, FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import logo from '../assets/Suvarnakala.png';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded((prev) => !prev);
  const closeMenu = () => setExpanded(false);

  // Your navigation links data
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '#collections', label: 'Collections' },
    { href: '#showrooms', label: 'Our Showrooms' },
    { href: '#events', label: 'Events' },
    { href: '/why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact Us' },
    { href: '#appointment', label: 'Book an Appointment' },
  ];

  return (
    <>
      <div className="header-marquee text-white py-1">
        <Marquee speed={50} gradient={false} pauseOnHover>
          Today’s Showroom Timings: 11:00am to 7:00pm | Flat 50% off From 15 May 2025 to 14 June
          2025 | Today&apos;s Rate: 24K Gold: ₹6,700.00 (10 gram) | 22K Gold: ₹6,670.00 (10 gram)
        </Marquee>
      </div>

      <Navbar expand="lg" expanded={expanded} className="custom-navbar shadow-sm" sticky="top">
        <Container fluid className="d-flex align-items-center justify-content-between">
          {/* Left: Logo */}
          <div className="header-logo">
            <Link href="/" passHref legacyBehavior={false}>
              <Navbar.Brand onClick={closeMenu} style={{ cursor: 'pointer' }}>
                <Image src={logo} alt="Suvarnakala Logo" width={150} height={60} />
              </Navbar.Brand>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <Navbar.Toggle as="div" className="custom-toggler d-lg-none" onClick={handleToggle}>
            {expanded ? (
              <FaTimes size={24} color="#D41B1F" />
            ) : (
              <FaBars size={24} color="#D41B1F" />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="gap-3 text-center flex-column flex-lg-row align-items-center">
              {navLinks.map(({ href, label }, idx) => (
                <Nav.Link key={idx} href={href} onClick={closeMenu} className="custom-nav-link">
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>

          {/* Right: Social Icons */}
          <div className="d-none d-lg-flex align-items-center gap-3 social-icons">
            <Nav.Link href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Nav.Link>
            <Nav.Link
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Nav.Link>
            <Nav.Link
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
