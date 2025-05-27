// app/page.tsx
import Hero from '../components/Hero';
import Products from '../components/Events';
import CredibilitySection from '../components/CredibilitySection';
import VideoSection from '../components/VideoSection';
import ShopbyStyle from '../components/ShopbyStyle';
import TopCollection from '../components/TopCollection';
import GiftCard from '../components/GiftCard';
import Moments from '../components/Moments';
import Celebrate from '../components/Celebrate';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <ShopbyStyle />
      <Products />
      <TopCollection />
      <GiftCard />
      <Moments />
      <Celebrate />
      <Testimonials />
    </>
  );
}
