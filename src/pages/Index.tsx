import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MultimodalSection } from "@/components/MultimodalSection";
import { ProductsSection } from "@/components/ProductsSection";
import { NetworkSection } from "@/components/NetworkSection";
import { TechnologySection } from "@/components/TechnologySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MultimodalSection />
      <ProductsSection />
      <NetworkSection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
