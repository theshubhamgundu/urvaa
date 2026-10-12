import React, { useEffect, useState } from 'react';

const heroImages = [
  {
    src: '/images/hero/from-our-villages.jpg',
    alt: 'URVA: From our villages to your home, with rural landscapes and artisan-made goods.',
  },
  {
    src: '/images/hero/rural-heritage.jpg',
    alt: 'URVA rural heritage collage featuring regional foods, plants, handlooms, and eco-friendly goods.',
  },
  {
    src: '/images/hero/rooted-in-rural-life.jpg',
    alt: 'URVA rooted in rural life, celebrating village artisans and local traditions.',
  },
];

const FeaturedSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const showImage = (index: number) => {
    setActiveImage((index + heroImages.length) % heroImages.length);
  };

  return (
    <section
      className="relative h-[clamp(18rem,52vw,42rem)] w-full overflow-hidden bg-[#E8DDC8]"
      role="region"
      aria-label="URVA stories from rural India"
      aria-roledescription="carousel"
    >
      {heroImages.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            index === activeImage ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={index !== activeImage}
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
      ))}

      <button
        type="button"
        onClick={() => showImage(activeImage - 1)}
        aria-label="Show previous hero image"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl font-bold text-[#173C2B] shadow transition hover:bg-white sm:left-5 sm:h-12 sm:w-12"
      >
        <span aria-hidden="true">&lsaquo;</span>
      </button>
      <button
        type="button"
        onClick={() => showImage(activeImage + 1)}
        aria-label="Show next hero image"
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl font-bold text-[#173C2B] shadow transition hover:bg-white sm:right-5 sm:h-12 sm:w-12"
      >
        <span aria-hidden="true">&rsaquo;</span>
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-[#173C2B]/75 px-3 py-2 sm:bottom-5">
        {heroImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => showImage(index)}
            aria-label={`Show hero image ${index + 1} of ${heroImages.length}`}
            aria-current={index === activeImage ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all ${
              index === activeImage ? 'w-7 bg-white' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
