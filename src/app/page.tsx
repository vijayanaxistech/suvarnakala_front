import {
  getTestimonials,
  getBachatMahotsavImages,
  getCategories,
  getHeroes,
  getMoments,
  getTrendingDesigns,
  BASE_URL, // ✅ From api.ts
} from '../lib/api';
import Popup from '../components/Popup'; // ✅ Add this line

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

  // ✅ No need to re-declare baseUrl — use BASE_URL directly
  if (!BASE_URL) {
    throw new Error('Missing NEXT_PUBLIC_API_BASE_URL in .env.local');
  }

  return (
    <>
      <Popup /> {/* ✅ Show popup only once per session */}
      <Hero heroes={heroes} baseUrl={BASE_URL} />
      <CredibilitySection />
      <VideoSection />
      <ShopbyStyle categories={categories} />
      <Products />
      <TopTrendingDesigns initialDesigns={trendingDesigns} />
      <GiftCard />
      <Moments moments={moments} />
      <BachatMahotsav bachatMahotsavImages={bachatMahotsavImages} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
