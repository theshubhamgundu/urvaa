import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaHeart, FaLeaf, FaPeopleGroup } from 'react-icons/fa6';
import { usePageSEO } from '../hooks/usePageSEO';
import { breadcrumbSchema, webPageSchema } from '../seo/schemas';

const pillars = [
  {
    icon: <FaGlobe className="h-6 w-6 text-[#28533A]" />,
    title: 'Regional discovery',
    description: 'Explore products through the places, traditions, and specialties that shape them.',
  },
  {
    icon: <FaPeopleGroup className="h-6 w-6 text-[#28533A]" />,
    title: 'People-first commerce',
    description: 'Make room for the stories of makers, growers, and producer communities.',
  },
  {
    icon: <FaLeaf className="h-6 w-6 text-[#28533A]" />,
    title: 'Thoughtful choices',
    description: 'Find regional goods and practical alternatives with clear product information.',
  },
  {
    icon: <FaHeart className="h-6 w-6 text-[#28533A]" />,
    title: 'A marketplace with meaning',
    description: 'Bring products from diverse rural traditions together in one convenient place.',
  },
];

const categories = [
  ['Tribal Araku Products', 'Regional coffee, honey, and other products whose sourcing can be verified.'],
  ['Mana Godavari Foods', 'Traditional sweets, palm jaggery, pickles, and regional pantry favorites.'],
  ['Eco-Friendly Products', 'Selected biodegradable, reusable, and natural-material household goods.'],
  ['Swadesi Handlooms', 'Handloom textiles and regional weaving traditions.'],
  ['Kadiyam Plants', 'Nursery plants, saplings, and greenery for homes and gardens.'],
];

const AboutPage: React.FC = () => {
  usePageSEO({
    title: 'Our Story | URVAA — Delivering the Authentic Rural Aura',
    description:
      'Meet URVAA, a rural-products commerce brand built around One Village – One Product and the regional stories behind India’s goods.',
    canonical: '/about',
    keywords: 'URVAA, rural products India, regional products, One Village One Product, Indian artisans, regional foods, handlooms, plants',
    schema: [
      webPageSchema({
        url: '/about',
        name: 'Our Story | URVAA',
        description: 'Learn about URVAA’s vision for regional discovery and rural commerce.',
        breadcrumb: [
          { name: 'Home', url: '/' },
          { name: 'Our Story', url: '/about' },
        ],
      }),
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Our Story', url: '/about' },
      ]),
    ],
  });

  return (
    <div className="min-h-screen bg-[#FBF6ED] text-[#2A1C22]">
      <section className="bg-gradient-to-br from-[#173C2B] via-[#28533A] to-[#704A28] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#E9C77A]/50 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C77A]">
            Our story
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Delivering the Authentic Rural Aura
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            URVAA is a rural-products commerce brand built around a simple idea: every region has something distinctive worth discovering.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5D2E]">One Village – One Product</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#234331]">
            A product is also a place, a skill, and a story.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-700">
            URVAA aims to make regional products easier to discover while helping rural producers reach customers beyond their immediate communities. Our vision is to bring traditional foods, indigenous craftsmanship, handlooms, plants, and considered everyday goods into one thoughtful shopping experience.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            As the collection grows, we want product pages to make origin, materials, ingredients, and maker information clear—so customers can shop with context and confidence.
          </p>
        </div>
        <img
          src="/logo.png"
          alt="URVAA — Delivering the Authentic Rural Aura"
          className="mx-auto w-48 rounded-3xl bg-white p-3 shadow-lg sm:w-56"
        />
      </section>

      <section className="border-y border-[#D9DDCE] bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-[#234331]">What guides URVAA</h2>
            <p className="mt-3 text-sm text-gray-600">
              A marketplace shaped by authenticity, regional discovery, and convenience.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#D9DDCE] bg-[#FBF6ED] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#234331]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5D2E]">A growing collection</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#234331]">Five ways to discover regional India</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([name, description]) => (
            <article key={name} className="rounded-2xl border border-[#D9DDCE] bg-white p-5">
              <h3 className="font-serif text-lg font-bold text-[#234331]">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
          Category examples describe the URVAA vision. Product availability, supplier relationships, and origin details should be confirmed before publication.
        </p>
      </section>

      <section className="bg-[#234331] px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">Let’s bring more regional stories into view.</h2>
          <p className="mt-3 text-sm text-white/80">
            Browse the collection or get in touch with questions about products and partnerships.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block rounded-full bg-[#E9C77A] px-6 py-3 text-sm font-bold text-[#173C2B] transition hover:bg-white"
          >
            Explore products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
