import React from 'react';
import { Product } from '../types/api-types';
import ProductCard from './ProductCard';

interface PopularProductsProps {
  products: Product[];
}

const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
  // Take up to 6 active products to display in a grid
  const activeProducts = (products || []).filter(p => p.isActive !== false);
  const displayProducts = activeProducts.length > 0 ? activeProducts.slice(0, 6) : [];

  return (
    <section className="py-16 md:py-24 bg-[#FBF6ED]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-[#2A1C22] sm:text-3xl">Shop all products</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {displayProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
