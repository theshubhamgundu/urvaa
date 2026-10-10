import React from 'react';
import { Link } from 'react-router-dom';
import type { IconType } from 'react-icons';
import {
  FaCookieBite,
  FaLeaf,
  FaMugHot,
  FaSeedling,
  FaThreads,
} from 'react-icons/fa6';

const categories: { icon: IconType; title: string; image: string; position: string }[] = [
  {
    icon: FaMugHot,
    title: 'Tribal Araku Products',
    image: '/images/categories/tribal-araku.jpg',
    position: 'center 78%',
  },
  {
    icon: FaCookieBite,
    title: 'Mana Godavari Foods',
    image: '/images/categories/mana-godavari.jpg',
    position: 'center 78%',
  },
  {
    icon: FaLeaf,
    title: 'Eco-Friendly Products',
    image: '/images/categories/eco-friendly.jpg',
    position: 'center 78%',
  },
  {
    icon: FaThreads,
    title: 'Swadesi Handlooms',
    image: '/images/categories/swadesi-handlooms.jpg',
    position: 'center 78%',
  },
  {
    icon: FaSeedling,
    title: 'Kadiyam Plants',
    image: '/images/categories/kadiyam-plants.jpg',
    position: 'center 78%',
  },
];

const ProductCategories: React.FC = () => (
  <section className="bg-white py-10 md:py-14">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold text-[#23372B] sm:text-3xl">Shop by category</h2>
        <Link
          to="/products"
          className="text-sm font-semibold text-[#35613C] transition hover:text-[#173C2B]"
        >
          View all <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-3 sm:mx-0 sm:justify-between sm:px-0 lg:overflow-visible">
        {categories.map((category) => (
          <Link
            to={`/products?category=${encodeURIComponent(category.title)}`}
            key={category.title}
            className="group flex w-28 shrink-0 snap-start flex-col items-center text-center sm:w-36"
          >
            <img
              src={category.image}
              alt={category.title}
              className="aspect-square w-full rounded-full border-4 border-white object-cover shadow-md transition duration-300 group-hover:scale-105 group-hover:shadow-lg"
              style={{ objectPosition: category.position }}
            />
            <span className="mt-3 flex items-center justify-center gap-2 font-semibold leading-snug text-[#26382C]">
              <category.icon aria-hidden="true" className="shrink-0 text-sm text-[#35613C]" />
              <span className="text-sm">{category.title}</span>
            </span>
            <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-[#66805E] transition group-hover:gap-2">
              Shop now <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCategories;
