// app/product_detail/[id]/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoLogoWhatsapp } from 'react-icons/io';
import breadcrumbImage from '../../../../public/assets/collections.png';
import shopnowbg from '../../../../public/assets/dark-brown-colour-flower-pattern-background-abstract-banner-multipurpose-design 1.png';
import shopWomen from '../../../../public/assets/shopWomwn.png';
import styles from '../../page.module.css';
import { getProductById, getProducts, BASE_URL } from '../../../lib/api';
import WhatsAppButton from '../../collections/WhatsAppButton';
import MoreInfoButton from '../../collections/MoreInfo'
import ProductImageGallery from '../ProductImageGallery'; // Import the new components --
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collections | Suvarnakala Pvt. Ltd',
};

interface Category {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface RawProduct {
  _id: string;
  title: string;
  category: Category;
  description: string;
  metal: string;
  purity: string;
  occasion: string;
  grossWeight: string;
  mainImage: string;
  subImage1: string;
  subImage2: string;
  subImage3: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Product {
  _id: string;
  title: string;
  category: Category;
  description: string;
  metal: string;
  purity: string;
  occasion: string;
  grossWeight: string;
  mainImage: string;
  subImages: string[];
}

export async function generateStaticParams() {
  const res = await fetch('https://skalaapi.anaxistech.com/api/products');
  const products = await res.json();

  return products.map((product: any) => ({
    id: product._id,
  }));
}

const transformProduct = (raw: RawProduct): Product => ({
  ...raw,
  subImages: [raw.subImage1, raw.subImage2, raw.subImage3].filter(Boolean),
});

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch single product
  const rawProduct = await getProductById(id);
  let product: Product | null = null;

  if (rawProduct) {
    product = transformProduct(rawProduct);
  } else {
    notFound();
  }

  // Fetch all products for similar products
  const rawProducts = await getProducts();
  const allProducts = rawProducts.map(transformProduct);
  const similarProducts = product
    ? allProducts
        .filter((p) => p.category._id === product.category._id && p._id !== product._id)
        .slice(0, 3)
    : [];

  const thumbnailImages = [
    product.mainImage,
    ...product.subImages.filter((img) => img !== product.mainImage),
  ];

  return (
    <>
      {/* Banner */}
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image
          src={breadcrumbImage}
          alt="Suvarnakala Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Product Section */}
      <div className="bg-color">
        <div className="p-5 py-5">
          <div className="row g-4">
            {/* Image Gallery */}
            <ProductImageGallery
              mainImage={product.mainImage}
              thumbnailImages={thumbnailImages}
              productTitle={product.title}
            />

            {/* Details */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center order-md-3">
              <div className="px-2 px-md-4">
                <h6 className="text-muted mb-1">{product.category.name}</h6>
                <h3 className="fw-bold text-dark mb-1">{product.title}</h3>
                <div className="mb-2">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} style={{ color: '#FD7A08', fontSize: '1.2rem' }}>
                      {star}
                    </span>
                  ))}
                </div>
                <p
                  className="text-muted"
                  style={{ fontSize: '14px', lineHeight: '1.6', textAlign: 'justify' }}
                >
                  {product.description
                    ? product.description.substring(0, 400) +
                      (product.description.length > 400 ? '...' : '')
                    : 'Discover timeless elegance with this exquisitely crafted jewelry piece.'}
                </p>

                <p
                  className="mb-2"
                  style={{ borderBottom: '1px solid #C4C4C4', paddingBottom: '4px' }}
                >
                  <strong>Category :</strong>{' '}
                  <span className="text-muted">{product.category.name}</span>
                </p>
                <p
                  className="mb-2"
                  style={{ borderBottom: '1px solid #C4C4C4', paddingBottom: '4px' }}
                >
                  <strong>Metal Purity :</strong>{' '}
                  <span className="text-dark">
                    {product.metal} {product.purity}
                  </span>
                </p>
                <p
                  className="mb-0"
                  style={{ borderBottom: '1px solid #C4C4C4', paddingBottom: '4px' }}
                >
                  <strong>Gross Wt :</strong>{' '}
                  <span className="text-dark">{product.grossWeight}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="row mt-5">
            <div className="col-12">
              <h5 className="fw-bold text-dark mb-3">Description</h5>
              <p
                className="text-muted"
                style={{ fontSize: '15px', lineHeight: '1.8', textAlign: 'justify' }}
              >
                {product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              </p>
            </div>
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="row mt-5">
              <h5 className="fw-bold text-dark mb-4">Related Products</h5>
              <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-4">
                {similarProducts.map((item) => (
                  <Col key={item._id}>
                    <Link
                      href={`/product_detail/${item._id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="product-card h-100 border-0">
                        <div className="product-image imageWrapper">
                          <Image
                            src={`${BASE_URL}/${item.mainImage}`}
                            alt={item.title}
                            width={350}
                            height={350}
                            className="categoryImage"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="p-1">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="card-title text-dark text-truncate mb-0">
                               {product.title.length > 20 ? product.title.substring(0, 20) + '...' :item.title}
                            </h6>

                          <MoreInfoButton
                            product={{
                              title: product.title,
                              metal: product.metal,
                              purity: product.purity,
                              grossWeight: product.grossWeight,
                              mainImage: product.mainImage
                                ? `${BASE_URL}/${product.mainImage}`
                                : 'https://via.placeholder.com/300x300?text=No+Image',
                            }}
                          />
                            <WhatsAppButton product={item} />
                          </div>
                          <p className="card-text text-dark mb-1">
                            Metal Purity: {item.metal} {item.purity}
                          </p>
                          <p className="card-text text-dark mb-0">Gross Wt: {item.grossWeight}</p>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      </div>

      {/* Shop Now section */}
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Image src={shopnowbg} alt="Shop Now Banner" layout="fill" objectFit="cover" priority />
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
              <Col md={6} className="d-none d-md-flex justify-content-start">
                <Image
                  src={shopWomen}
                  alt="Shop Girl"
                  width={300}
                  height={300}
                  style={{ objectFit: 'contain' }}
                />
              </Col>
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
    </>
  );
};

export default ProductDetailPage;
