import Nav from "../components/home/Nav";
import HeroSection from "../components/home/HeroSection";
import MetricsBar from "../components/home/MetricsBar";
import StorySection from "../components/home/StorySection";
import ProductsSection from "../components/home/ProductsSection";
import IcpSection from "../components/home/IcpSection";
import Footer from "../components/home/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <HeroSection />
      <MetricsBar />
      <StorySection />
      <ProductsSection />
      <IcpSection />
      <Footer />
    </>
  );
}
