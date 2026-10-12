import React from 'react';
import FeaturedSection from '../components/FeaturedSection';
import PopularProducts from '../components/PopularProduct';
import ExploreAllProducts from '../components/ExploreAllProducts';
import CommunityGallery from '../components/CommunityGallery';
import CommunityVideos from '../components/CommunityVideos';
import CustomerTestimonials from '../components/CustomerTestimonials';
import FeaturedVariants from '../components/FeaturedVariants';
import ProductCategories from '../components/ProductCategories';
import { useLatestProductsQuery } from '../redux/api/product.api';
import { usePageSEO } from '../hooks/usePageSEO';
import { webPageSchema } from '../seo/schemas';

const HomePage: React.FC = () => {
  const { data: productData, isError: productError } = useLatestProductsQuery('');
  const products = productData?.products || [];

  usePageSEO({
    title: 'URVA | Delivering the Authentic Rural Aura',
    description:
      'Discover regional products, traditional foods, indigenous craftsmanship, handlooms, plants, and thoughtful everyday goods with URVA.',
    canonical: '/',
    keywords:
      'URVA, rural products India, regional products, One Village One Product, Indian artisans, regional foods, handlooms, nursery plants',
    schema: [
      webPageSchema({
        url: '/',
        name: 'URVA | Delivering the Authentic Rural Aura',
        description:
          'A rural-products commerce brand built around One Village – One Product and the regional stories behind India’s goods.',
        breadcrumb: [{ name: 'Home', url: '/' }],
      }),
    ],
  });

  if (productError) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] bg-[#FBF6ED]">
        <div className="text-center max-w-md px-6">
          <p className="text-5xl mb-4">🌾</p>
          <h2 className="text-xl font-serif font-bold text-[#2A1C22] mb-2">Unable to load products</h2>
          <p className="text-sm text-gray-500">Please check your connection and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      {/* ─── Hero Section ─── */}
      <FeaturedSection />

      <img
        src="/images/GIFs.webp"
        alt="Every tea bag is 100% biodegradable and plastic-free, supporting a zero-waste lifestyle."
        className="block h-auto w-full"
      />

      {/* ─── Shop by Category ─── */}
      <ProductCategories />

      {/* ─── Best Sellers ─── */}
      <PopularProducts products={products} />

      {/* ─── Explore All Products ─── */}
      <ExploreAllProducts products={products} />

      {/* ─── Community Gallery ─── */}
      <CommunityGallery />

      <img
        src="/images/community-usp-banner.jpeg"
        alt="Herbal wellness benefits: 25+ years of experience, triple-tested quality, Ayurveda backed by research, whole-herb capsules, farmer empowerment, and products across five categories."
        className="block h-auto w-full"
        loading="lazy"
      />

      {/* ─── Customer Testimonials ─── */}
      <CustomerTestimonials />

      {/* ─── Community Videos ─── */}
      <CommunityVideos />

      {/* ─── Design Spotlight (multi-variant & featured) ─── */}
      <FeaturedVariants products={products} />

    </div>
  );
};

export default HomePage;
