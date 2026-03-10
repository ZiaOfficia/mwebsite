import { HeroSlider } from "../components/sections/HeroSlider";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { AboutSection } from "../components/sections/AboutSection";
import { GallerySection } from "../components/sections/GallerySection";
import { BlogSection } from "../components/sections/BlogSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";
import { LeftFixedEnquiryPanel } from "../components/common/LeftFixedEnquiryPanel";
import { HorizontalEnquiryForm } from "../components/common/HorizontalEnquiryForm";
import { IntroSection } from "../components/sections/IntroSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { ShortsVideoSection } from "../components/sections/ShortsVideoSection";
import { WhyChooseSection } from "../components/sections/WhyChooseSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ClientsStrip } from "../components/sections/ClientsStrip";
import { FeaturedInStrip } from "../components/sections/FeaturedInStrip";
import { StatsSection } from "../components/sections/StatsSection";
import { InstagramFeed } from "../components/sections/InstagramFeed";

import { SEO } from "../components/common/SEO";

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Luxury Wedding Decor & Design NY & NJ"
        description="Premier wedding decor and event design in New York and New Jersey. We specialize in custom mandaps, floral arrangements, and luxury event styling."
      />
      <LeftFixedEnquiryPanel />
      <HeroSlider />

      <StatsSection />
      <HorizontalEnquiryForm />

      <IntroSection />
      <FeaturedInStrip />

      <PortfolioSection />
      <ShortsVideoSection />

      <HorizontalEnquiryForm />

      <ServicesGrid />
      <WhyChooseSection />
      <TestimonialsSection />

      <HorizontalEnquiryForm />

      <AboutSection />
      <GallerySection />

      <HorizontalEnquiryForm />

      <BlogSection />
      <InstagramFeed />
      <ClientsStrip />
      <FAQSection />
      <ContactSection />
    </>
  );
};
