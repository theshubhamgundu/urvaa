import React from 'react';

const communityImages = [
  { src: 'community-01.webp', alt: 'Eco-friendly plates and tableware' },
  { src: 'community-02.jpg', alt: 'Traditional flowers from the region' },
  { src: 'community-03.jpg', alt: 'Women sorting coffee beans at an Araku farm' },
  { src: 'community-04.webp', alt: 'Eco-friendly household and dining products' },
  { src: 'community-05.jpeg', alt: 'Natural leaf plates' },
  { src: 'community-06.jpeg', alt: 'Handcrafted wooden tableware' },
  { src: 'community-07.jpeg', alt: 'Handwoven natural-fiber bag' },
  { src: 'community-08.jpeg', alt: 'Traditional regional sweets' },
  { src: 'community-09.jpeg', alt: 'Flowering plants in colorful pots' },
  { src: 'community-10.jpeg', alt: 'Women weaving a traditional handloom' },
  { src: 'community-11.jpeg', alt: 'Herbs harvested by local growers' },
  { src: 'community-12.jpeg', alt: 'A craftswoman working at a handloom' },
  { src: 'community-13.jpeg', alt: 'Rural growers harvesting mustard greens' },
  { src: 'community-14.jpeg', alt: 'Artisan working at a traditional loom' },
  { src: 'community-15.jpg', alt: 'Decorative kolam artwork' },
  { src: 'community-16.jpg', alt: 'A grower tending plants at a nursery' },
];

const CommunityGallery: React.FC = () => (
  <section aria-labelledby="community-gallery-heading" className="overflow-hidden bg-[#FBF6ED] py-10 md:py-14">
    <div className="mx-auto mb-6 max-w-7xl px-4 text-center sm:mb-8 sm:px-6">
      <h2 id="community-gallery-heading" className="font-serif text-2xl font-bold text-[#178A4B] sm:text-3xl">
        Love from Our Community
      </h2>
    </div>

    <div className="overflow-hidden">
      <div className="animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-4 pr-4"
          >
            {communityImages.map((image) => (
              <div
                key={`${copy}-${image.src}`}
                className="h-52 w-40 shrink-0 overflow-hidden rounded-2xl border border-[#E6DACB] bg-white shadow-sm sm:h-64 sm:w-52"
              >
                <img
                  src={`/images/community/${image.src}`}
                  alt={copy === 0 ? image.alt : ''}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CommunityGallery;
