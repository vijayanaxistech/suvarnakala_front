'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '../lib/api';  // adjust the relative path to your api.ts

interface Category {
  _id: string;
  name: string;
  image?: string;
}

interface ShopbyStyleProps {
  categories: Category[];
  isLoading?: boolean;
}

const ShopbyStyle: React.FC<ShopbyStyleProps> = ({
  categories,
  isLoading = false,
}) => {
  const displayedCategories = categories.slice(0, 7);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/250x250?text=No+Image';
  };

  return (
    <div className="p-5 pb-0 pt-4" aria-label="Suvarnakala Shop by Style Section">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span>
            Shop by <span className="text-red">Style :</span>
          </span>
          <div className="decorative-line">
            <div className="diamond"></div>
            <div className="line"></div>
            <div className="diamond"></div>
          </div>
        </h2>
        <span className="heading-extension">Find Your Perfect Match</span>
      </div>

      <div className="categories-container">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            {displayedCategories.map((item) => (
              <Link
                href={`/collections/category/${encodeURIComponent(item.name)}`}
                key={item._id}
                className="category-item text-decoration-none"
                role="group"
                aria-label={`Category: ${item.name}`}
              >
                <div
                  className="image-wrapper"
                  style={{
                    overflow: 'hidden',
                    borderRadius: '0.30rem',
                  }}
                >
                  <Image
                    src={item.image ? `${BASE_URL}/${item.image}` : 'https://via.placeholder.com/250x250?text=No+Image'}
                    alt={`Suvarnakala ${item.name} Jewelry Collection`}
                    width={250}
                    height={250}
                    className="img-fluid category-image"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
                <p className="text-red mt-2 fs-5 text-center">{item.name}</p>
              </Link>
            ))}

            {categories.length > 7 && (
              <Link
                href="/collections"
                className="category-item extra-category text-decoration-none"
                role="group"
                aria-label="Explore Additional Categories"
              >
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
              </Link>
            )}
          </>
        )}
      </div>

      <style jsx global>{`
        .category-item:hover .category-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ShopbyStyle;
