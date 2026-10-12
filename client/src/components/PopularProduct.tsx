import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../types/api-types';
import ProductCard from './ProductCard';
import { addToCart } from '../redux/reducers/cart.reducer';
import { RootState } from '../redux/store';

interface PopularProductsProps {
  products: Product[];
}

const demoProducts = [
  {
    id: 'cold-pressed-groundnut-oil',
    name: 'Cold-Pressed Groundnut Oil',
    category: 'Mana Godavari Foods',
    photo: 'https://images.pexels.com/photos/18066457/pexels-photo-18066457.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: '500-ml', label: '500 ml', price: 399, mrp: 499 },
      { id: '1-litre', label: '1 litre', price: 699, mrp: 899 },
    ],
  },
  {
    id: 'areca-leaf-plates',
    name: 'Eco-Friendly Areca Leaf Plates',
    category: 'Eco-Friendly Products',
    photo: 'https://images.pexels.com/photos/6990568/pexels-photo-6990568.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: '25-pieces', label: '25 pieces', price: 199, mrp: 249 },
      { id: '50-pieces', label: '50 pieces', price: 349, mrp: 449 },
    ],
  },
  {
    id: 'handcrafted-wooden-spoons',
    name: 'Handcrafted Wooden Spoons',
    category: 'Eco-Friendly Products',
    photo: 'https://images.pexels.com/photos/26595162/pexels-photo-26595162.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { id: '4-piece-set', label: 'Set of 4', price: 149, mrp: 199 },
      { id: '8-piece-set', label: 'Set of 8', price: 269, mrp: 349 },
    ],
  },
];

const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(
    Object.fromEntries(demoProducts.map((product) => [product.id, product.variants[0].id]))
  );
  const activeProducts = (products || []).filter(p => p.isActive !== false);
  const displayProducts = [
    ...activeProducts.filter(product => product.featured),
    ...activeProducts.filter(product => !product.featured),
  ].slice(0, 2);

  return (
    <section className="pt-2 pb-0 md:pt-4 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-center sm:mb-8">
          <h2 className="font-serif text-2xl font-bold text-[#178A4B] sm:text-3xl">
            Our Best Sellers
          </h2>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:gap-5 sm:px-0">
          {demoProducts.map((product) => (
            (() => {
              const selectedVariant = product.variants.find(
                (variant) => variant.id === selectedVariants[product.id]
              ) ?? product.variants[0];
              const productId = `demo-${product.id}-${selectedVariant.id}`;
              const cartItem = cartItems.find((item) => item.productId === productId);

              return (
                <article
                  key={product.id}
                  className="flex w-[46%] min-w-[155px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[#E6DACB] bg-white p-2.5 shadow-sm sm:w-[31%] sm:p-3 lg:w-[19%]"
                >
                  <div className="relative mb-2.5 aspect-square overflow-hidden rounded-xl border border-[#E6DACB]/60 bg-[#FBF6ED]">
                    <span className="absolute left-2 top-2 z-10 rounded-full bg-[#FBF6ED]/95 px-2.5 py-1 text-[10px] font-bold text-[#5C2333] shadow-sm sm:text-xs">
                      Demo item
                    </span>
                    <img
                      src={product.photo}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 min-h-9 text-center text-xs font-bold leading-snug text-[#2A1C22] sm:text-sm">
                  {product.name}
                  </h3>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span className="text-sm font-bold text-[#2A1C22] sm:text-base">
                      ₹ {selectedVariant.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹ {selectedVariant.mrp.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="mb-2 text-center text-[10px] text-[#806B5D]">Illustrative price</p>
                  <label className="sr-only" htmlFor={`${product.id}-variant`}>
                    Choose {product.name} size
                  </label>
                  <select
                    id={`${product.id}-variant`}
                    value={selectedVariant.id}
                    onChange={(event) =>
                      setSelectedVariants((current) => ({
                        ...current,
                        [product.id]: event.target.value,
                      }))
                    }
                    className="mb-2.5 w-full rounded-full border border-[#B7B0A8] bg-white px-3 py-2 text-xs text-[#2A1C22] focus:border-[#178A4B] focus:outline-none"
                  >
                    {product.variants.map((variant) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.label}
                      </option>
                    ))}
                  </select>
                  {cartItem && (
                    <p className="mb-1 text-center text-[10px] font-medium text-[#806B5D]">
                      In basket: {cartItem.quantity}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(addToCart({
                        productId,
                        name: `${product.name} (${selectedVariant.label}) · Demo`,
                        photo: product.photo,
                        price: selectedVariant.price,
                        quantity: 1,
                        stock: 99,
                      }))
                    }
                    className="mt-auto w-full rounded-full bg-[#178A4B] px-2 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#126D3B] sm:text-sm"
                  >
                    Add to Cart
                  </button>
                </article>
              );
            })()
          ))}
          {displayProducts.map((product) => (
            <div key={product._id} className="relative w-[46%] min-w-[155px] shrink-0 snap-start sm:w-[31%] lg:w-[19%]">
              <span className="pointer-events-none absolute right-2 top-2 z-10 rounded-full bg-[#178A4B] px-2.5 py-1 text-[10px] font-bold text-white shadow-sm sm:text-xs">
                Bestseller
              </span>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
