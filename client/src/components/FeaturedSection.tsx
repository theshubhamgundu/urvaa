import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetBannersQuery } from '../redux/api/banner.api';
import { StoreBanner } from '../types/api-types';

const defaultHeroBanners: Partial<StoreBanner>[] = [
  {
    id: 'hero_1',
    title: 'Delivering the Authentic Rural Aura',
    subtitle: 'Discover regional treasures, single-origin harvests & artisanal heritage directly from India’s rural cooperatives.',
    imageUrl: 'https://res.cloudinary.com/idi6k3ue/image/upload/v1791905009/urvaa/images/hero/from-our-villages.jpg',
    mobileImageUrl: 'https://res.cloudinary.com/idi6k3ue/image/upload/v1791905009/urvaa/images/hero/from-our-villages.jpg',
    linkUrl: '/products',
    buttonText: 'Shop All Collections',
    badge: 'ONE VILLAGE ONE PRODUCT',
  },
  {
    id: 'hero_2',
    title: 'Untouched Flavors of Mana Godavari',
    subtitle: 'Wood-fired palm jaggery, Bellam Putharekulu, and heritage sweets crafted with zero chemicals.',
    imageUrl: 'https://res.cloudinary.com/idi6k3ue/image/upload/v1791905012/urvaa/images/hero/rural-heritage.jpg',
    mobileImageUrl: 'https://res.cloudinary.com/idi6k3ue/image/upload/v1791905012/urvaa/images/hero/rural-heritage.jpg',
    linkUrl: '/category/mana-godavari-foods',
    buttonText: 'Taste Godavari Sweets',
    badge: 'HERITAGE RECIPES',
  },
  {
    id: 'hero_3',
    title: 'Wild Araku Tribal Coffee & Forest Honey',
    subtitle: 'Single-origin Arabica coffee beans and raw cliff honey sourced directly from indigenous forest tribes.',
    imageUrl: 'https://res.cloudinary.com/idi6k3ue/image/upload/v1791905011/urvaa/images/hero/rooted-in-rural-life.jpg',
    mobileImageUrl: 'https://res.cloudinary.com/idi6k3ue/image/upload/v1791905011/urvaa/images/hero/rooted-in-rural-life.jpg',
    linkUrl: '/category/tribal-araku-products',
    buttonText: 'Discover Tribal Araku',
    badge: 'ORGANIC HARVEST',
  },
];

const FeaturedSection: React.FC = () => {
  const { data: bannerData } = useGetBannersQuery('hero');
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroBanners =
    bannerData?.banners && bannerData.banners.length > 0
      ? bannerData.banners
      : defaultHeroBanners;

  useEffect(() => {
    if (isPaused || heroBanners.length <= 1) return;
    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroBanners.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isPaused, heroBanners.length]);

  const showImage = (index: number) => {
    setActiveImage((index + heroBanners.length) % heroBanners.length);
  };

  return (
    <section
      className="relative h-[clamp(20rem,55vw,44rem)] w-full overflow-hidden bg-[#111111] group"
      role="region"
      aria-label="URVA stories from rural India"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {heroBanners.map((banner, index) => {
        const isCurrent = index === activeImage;
        const imgSrc = banner.imageUrl || defaultHeroBanners[0].imageUrl;
        const mobileSrc = banner.mobileImageUrl || imgSrc;

        return (
          <div
            key={banner.id || index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${isCurrent ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            aria-hidden={!isCurrent}
          >
            {/* Responsive Picture */}
            <picture>
              <source media="(max-width: 640px)" srcSet={mobileSrc} />
              <img
                src={imgSrc}
                alt={banner.title || 'URVA rural products'}
                className="h-full w-full object-cover object-center"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>

            {/* Subtle Gradient Overlays for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 md:p-16 max-w-4xl z-20">
              {banner.badge && (
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E57A22]" />
                    {banner.badge}
                  </span>
                </div>
              )}

              {banner.title && (
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight sm:leading-tight mb-2 drop-shadow-md">
                  {banner.title}
                </h2>
              )}

              {banner.subtitle && (
                <p className="text-xs sm:text-sm md:text-base text-neutral-200 line-clamp-2 sm:line-clamp-3 max-w-2xl mb-6 font-normal drop-shadow-sm">
                  {banner.subtitle}
                </p>
              )}

              {banner.linkUrl && (
                <div>
                  <Link
                    to={banner.linkUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-neutral-100 text-[#111111] text-xs sm:text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    <span>{banner.buttonText || 'Explore Now'}</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Dots Indicator */}
      {heroBanners.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-12 z-30 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-3 py-1.5 border border-white/10">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => showImage(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeImage ? 'true' : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${index === activeImage ? 'w-6 bg-[#E57A22]' : 'w-2 bg-white/50 hover:bg-white'
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedSection;
