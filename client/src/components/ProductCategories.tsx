import React from 'react';
import { Link } from 'react-router-dom';

const categories: { title: string; to: string; image: string; position: string }[] = [
  {
    title: 'Shop All',
    to: '/products',
    image: '/images/hero/rural-heritage.jpg',
    position: 'right 60%',
  },
  {
    title: 'Tribal Araku Products',
    to: '/category/tribal-araku-products',
    image: '/images/categories/tribal-araku.jpg',
    position: 'center 78%',
  },
  {
    title: 'Mana Godavari Foods',
    to: '/category/mana-godavari-foods',
    image: '/images/categories/mana-godavari.jpg',
    position: 'center 78%',
  },
  {
    title: 'Eco-Friendly Products',
    to: '/category/eco-friendly-products',
    image: '/images/categories/eco-friendly.jpg',
    position: 'center 78%',
  },
  {
    title: 'Swadesi Handlooms',
    to: '/category/swadesi-handlooms',
    image: '/images/categories/swadesi-handlooms.jpg',
    position: 'center 78%',
  },
  {
    title: 'Kadiyam Plants',
    to: '/category/kadiyam-plants',
    image: '/images/categories/kadiyam-plants.jpg',
    position: 'center 78%',
  },
];

const ProductCategories: React.FC = () => (
  <section aria-labelledby="shop-by-category-heading" className="bg-transparent pt-6 pb-0 sm:pt-8">
    <div className="mx-auto max-w-7xl px-3 sm:px-6">
      <h2
        id="shop-by-category-heading"
        className="mb-5 text-center font-serif text-2xl font-bold text-[#178A4B] sm:mb-6 sm:text-3xl"
      >
        Shop by category
      </h2>
      <div className="-mx-3 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto px-3 pb-2 sm:mx-0 sm:justify-between sm:gap-4 sm:px-0 lg:overflow-visible">
        {categories.map((category) => (
          <Link
            to={category.to}
            key={category.title}
            className="group flex w-[88px] shrink-0 snap-start flex-col items-center text-center sm:w-[112px]"
          >
            <img
              src={category.image}
              alt={category.title}
              className="aspect-square w-[72px] rounded-full border-2 border-[#20D52A] bg-white p-0.5 object-cover transition-transform duration-300 group-hover:scale-105 sm:w-[84px]"
              style={{ objectPosition: category.position }}
            />
            <span className="mt-2.5 flex min-h-10 items-start justify-center px-0.5 font-sans text-[13px] font-semibold leading-[1.15] text-[#111] sm:mt-3 sm:min-h-11 sm:text-base">
              <span>{category.title}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCategories;
