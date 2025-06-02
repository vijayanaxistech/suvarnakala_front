'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import breadcrumbImage from '../../../assets/collections.png';

interface Category {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
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

const BASE_URL = 'http://localhost:5000';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products/${id}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data: Product = await res.json();
        setProduct(data);
        setActiveImage(data.mainImage);
      } catch (err) {
        console.error(err);
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center my-5">Loading product...</p>;
  if (error || !product) return <p className="text-danger text-center my-5">{error || 'Not found'}</p>;

  // Combine mainImage and subImages, ensuring no duplicates
  const thumbnailImages = [
    product.mainImage,
    ...product.subImages.filter(img => img !== product.mainImage)
  ];

  return (
<>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image
          src={breadcrumbImage}
          alt="Suvarnakala Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    <div className='bg-color'>
    <div className="container  py-5">
      <Link href="/product">
        <button className="btn btn-outline-warning mb-4">← Back to Products</button>
      </Link>

<div className="row g-4" >
  {/* Thumbnails */}
  <div
    className="col-12 col-md-1 d-flex flex-md-column align-items-center justify-content-center"
    style={{ overflowY: 'auto', maxHeight: '520px', gap: '12px' }}
  >
    {thumbnailImages.map((img, index) => (
      <Image
        key={index}
        src={`${BASE_URL}/${img}`}
        alt={`Thumbnail ${index}`}
        width={70}
        height={70}
        className={`rounded border shadow-sm ${activeImage === img ? 'border-warning' : 'border-light'}`}
        style={{ cursor: 'pointer', objectFit: 'cover', background: '#fff' }}
        onClick={() => setActiveImage(img)}
      />
    ))}
  </div>

  {/* Main Image */}
  <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
    <div
      style={{
        padding: '20px',
      }}
    >
      <Image
        src={`${BASE_URL}/${activeImage}`}
        alt={product.title}
        width={350}
        height={350}
        className="img-fluid"
        style={{ objectFit: 'contain' }}
      />
    </div>
  </div>

  {/* Product Details */}
  <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
    <div className="px-2 px-md-4">
      <h6 className="text-muted mb-1">Earings</h6>
      <h3 className="fw-bold text-dark mb-3">{product.title}</h3>

      {/* Stars */}
      <div className="mb-3">
        {'★★★★★'.split('').map((star, i) => (
          <span key={i} style={{ color: '#f7c948', fontSize: '1.2rem' }}>{star}</span>
        ))}
      </div>

      {/* Description */}
      <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6', textAlign: 'justify' }}>
        {product.description}
      </p>

      {/* Details */}
      <p className="mb-2" style={{ borderBottom: '1px solid #C4C4C4', paddingBottom: '4px' }}>
        <strong>Category :</strong> <span className="text-muted">{product.category.name}</span>
      </p>
      <p className="mb-2" style={{ borderBottom: '1px solid #C4C4C4', paddingBottom: '4px' }}>
        <strong>Metal Purity :</strong> <span className="text-dark">{product.metal} {product.purity}</span>
      </p>
      <p className="mb-0" style={{ borderBottom: '1px solid #C4C4C4', paddingBottom: '4px' }}>
        <strong>Gross Wt :</strong> <span className="text-dark">{product.grossWeight}</span>
      </p>
    </div>
  </div>
</div>

    </div>
    </div>
    </>
  );
};

export default ProductDetailPage;
