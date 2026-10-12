import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/api-types';
import ProductCard from './ProductCard';

interface ExploreAllProductsProps {
  products: Product[];
}

const sampleProducts = [
  {
    name: 'Cold-Pressed Groundnut Oil',
    category: 'Mana Godavari Foods',
    photo: 'https://images.pexels.com/photos/18066457/pexels-photo-18066457.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Eco-Friendly Areca Leaf Plates',
    category: 'Eco-Friendly Products',
    photo: 'https://images.pexels.com/photos/6990568/pexels-photo-6990568.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Handcrafted Wooden Spoons',
    category: 'Eco-Friendly Products',
    photo: 'https://images.pexels.com/photos/26595162/pexels-photo-26595162.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const ExploreAllProducts: React.FC<ExploreAllProductsProps> = ({ products }) => {
  const activeProducts = (products || [])
    .filter((product) => product.isActive !== false)
    .slice(0, 8);

  return (
    <section className="bg-[#F4EBDD] pt-0 pb-10 md:pt-0 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="font-serif text-2xl font-bold text-[#178A4B] sm:text-3xl">
            Explore All Products
          </h2>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:gap-5 sm:px-0">
          {activeProducts.map((product) => (
            <div key={product._id} className="w-[46%] min-w-[155px] shrink-0 snap-start sm:w-[31%] lg:w-[23%]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {activeProducts.length === 0 && (
          <div className="-mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:gap-5 sm:px-0">
            {sampleProducts.map((product) => (
              <article
                key={product.name}
                className="relative w-[46%] min-w-[155px] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#E6DACB] bg-white p-2.5 shadow-sm sm:w-[31%] sm:p-4 lg:w-[23%]"
              >
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#FBF6ED]/95 px-2.5 py-1 text-[10px] font-bold text-[#5C2333] shadow-sm sm:text-xs">
                  Sample
                </span>
                <div className="mb-3 aspect-square overflow-hidden rounded-xl bg-[#FBF6ED]">
                  <img
                    src={product.photo}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-center text-xs font-bold text-[#2A1C22] sm:text-sm">
                  {product.name}
                </h3>
                <p className="mt-1 text-center text-[10px] text-[#806B5D] sm:text-xs">
                  {product.category} · Coming soon
                </p>
              </article>
            ))}
          </div>
        )}
        <div className="mt-5 flex justify-center sm:mt-6">
          <Link
            to="/products"
            className="rounded-full border border-[#5C2333] px-5 py-2.5 text-xs font-bold text-[#5C2333] transition-colors hover:bg-[#5C2333] hover:text-white"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreAllProducts;
