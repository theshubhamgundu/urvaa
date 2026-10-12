import React from 'react';

const communityVideos = [
  { id: 'aN2sDNVf-Js', title: 'Community video 1' },
  { id: 'BeNpZc_SULs', title: 'Community video 3' },
  { id: 'vwImmm2jPWU', title: 'Community video 4' },
  { id: 'bgq_DG7ptsE', title: 'Community video 5' },
];

const CommunityVideos: React.FC = () => (
  <section aria-labelledby="community-videos-heading" className="bg-[#F4EBDD] py-6 md:py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <h2
        id="community-videos-heading"
        className="mb-5 text-center font-serif text-2xl font-bold text-[#178A4B] sm:mb-7 sm:text-3xl"
      >
        Stories from Our Community
      </h2>
      <div className="overflow-hidden">
        <div className="animate-marquee">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 gap-4 pr-4 sm:gap-8 sm:pr-8"
            >
              {communityVideos.map((video) => (
                <div
                  key={`${copy}-${video.id}`}
                  className="aspect-[9/16] w-[min(44vw,260px)] shrink-0 overflow-hidden bg-[#2A1C22]"
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&playsinline=1&controls=0&modestbranding=1&rel=0&disablekb=1`}
                    title={video.title}
                    className="h-full w-full border-0"
                    allow="autoplay; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    tabIndex={copy === 1 ? -1 : 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CommunityVideos;
