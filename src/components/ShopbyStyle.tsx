'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import API from '../lib/api'; // Adjust path based on your project structure
import 'bootstrap/dist/css/bootstrap.min.css';

// Define category interface based on backend response
interface Category {
  _id: string;
  name: string;
  image?: string;
}

const ShopStyle: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Get base URL from API instance
  const BASE_URL = API.defaults.baseURL || 'http://localhost:5000';

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await API.get<{ data: Category[] }>('api/productscategories');
        setCategories(response.data);
      } catch (error: any) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Display only the first 7 categories
  const displayedCategories = categories.slice(0, 7);

  // Handle image load error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/250x250?text=No+Image';
  };

  // Structured data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Suvarnakala Jewelry Categories',
    description:
      'Explore Suvarnakala’s jewelry categories, featuring a wide range of styles for every occasion, from bridal to everyday wear.',
    itemListElement: displayedCategories.map((category, index) => ({
      '@type': 'ProductGroup',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: category.name,
        image: category.image ? `${BASE_URL}/${category.image}` : 'https://via.placeholder.com/250x250?text=No+Image',
        description: `Suvarnakala ${category.name} jewelry collection for special occasions.`,
      },
    })),
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Shop Suvarnakala Jewelry by Style - Find Your Perfect Match</title>
        <meta
          name="description"
          content="Explore Suvarnakala’s jewelry collections by style, from bridal to everyday wear. Find the perfect match for every occasion with our exquisite designs."
        />
        <meta
          name="keywords"
          content="Suvarnakala, shop by style, jewelry categories, gold jewelry, diamond jewelry, bridal jewelry, everyday jewelry"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/shop-by-style" />
        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Shop Suvarnakala Jewelry by Style - Find Your Perfect Match"
        />
        <meta
          property="og:description"
          content="Explore Suvarnakala’s jewelry collections by style, from bridal to everyday wear."
        />
        <meta
          property="og:image"
          content={
            displayedCategories.length > 0 && displayedCategories[0].image
              ? `${BASE_URL}/${displayedCategories[0].image}`
              : 'https://via.placeholder.com/250x250?text=No+Image'
          }
        />
        <meta property="og:url" content="https://yourwebsite.com/shop-by-style" />
        <meta property="og:type" content="website" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="p-5 pb-0" aria-label="Suvarnakala Shop by Style Section">
        <div className="custom-heading-wrapper d-flex align-items-center mb-4">
          <h2 className="m-0 custom-heading text-wrap me-3">
            <span className="heading-underline">
              Shop by <span className="text-red">Style :</span>
            </span>
          </h2>
          <span className="heading-extension">Find Your Perfect Match</span>
        </div>

        {/* Scrollable container on mobile, grid on desktop */}
        <div className="categories-container">
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <>
              {displayedCategories.map((item) => (
                <div className="category-item" key={item._id} role="group" aria-label={`Category: ${item.name}`}>
                  <Image
                    src={
                      item.image
                        ? `${BASE_URL}/${item.image}`
                        : 'https://via.placeholder.com/250x250?text=No+Image'
                    }
                    alt={`Suvarnakala ${item.name} Jewelry Collection`}
                    width={250}
                    height={250}
                    className="img-fluid rounded"
                    style={{ objectFit: 'cover', width: '100%' }}
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <p className="text-red mt-2 fs-5 text-center">{item.name}</p>
                </div>
              ))}

              {categories.length > 7 && (
                <div className="category-item extra-category" role="group" aria-label="Explore Additional Categories">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center text-red text-center rounded"
                    style={{
                      height: '302px',
                      background: 'linear-gradient(180deg, #EBC08D 0%, #EAEAEA 100%)',
                    }}
                  >
                    <p className="fs-5 mb-0">Explore additional</p>
                    <p className="fs-5">categories</p>
                  </div>
                  <p className="text-red mt-2 fs-5 text-center">View all</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopStyle;