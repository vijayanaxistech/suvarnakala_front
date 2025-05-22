'use client';

import React from 'react';
import Image from 'next/image';
import giftcard from '../assets/Gift Card 2.png';
import goldIcon from '../assets/6fe12d1ca7e63ca786546007ade02bf47d451b70.png';
import calendarIcon from '../assets/58ffe92b446f8b39c2730187c40eb5601690961e.png';

const GiftCardSection = () => {
  return (
    <div className="py-3 bg-color">
      <div className="p-5">
        <div className="row align-items-center">
          <div className="custom-heading-wrapper d-flex align-items-center mb-4">
            <h2 className="m-0 custom-heading text-wrap me-3">
              <span className="heading-underline">
                Suvarnakala <span className="text-red">Gift Card </span>
              </span>
            </h2>
          </div>
          <p className="text-blue mt-2 text-center text-md-start">
            Not sure which piece to choose? Let them decide with the Suvarnakala Gift Card, a
            perfect way to celebrate special moments with the beauty of fine jewelry.
          </p>
          {/* Text Content */}
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <h6 className="fw-bold mt-1 mb-3 text-red text-center text-md-start">
              Why a Suvarnakala Gift Card?
            </h6>
            <ul className="ps-3 text-blue  text-center text-md-start list-unstyled list-md-bullet">
              <li className="mb-2">
                Perfect for Any Occasion — Birthdays, weddings, anniversaries, or just because.
              </li>
              <li className="mb-2">
                Freedom to Choose — From delicate everyday pieces to statement bridal sets.
              </li>
              <li className="mb-2">
                Elegant Presentation — Available as a luxury physical card or a convenient digital
                option.
              </li>
            </ul>

            <div className="d-flex flex-column flex-md-row gap-3 mt-4 justify-content-center justify-content-md-start">
              {/* Gold Rate Booking */}
              <div className="d-flex gift-card flex-column align-items-center justify-content-center px-4 py-3 shadow">
                <Image
                  src={goldIcon}
                  alt="Gold Icon"
                  width={30}
                  height={30}
                  style={{ objectFit: 'contain' }}
                />
                <span className="mt-3">Gold Rate Booking</span>
              </div>

              {/* Monthly Installment */}
              <div className="d-flex flex-column gift-card align-items-center justify-content-center px-4 py-3 shadow">
                <Image
                  src={calendarIcon}
                  alt="Calendar Icon"
                  width={30}
                  height={30}
                  style={{ objectFit: 'contain' }}
                />
                <span className="mt-3">Monthly Installment</span>
              </div>
            </div>

            <p className="mt-4 text-red text-center text-md-start">
              For latest updates and offers, download our app today.
            </p>
          </div>

          {/* Image */}
          <div className="col-12 col-md-5 text-center">
            <Image
              src={giftcard}
              alt="Suvarnakala Gift Card"
              className="img-fluid rounded"
              width={400}
              height={300}
              style={{ maxHeight: '280px', objectFit: 'contain', width: '100%' }}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardSection;
