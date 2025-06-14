import ProductHeroSection from "../components/product/ProductHeroSection";
import ProductFeatureSection from "../components/product/ProductFeatureSection";
import ProductCtaSection from "../components/product/ProductCtaSection";
import FeaturedProductsSection from "../components/product/FeaturedProductsSection ";
import ProductHeroSectionv2 from "../components/product/ProductHeroSectionv2";

export default function Product() {
  return (
    <div className="bg-darkblue text-white">
      <ProductHeroSectionv2 />
      <ProductFeatureSection />
      <FeaturedProductsSection />
      <ProductCtaSection />
    </div>
  );
}