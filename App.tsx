import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CraftsmenImpact } from "./components/CraftsmenImpact";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { CompanyStory } from "./components/CompanyStory";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CraftsmenImpact />
        <FeaturedProducts />
        <CompanyStory />
      </main>
      <Footer />
    </div>
  );
}