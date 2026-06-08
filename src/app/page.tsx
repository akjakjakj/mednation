import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyMednationsSection from "@/components/sections/WhyMednationsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyMednationsSection />
      <ProcessSection />
      <StatisticsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
