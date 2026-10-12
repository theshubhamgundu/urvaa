import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import ProductCard from '../components/ProductCard';
import { useSearchProductsQuery } from '../redux/api/product.api';
import { Product } from '../types/api-types';
import { usePageSEO } from '../hooks/usePageSEO';

const categories = {
  'tribal-araku-products': {
    title: 'Tribal Araku Products',
    image: '/images/categories/tribal-araku.jpg',
    description: 'Explore products from the Tribal Araku collection, celebrating the makers and culture of the Araku region.',
  },
  'mana-godavari-foods': {
    title: 'Mana Godavari Foods',
    image: '/images/categories/mana-godavari.jpg',
    description: 'Discover the Mana Godavari collection, bringing together regional foods and flavours.',
  },
  'eco-friendly-products': {
    title: 'Eco-Friendly Products',
    image: '/images/categories/eco-friendly.jpg',
    description: 'Browse thoughtful, eco-friendly finds selected for more mindful everyday living.',
  },
  'swadesi-handlooms': {
    title: 'Swadesi Handlooms',
    image: '/images/categories/swadesi-handlooms.jpg',
    description: 'Explore Swadesi handlooms and celebrate the skill and artistry behind traditional weaving.',
  },
  'kadiyam-plants': {
    title: 'Kadiyam Plants',
    image: '/images/categories/kadiyam-plants.jpg',
    description: 'Find plants from Kadiyam and bring a little more green into your home.',
  },
} as const;

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? categories[categorySlug as keyof typeof categories] : undefined;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [categorySlug]);

  usePageSEO({
    title: category ? `${category.title} | URVA` : 'Category | URVA',
    description: category?.description ?? 'Explore curated collections from URVA.',
    canonical: categorySlug ? `/category/${categorySlug}` : '/category',
  });

  const { data, isLoading, isError, refetch } = useSearchProductsQuery(
    {
      search: '',
      category: category?.title ?? '',
      price: '',
      sort: '',
      page,
    },
    { skip: !category },
  );

  if (!category) return <Navigate to="/not-found" replace />;

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#FBF6ED] px-4 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <nav aria-label="Breadcrumb" className="text-sm text-[#5C665B]">
          <Link to="/" className="transition hover:text-[#234331]">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <Link to="/products" className="transition hover:text-[#234331]">Products</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span aria-current="page" className="font-semibold text-[#234331]">{category.title}</span>
        </nav>

        <header className="relative isolate flex min-h-64 items-end overflow-hidden rounded-3xl bg-[#234331] p-6 sm:min-h-80 sm:p-10">
          <img
            src={category.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#173C2B]/90 via-[#173C2B]/60 to-[#173C2B]/10" />
          <div className="max-w-2xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E9C77A]">Discover the collection</p>
            <h1 className="mt-2 font-serif text-3xl font-bold sm:text-5xl">{category.title}</h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">{category.description}</p>
          </div>
        </header>

        <section aria-labelledby="category-products-heading" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A6B3F]">Made to be discovered</p>
              <h2 id="category-products-heading" className="mt-1 font-serif text-2xl font-bold text-[#23372B] sm:text-3xl">
                Shop {category.title}
              </h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-[#35613C] transition hover:text-[#173C2B]">
              Browse all products <span aria-hidden="true">→</span>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex min-h-56 items-center justify-center" role="status">
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#28533A]/20 border-t-[#28533A]" />
                <p className="text-sm text-gray-600">Loading {category.title.toLowerCase()}...</p>
              </div>
            </div>
          ) : isError ? (
            <div className="rounded-3xl border border-[#D9DDCE] bg-white p-8 text-center">
              <h2 className="font-serif text-lg font-bold text-gray-700">Unable to load this collection</h2>
              <p className="mt-2 text-sm text-gray-600">Please check your connection and try again.</p>
              <button
                type="button"
                onClick={() => refetch()}
                className="mt-4 rounded-full bg-[#234331] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#173C2B]"
              >
                Try again
              </button>
            </div>
          ) : !data?.products.length ? (
            <div className="rounded-3xl border border-[#D9DDCE] bg-white p-8 text-center">
              <h2 className="font-serif text-lg font-bold text-gray-700">No products in this collection yet</h2>
              <p className="mt-2 text-sm text-gray-600">Explore all products to find something you love.</p>
              <Link to="/products" className="mt-4 inline-flex rounded-full bg-[#234331] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#173C2B]">
                View all products
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
                {data.products.map((product: Product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
              {data.totalPage > 1 && (
                <div className="mt-8 flex justify-center">
                  <ReactPaginate
                    pageCount={data.totalPage}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageChange}
                    containerClassName="flex items-center space-x-1 sm:space-x-2 rounded-full border border-[#D9DDCE] bg-white px-4 py-2 shadow-md"
                    pageClassName="overflow-hidden rounded-full"
                    pageLinkClassName="flex h-8 w-8 items-center justify-center text-xs font-bold text-gray-700 hover:bg-gray-100"
                    previousClassName="overflow-hidden rounded-full"
                    previousLinkClassName="px-3 py-1 text-xs font-bold text-[#234331] hover:bg-[#FBF6ED]"
                    nextClassName="overflow-hidden rounded-full"
                    nextLinkClassName="px-3 py-1 text-xs font-bold text-[#234331] hover:bg-[#FBF6ED]"
                    activeClassName="bg-[#234331]"
                    activeLinkClassName="text-white hover:bg-[#234331]"
                    disabledClassName="opacity-40"
                    breakLabel="..."
                    previousLabel="Previous"
                    nextLabel="Next"
                    forcePage={page - 1}
                  />
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default CategoryPage;
