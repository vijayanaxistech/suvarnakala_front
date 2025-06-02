'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import breadcrumbImage from '../../assets/collections.png';
import shopnowbg from '../../assets/dark-brown-colour-flower-pattern-background-abstract-banner-multipurpose-design 1.png';
import shopWomen from '../../assets/shopWomwn.png';
import styles from '../page.module.css';
import { FaFilter } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

 
// Define interfaces for TypeScript
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
  metalPurity?: string; // Optional field for inconsistent data
}
 
const BASE_URL = 'http://localhost:5000';
 
const ProductsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMetal, setSelectedMetal] = useState<string>('');
  const [selectedPurity, setSelectedPurity] = useState<string>('');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // State for category filter
  const [metals, setMetals] = useState<string[]>([]);
  const [purities, setPurities] = useState<string[]>([]);
  const [occasions, setOccasions] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
 
  // Set initial selectedCategory from query parameter
  useEffect(() => {
    const categoryFromQuery = searchParams.get('category');
    if (categoryFromQuery) {
      setSelectedCategory(decodeURIComponent(categoryFromQuery));
    }
  }, [searchParams]);
 
  useEffect(() => {
    const fetchProductsAndFilters = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Product[] = await res.json();
        console.log('Products API response:', data); // Debug log
 
        // Normalize product data to handle metalPurity
        const normalizedProducts = data.map((product) => ({
          ...product,
          purity: product.purity || product.metalPurity || '', // Fallback to metalPurity
          metalPurity: undefined, // Remove metalPurity
        }));
 
        // Extract unique filter values
        const uniqueMetals = [...new Set(normalizedProducts.map((p) => p.metal).filter(Boolean))];
        const uniquePurities = [
          ...new Set(normalizedProducts.map((p) => p.purity).filter(Boolean)),
        ];
        const uniqueOccasions = [
          ...new Set(normalizedProducts.map((p) => p.occasion).filter(Boolean)),
        ];
        const uniqueCategories = [
          ...new Set(normalizedProducts.map((p) => p.category.name).filter(Boolean)),
        ];
 
        setMetals(uniqueMetals);
        setPurities(uniquePurities);
        setOccasions(uniqueOccasions);
        setCategories(uniqueCategories);
        setProducts(normalizedProducts);
        setFilteredProducts(normalizedProducts); // Initially show all products
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };
 
    fetchProductsAndFilters();
  }, []);
 
  useEffect(() => {
    let filtered = [...products];
    if (selectedCategory) filtered = filtered.filter((p) => p.category.name === selectedCategory);
    if (selectedMetal) filtered = filtered.filter((p) => p.metal === selectedMetal);
    if (selectedPurity) filtered = filtered.filter((p) => p.purity === selectedPurity);
    if (selectedOccasion) filtered = filtered.filter((p) => p.occasion === selectedOccasion);
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedMetal, selectedPurity, selectedOccasion, products]);
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);
 
  // Debug filter states
  console.log('Filter states:', { metals, purities, occasions, categories, selectedCategory });
 
  return (
        <>
 {/* Banner Image */}
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image
          src={breadcrumbImage}
          alt="Suvarnakala Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    <div className="p-5 my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h3 className="mb-3 mb-md-0">
          {selectedCategory || 'All Products'} ({filteredProducts.length})
        </h3>
        <div className="position-relative" ref={dropdownRef}>
          <button
            className="btn btn-white border border-dark d-flex align-items-center gap-2 rounded-pill px-4 py-2"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <FaFilter />
            Filters
            <IoIosArrowDown />
          </button>
          {dropdownOpen && (
            <div
              className="shadow p-3 bg-white position-absolute"
              style={{
                minWidth: 300,
                top: '110%',
                right: 0,
                borderRadius: 10,
                zIndex: 1000,
                boxShadow: '0 0 12px rgba(0,0,0,0.2)',
              }}
            >
              <div className="mb-3">
                <label className="form-label">Jewellery Type</label>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedCategory(e.target.value);
                    setDropdownOpen(false); // Close dropdown after selection
                  }}
                >
                  <option value="">All</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Metal</label>
                <select
                  className="form-select"
                  value={selectedMetal}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedMetal(e.target.value);
                    setDropdownOpen(false); // Close dropdown after selection
                  }}
                >
                  <option value="">All</option>
                  {metals.map((metal) => (
                    <option key={metal} value={metal}>
                      {metal}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Purity</label>
                <select
                  className="form-select"
                  value={selectedPurity}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedPurity(e.target.value);
                    setDropdownOpen(false); // Close dropdown after selection
                  }}
                >
                  <option value="">All</option>
                  {purities.map((purity) => (
                    <option key={purity} value={purity}>
                      {purity}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Occasion</label>
                <select
                  className="form-select"
                  value={selectedOccasion}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedOccasion(e.target.value);
                    setDropdownOpen(false); // Close dropdown after selection
                  }}
                >
                  <option value="">All</option>
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
      {loading ? (
        <div className="text-center">Loading products...</div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center">No products found.</div>
      ) : (
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <Link
              href={`/product_detail/${product._id}`}
              key={product._id}
              className="text-decoration-none col-4"
            >
              <div className=" h-100 ">
                <Image
                  src={
                    product.mainImage
                      ? `${BASE_URL}/${product.mainImage}`
                      : 'https://via.placeholder.com/300x300?text=No+Image'
                  }
                  alt={product.title}
                  className="card-img-top"
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', height: '300px' }}
                />
                 <div className="p-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="card-title text-dark text-truncate mb-0">{product.title}</h6>
                      <a
                        href={`https://wa.me/?text=I'm interested in ${encodeURIComponent(
                          product.title
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success fs-5"
                      >
                        <span style={{ color: '#33CC33' }}>
                          <IoLogoWhatsapp />
                        </span>
                      </a>
                    </div>
                    <p className="card-text text-dark mb-1">Metal Purity: {product.purity}</p>
                    <p className="card-text text-dark mb-0">Gross Wt: {product.grossWeight}</p>
                  </div>
              </div>
            </Link>
          ))}
        </div>
      )}
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
                  objectFit="contain"
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
 
export default ProductsPage;