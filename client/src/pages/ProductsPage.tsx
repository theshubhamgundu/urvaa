import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FaSearch } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { useCategoriesQuery, useSearchProductsQuery } from '../redux/api/product.api';
import { Product } from '../types/api-types';
import { usePageSEO } from '../hooks/usePageSEO';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(
    new URLSearchParams(location.search).get('category') || '',
  );
  const [sort, setSort] = useState<'asc' | 'desc' | 'relevance'>('relevance');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSelectedCategory(new URLSearchParams(location.search).get('category') || '');
    setPage(1);
  }, [location.search]);

  usePageSEO({
    title: 'Explore Products | URVA',
    description:
      'Browse products from URVA, a growing collection inspired by regional foods, rural makers, handlooms, plants, and thoughtful everyday goods.',
    canonical: '/products',
  });

  const { data: categoriesData } = useCategoriesQuery('');
  const { data, isLoading, isError } = useSearchProductsQuery({
    search,
    category: selectedCategory || undefined,
    price: undefined,
    sort: sort !== 'relevance' ? sort : undefined,
    page,
  });

  const categories = categoriesData?.categories || [];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    setPage(1);
  };

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF6ED] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-3xl bg-gradient-to-r from-[#173C2B] to-[#704A28] px-6 py-10 text-white sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E9C77A]">
            One Village – One Product
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Explore the URVA collection</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
            Discover products and regional specialties, with clear details to help you choose.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-2xl border border-[#D9DDCE] bg-white p-5">
            <h2 className="border-b border-[#D9DDCE] pb-3 font-serif text-lg font-bold text-[#234331]">Categories</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <button
                  onClick={() => handleCategoryClick('')}
                  className={`text-left text-sm transition ${selectedCategory === '' ? 'font-bold text-[#234331]' : 'text-gray-600 hover:text-[#234331]'}`}
                >
                  All products
                </button>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`text-left text-sm transition ${selectedCategory === category ? 'font-bold text-[#234331]' : 'text-gray-600 hover:text-[#234331]'}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main className="space-y-6">
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#D9DDCE] bg-white p-4 sm:flex-row">
              <label className="relative w-full max-w-md">
                <FaSearch aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400" />
                <span className="sr-only">Search products</span>
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setPage(1);
                  }}
                  className="w-full rounded-full border border-[#D9DDCE] bg-[#FBF6ED] py-2 pl-9 pr-4 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#28533A]"
                />
              </label>
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <span>Sort by</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as 'asc' | 'desc' | 'relevance')}
                  className="rounded-xl border border-[#D9DDCE] bg-white px-3 py-2 text-xs font-semibold text-[#234331]"
                >
                  <option value="relevance">Recommended</option>
                  <option value="asc">Price: low to high</option>
                  <option value="desc">Price: high to low</option>
                </select>
              </label>
            </div>

            {isLoading ? (
              <div className="flex min-h-[40vh] items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#28533A]/20 border-t-[#28533A]" />
                  <p className="text-sm text-gray-500">Loading products...</p>
                </div>
              </div>
            ) : isError ? (
              <div className="rounded-3xl border border-[#D9DDCE] bg-white p-8 text-center">
                <p className="mb-2 text-3xl">🌾</p>
                <h2 className="font-serif text-lg font-bold text-gray-700">Unable to load products</h2>
                <p className="mt-2 text-sm text-gray-500">Please check your connection and try again.</p>
              </div>
            ) : !data?.products || data.products.length === 0 ? (
              <div className="rounded-3xl border border-[#D9DDCE] bg-white p-8 text-center">
                <p className="mb-2 text-4xl">📦</p>
                <h2 className="font-serif text-lg font-bold text-gray-700">No products found</h2>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSearch('');
                    setPage(1);
                  }}
                  className="mt-4 rounded-full bg-[#234331] px-5 py-2 text-xs font-bold text-white"
                >
                  View all products
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
                  {data.products.map((product: Product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
                {data.totalPage > 1 && (
                  <div className="mt-10 flex justify-center">
                    <ReactPaginate
                      pageCount={data.totalPage}
                      pageRangeDisplayed={2}
                      marginPagesDisplayed={1}
                      onPageChange={handlePageClick}
                      containerClassName="flex items-center space-x-1 sm:space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-[#D9DDCE]"
                      pageClassName="rounded-full overflow-hidden"
                      pageLinkClassName="w-8 h-8 flex items-center justify-center text-xs font-bold text-gray-700 hover:bg-gray-100"
                      previousClassName="rounded-full overflow-hidden"
                      previousLinkClassName="px-3 py-1 text-xs font-bold text-[#234331] hover:bg-[#FBF6ED]"
                      nextClassName="rounded-full overflow-hidden"
                      nextLinkClassName="px-3 py-1 text-xs font-bold text-[#234331] hover:bg-[#FBF6ED]"
                      activeClassName="bg-[#234331] text-white"
                      disabledClassName="opacity-40 cursor-not-allowed"
                      forcePage={page - 1}
                    />
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
