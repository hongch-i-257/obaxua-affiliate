'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function BannerCarousel() {
  const banners = [
    { id: 1, src: '/images/banners/banner-main.jpg' },
    { id: 2, src: '/images/banners/banner2.jpg' },
    { id: 3, src: '/images/banners/banner3.jpg' },
  ];

  return (
    <div className="w-full relative py-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        speed={500}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.id}
            style={{ width: '75%', maxWidth: '850px' }}
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl select-none">
              <img
                src={banner.src}
                alt="Obaxua Banner"
                className="w-full h-auto object-cover"
                draggable="false"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          opacity: 0.75;
          transition: all 0.5s ease;
          transform: scale(0.85);
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 50;
        }
      `}</style>
    </div>
  );
}