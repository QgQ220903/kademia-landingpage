import ProductHeroSection from "../components/product/ProductHeroSection";
import ProductFeatureSection from "../components/product/ProductFeatureSection";
import ProductCtaSection from "../components/product/ProductCtaSection";
import FeaturedProductsSection from "../components/product/FeaturedProductsSection ";

export default function Product() {
  return (
    <div className="bg-darkblue text-white">
      <ProductHeroSection />
      <ProductFeatureSection />
      <FeaturedProductsSection />
      <ProductCtaSection />
    </div>
  );
}