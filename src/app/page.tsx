import AnnouncementBar from "@/components/sections/announcement-bar";
import Header from "@/components/sections/header";
import HeroSlideshow from "@/components/sections/hero-slideshow";
import CategoryGrid from "@/components/sections/category-grid";
import TopStylesTabbed from "@/components/sections/top-styles-tabbed";
import ShopByRecipient from "@/components/sections/shop-by-recipient";
import LifestyleCarousel from "@/components/sections/lifestyle-carousel";
import FineGoldGrid from "@/components/sections/fine-gold-grid";
import BrandStory from "@/components/sections/brand-story";
import BlogHighlights from "@/components/sections/blog-highlights";
import TrustBadges from "@/components/sections/trust-badges";
import StoreLocator from "@/components/sections/store-locator";
import Testimonials from "@/components/sections/testimonials";
import SEOContent from "@/components/sections/seo-content";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      <HeroSlideshow />
      <CategoryGrid />
      <TopStylesTabbed />
      <ShopByRecipient />
      <LifestyleCarousel />
      <FineGoldGrid />
      <BrandStory />
      <BlogHighlights />
      <TrustBadges />
      <StoreLocator />
      <Testimonials />
      <SEOContent />
      <Footer />
    </div>
  );
}
