'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { FaWhatsapp, FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { sendAppointment } from '../lib/api';

import logo from '../assets/Suvarnakala.png';
import BookImage from '../assets/Book_A.png';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    store: '',
    date: '',
    time: '',
    jewelry: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleToggle = () => setExpanded((prev) => !prev);
  const closeMenu = () => setExpanded(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.store.trim()) newErrors.store = 'Store is required';
    if (!formData.date) newErrors.date = 'Appointment date is required';
    if (!formData.time) newErrors.time = 'Appointment time is required';
    if (!formData.jewelry.trim()) newErrors.jewelry = 'Interested jewelry is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    try {
      await sendAppointment(formData);
      alert('Appointment request sent successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        city: '',
        store: '',
        date: '',
        time: '',
        jewelry: '',
        message: '',
      });
      setErrors({});
      setShowModal(false);
    } catch (error) {
      console.error('Error sending appointment request:', error);
      alert('Failed to send appointment. Please try again later.');
    }
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const hour12 = hour % 12 === 0 ? 12 : hour % 12;
        const ampm = hour < 12 ? 'AM' : 'PM';
        const timeString = `${hour12.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${ampm}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/collections', label: 'Collections' },
    { href: '/our-showrooms', label: 'Our Showrooms' },
    { href: '/events', label: 'Events' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '#', label: 'Book an Appointment', onClick: handleShowModal },
  ];

  return (
    <>
      <div className="header-marquee text-white py-1">
        <Marquee speed={50} gradient={false} pauseOnHover>
          Today’s Showroom Timings: 11:00am to 7:00pm | Flat 50% off From 15 May 2025 to 14 June
          2025 | Today's Rate: 24K Gold: ₹6,700.00 (10 gram) | 22K Gold: ₹6,670.00 (10 gram)
        </Marquee>
      </div>

      <Navbar expand="lg" expanded={expanded} className="custom-navbar shadow-sm" sticky="top">
        <Container fluid className="d-flex align-items-center justify-content-between">
          <div className="header-logo">
            <Link href="/" passHref legacyBehavior={false}>
              <Navbar.Brand onClick={closeMenu} style={{ cursor: 'pointer' }}>
                <Image src={logo} alt="Suvarnakala Logo" width={150} height={60} />
              </Navbar.Brand>
            </Link>
          </div>

          <Navbar.Toggle as="div" className="custom-toggler d-lg-none" onClick={handleToggle}>
            {expanded ? (
              <FaTimes size={24} color="#D41B1F" />
            ) : (
              <FaBars size={24} color="#D41B1F" />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="gap-3 text-center flex-column flex-lg-row align-items-center">
              {navLinks.map(({ href, label, onClick }, idx) => {
                const isActive = !onClick && (pathname === href || pathname.startsWith(href + '/'));
                return (
                  <Link
                    key={idx}
                    href={href}
                    passHref
                    legacyBehavior={false}
                    className="custom-nav-link"
                    onClick={(e) => {
                      if (onClick) {
                        e.preventDefault();
                        onClick();
                      }
                      closeMenu();
                    }}
                    style={{ textDecoration: 'none' }}
                  >
                    <Nav.Link
                      as="span"
                      className={isActive ? 'text-danger active-link' : 'text-dark'}
                    >
                      {label}
                    </Nav.Link>
                  </Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>

          <div className="d-none d-lg-flex align-items-center gap-3 social-icons">
            <Nav.Link href="https://wa.me/your-number" target="_blank">
              <FaWhatsapp />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/your-profile" target="_blank">
              <FaTwitter />
            </Nav.Link>
            <Nav.Link href="https://facebook.com/your-profile" target="_blank">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="https://instagram.com/your-profile" target="_blank">
              <FaInstagram />
            </Nav.Link>
          </div>
        </Container>
      </Navbar>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        dialogClassName="custom-modal"
        autoFocus={false}
      >
        <Modal.Body
          className="p-0 d-flex align-items-center justify-content-center"
          style={{ width: '1200px', height: '300px', maxWidth: '100vw' }}
        >
          <div className="row no-gutters m-0 w-100" style={{ height: '100%' }}>
            <div className="col-md-6 d-none d-md-block p-0" style={{ height: '100%' }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={BookImage}
                  alt="Appointment"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div
              className="col-md-6 p-4"
              style={{ height: '100%', overflowY: 'auto', backgroundColor: 'black' }}
            >
              <h4 className="mb-4 text-center text-white fw-bold">Book an Appointment</h4>
              <div className="pt-5">
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <input
                      className="form-control text-white bg-black w-100 border-white"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  <div className="mb-3 col-md-6">
                    <input
                      className="form-control text-white bg-black w-100 border-white"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <input
                      className="form-control text-white bg-black w-100 border-white"
                      type="text"
                      name="mobile"
                      placeholder="Mobile Number"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                  </div>
                  <div className="mb-3 col-md-6">
                    <input
                      className="form-control text-white bg-black w-100 border-white"
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <span className="error-text">{errors.city}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <select
                      className="form-control text-white-50 bg-black w-100 border-white"
                      name="store"
                      required
                      value={formData.store}
                      onChange={handleChange}
                    >
                      <option value="">Select Store</option>
                      <option value="Jodhpur Cross Roads, Satellite">
                        Jodhpur Cross Roads, Satellite
                      </option>
                      <option value="C.G. Road">C.G. Road</option>
                      <option value="Maninagar">Maninagar</option>
                    </select>
                    {errors.store && <span className="error-text">{errors.store}</span>}
                  </div>
                  <div className="mb-3 col-md-6">
                    <div className="w-100">
                      <DatePicker
                        selected={formData.date ? new Date(formData.date) : null}
                        onChange={(date) =>
                          setFormData((prev) => ({
                            ...prev,
                            date: date?.toISOString().split('T')[0] || '',
                          }))
                        }
                        dateFormat="dd/MM/yyyy"
                        className="form-control bg-black text-white w-100 border-white"
                        placeholderText="Select Appointment Date"
                        wrapperClassName="w-100"
                      />
                      {errors.date && <span className="error-text">{errors.date}</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <div className="w-100">
                      <select
                        className="form-control bg-black w-100 border-white"
                        style={{ color: formData.time ? '#fff' : 'rgb(126, 121, 121)' }}
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Appointment Time
                        </option>
                        {generateTimeOptions().map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.time && <span className="error-text">{errors.time}</span>}
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <input
                      className="form-control text-white bg-black w-100 border-white"
                      type="text"
                      name="jewelry"
                      placeholder="Interested Jewelry"
                      required
                      value={formData.jewelry}
                      onChange={handleChange}
                    />
                    {errors.jewelry && <span className="error-text">{errors.jewelry}</span>}
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control text-white bg-black w-100 border-white"
                    rows={6}
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ width: '100%', height: '175px' }}
                  />
                </div>
                <div className="text-center pt-4">
                  <Button
                    onClick={handleSubmit}
                    className="px-4 py-2 rounded-pill fw-bold"
                    style={{ backgroundColor: '#033A79', border: 'none', color: 'white' }}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .error-text {
          color: #ff4d4d;
          font-size: 12px;
          margin-top: 4px;
          display: block;
        }
        .form-control.bg-black {
          border: 1px solid #7e7979;
        }
        .form-control.bg-black::placeholder {
          color: #7e7979;
        }
        .form-control.bg-black:focus {
          background-color: #000;
          color: #fff;
          border-color: #033a79;
          box-shadow: none;
        }
        .react-datepicker-wrapper .form-control.bg-black {
          border: 1px solid #7e7979;
        }
        .react-datepicker-wrapper .form-control.bg-black:focus {
          border-color: #033a79;
          box-shadow: none;
          outline: none;
        }
        .custom-navbar {
          background-color: #fff;
          padding: 10px 0;
        }
        .custom-nav-link {
          color: #333;
          font-weight: 500;
          text-decoration: none;
        }
        .custom-nav-link:hover {
          color: #d41b1f !important;
        }
        .header-marquee {
          background-color: #d41b1f;
          font-size: 14px;
        }
        .social-icons a {
          color: #333;
          font-size: 20px;
        }
        .social-icons a:hover {
          color: #d41b1f;
        }
        .custom-toggler {
          border: none;
        }
        .active-link {
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default Header;
