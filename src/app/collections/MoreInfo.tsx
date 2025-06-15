'use client';
import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';

interface MoreInfoProps {
  product: {
    title: string;
    metal: string;
    purity: string;
    grossWeight: string;
    mainImage: string;
  };
}

const MoreInfo: React.FC<MoreInfoProps> = ({ product }) => {
  const [userPhone, setUserPhone] = useState<string>('');

  const handleMoreInfoClick = async () => {
    // Prompt user for their WhatsApp number
    const phone = prompt('Please enter your WhatsApp number for inquiry (e.g., +1234567890):');
    if (!phone) {
      alert('Phone number is required to send the inquiry.');
      return;
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^\+\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number starting with "+" followed by 10-15 digits.');
      return;
    }

    setUserPhone(phone);

    const messageBody =
      `Product Inquiry:\n\n` +
      `From: ${phone}\n` +
      `Product Name: ${product.title}\n` +
      `Metal Type: ${product.metal}\n` +
      `Purity (Karat): ${product.purity}\n` +
      `Gross Weight (g): ${product.grossWeight}\n` +
      `Product Image URL: ${product.mainImage}`;

    try {
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: '+919429439061', // Replace with your desired number or make dynamic
          body: messageBody,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully via WhatsApp!');
      } else {
        alert('Failed to send message: ' + data.message);
      }
    } catch (error) {
      console.error('Error sending  message:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <button onClick={handleMoreInfoClick} className="more-info-btn-sm">
      <span>More Info</span>
      <i className="bi bi-info-circle ms-1"></i>
    </button>
  );
};

export default MoreInfo;
