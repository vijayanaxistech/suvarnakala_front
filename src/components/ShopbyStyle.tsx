// components/ShopbyStyle.tsx
'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // ✅ Add this import

interface Category {
  _id: string;
  name: string;
  image?: string;
}

interface ShopbyStyleProps {
  categories: Category[];
  isLoading?: boolean;
  baseUrl?: string;
}

const ShopbyStyle: React.FC<ShopbyStyleProps> = ({
  categories,
  isLoading = false,
  baseUrl = 'http://localhost:5000',
}) => {
  const displayedCategories = categories.slice(0, 7);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/250x250?text=No+Image';
  };

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
        image: category.image
          ? `${baseUrl}/${category.image}`
          : 'https://via.placeholder.com/250x250?text=No+Image',
        description: `Suvarnakala ${category.name} jewelry collection for special occasions.`,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Shop Suvarnakala Jewelry by Style - Find Your Perfect Match</title>
        <meta
          name="description"
          content="Explore Suvarnakala’s jewelry collections by style, from bridal to everyday wear."
        />
        <meta
          name="keywords"
          content="Suvarnakala, shop by style, jewelry categories, gold jewelry, diamond jewelry, bridal jewelry, everyday jewelry"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/shop-by-style" />
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
              ? `${baseUrl}/${displayedCategories[0].image}`
              : 'https://via.placeholder.com/250x250?text=No+Image'
          }
        />
        <meta property="og:url" content="https://yourwebsite.com/shop-by-style" />
        <meta property="og:type" content="website" />
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

        <div className="categories-container">
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <>
              {displayedCategories.map((item) => (
                <Link
                  href={`/collections?category=${encodeURIComponent(item.name)}`}
                  key={item._id}
                  className="category-item text-decoration-none"
                  role="group"
                  aria-label={`Category: ${item.name}`}
                >
                  <Image
                    src={`${baseUrl}/${item.image}`}
                    alt={`Suvarnakala ${item.name} Jewelry Collection`}
                    width={250}
                    height={250}
                    className="img-fluid rounded"
                    style={{ objectFit: 'cover', width: '100%' }}
                    onError={handleImageError}
                    loading="lazy"
                  />
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
      </div>
    </>
  );
};

export default ShopbyStyle;
