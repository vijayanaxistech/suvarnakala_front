// app/page.tsx
import {
  getTestimonials,
  getBachatMahotsavImages,
  getCategories,
  getHeroes,
  getMoments,
  getTrendingDesigns,
} from '../lib/api';

import Hero from '../components/HeroCarousel';
import Products from '../components/Events';
import CredibilitySection from '../components/AboutUs';
import VideoSection from '../components/VideoSection';
import ShopbyStyle from '../components/ShopbyStyle';
import TopTrendingDesigns from '../components/TopTrendingDesigns';
import GiftCard from '../components/GiftCard';
import Moments from '../components/Moments';
import BachatMahotsav from '../components/BachatMahotsav';
import Testimonials from '../components/Testimonials';

export default async function Home() {
  const testimonials = await getTestimonials();
  const bachatMahotsavImages = await getBachatMahotsavImages();
  const categories = await getCategories();
  const heroes = await getHeroes();
  const moments = await getMoments();
  const trendingDesigns = await getTrendingDesigns();

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error('Missing NEXT_PUBLIC_API_BASE_URL in .env.local');
  }

  return (
    <>
      <Hero heroes={heroes} baseUrl={baseUrl} />
      <CredibilitySection />
      <VideoSection />
      <ShopbyStyle categories={categories} baseUrl={baseUrl} />
      <Products />
      <TopTrendingDesigns initialDesigns={trendingDesigns} baseUrl={baseUrl} />
      <GiftCard />
      <Moments moments={moments} baseUrl={baseUrl} />
      <BachatMahotsav bachatMahotsavImages={bachatMahotsavImages} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
