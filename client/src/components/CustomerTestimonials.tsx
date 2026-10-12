import React from 'react';

const customerReviews = [
  {
    name: 'Lakshmi Devi',
    location: 'Rajahmundry, Andhra Pradesh',
    metric: 'Regional Foods',
    review: 'Loved exploring Andhra foods. The groundnut oil details were helpful.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389816/julina_candles/avatars/Amulaya.webp',
  },
  {
    name: 'Sai Charan',
    location: 'Vijayawada, Andhra Pradesh',
    metric: 'Eco-Friendly Finds',
    review: 'The areca leaf plates are perfect for family get-togethers.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389815/julina_candles/avatars/Ajay_Reddy.webp',
  },
  {
    name: 'Venkata Rao',
    location: 'Kadiyam, Andhra Pradesh',
    metric: 'Garden & Nursery',
    review: 'Happy to find Kadiyam plants alongside other local specialties.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389829/julina_candles/avatars/Shridhar_Reddy.webp',
  },
  {
    name: 'Harika Reddy',
    location: 'Visakhapatnam, Andhra Pradesh',
    metric: 'Everyday Essentials',
    review: 'The wooden spoons are useful for everyday cooking and gifting.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389821/julina_candles/avatars/Bhargavi.webp',
  },
  {
    name: 'Naga Jyothi',
    location: 'Araku Valley, Andhra Pradesh',
    metric: 'Regional Discoveries',
    review: 'I love discovering products and stories from Andhra Pradesh.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389818/julina_candles/avatars/Avinash.webp',
  },
  {
    name: 'Srinivas Kumar',
    location: 'Kakinada, Andhra Pradesh',
    metric: 'Regional Foods',
    review: 'The regional foods are easy to browse, with clear product details.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389823/julina_candles/avatars/Harshini_katta.webp',
  },
  {
    name: 'P. Sravani',
    location: 'Tirupati, Andhra Pradesh',
    metric: 'Thoughtful Gifting',
    review: 'A lovely place to find regional goods and thoughtful gifts.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389828/julina_candles/avatars/Sai_Kiran.webp',
  },
  {
    name: 'Ravi Teja',
    location: 'Guntur, Andhra Pradesh',
    metric: 'Eco-Friendly Finds',
    review: 'Found great reusable kitchenware, and the product layout is simple.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389831/julina_candles/avatars/Suma.webp',
  },
  {
    name: 'Anusha',
    location: 'Eluru, Andhra Pradesh',
    metric: 'Local Products',
    review: 'I enjoy discovering products from communities across our region.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389827/julina_candles/avatars/Prafful.webp',
  },
  {
    name: 'Bhavani',
    location: 'Srikakulam, Andhra Pradesh',
    metric: 'Regional Discoveries',
    review: 'Regional specialties and eco-friendly everyday products in one place.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389826/julina_candles/avatars/Pavani.webp',
  },
  {
    name: 'Madhavi',
    location: 'Ongole, Andhra Pradesh',
    metric: 'Everyday Essentials',
    review: 'Loved finding groundnut oil and eco-friendly kitchen essentials together.',
    avatar: 'https://res.cloudinary.com/bzykgznp/image/upload/v1786389824/julina_candles/avatars/Jalender.webp',
  },
];

const CustomerTestimonials: React.FC = () => (
  <section
    aria-labelledby="customer-testimonials-heading"
    className="w-full overflow-hidden border-y border-[#E6DACB] bg-[#FBF6ED] py-8 sm:py-10 md:py-12"
  >
    <div className="overflow-hidden">
      <div className="animate-marquee">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-3 pr-3 sm:gap-5 sm:pr-5"
          >
            {customerReviews.map((customer) => (
              <article
                key={`${copy}-${customer.name}`}
                className="flex w-[min(270px,calc(100vw-2rem))] shrink-0 flex-col justify-between rounded-2xl border border-[#E6DACB] bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:w-[300px] sm:p-5 md:w-[340px]"
              >
                <div className="min-w-0">
                  <span className="mb-3 inline-block rounded-md bg-[#178A4B]/10 px-2.5 py-1 text-[10px] font-semibold text-[#17643B] sm:text-[11px]">
                    {customer.metric}
                  </span>
                  <p className="line-clamp-3 w-full whitespace-normal break-words text-xs italic leading-relaxed text-gray-700 sm:text-sm">
                    “{customer.review}”
                  </p>
                </div>

                <div className="mt-3 flex min-w-0 items-center gap-3 border-t border-gray-100 pt-3">
                  <img
                    src={customer.avatar}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 shrink-0 rounded-full border-2 border-[#C79A56] object-cover shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold leading-snug text-[#2A1C22]">
                      {customer.name}
                    </p>
                    <p className="truncate text-[10px] text-gray-500">
                      {customer.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
  );

export default CustomerTestimonials;
