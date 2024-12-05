import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Button } from './ui/Button';
import { ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    title: "Bienvenue à la Fromagerie Alioui",
    subtitle: "L'excellence fromagère depuis 2021",
    badge: "Nouveau"
  },
  {
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=2850&q=80",
    title: "Qualité Artisanale",
    subtitle: "Des fromages faits avec passion et savoir-faire",
    badge: "Artisanal"
  },
  {
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=2850&q=80",
    title: "Tradition & Innovation",
    subtitle: "Un mélange parfait de recettes authentiques",
    badge: "Premium"
  }
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-[400px] md:h-[600px] overflow-hidden">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ['-120%', 0, -500],
            rotate: [0, 0, -90],
            opacity: 0
          },
          next: {
            translate: ['120%', 0, -500],
            rotate: [0, 0, 90],
            opacity: 0
          }
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full swiper-creative"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
              </div>
              
              <div className="relative h-full flex items-center">
                <div className="max-w-3xl px-6 md:px-16 mx-auto">
                  <div className={`transition-all duration-700 transform ${
                    activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    <span className="inline-block px-4 py-1 bg-amber-500 text-white rounded-full text-sm font-medium mb-6">
                      {slide.badge}
                    </span>
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 font-script">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                      {slide.subtitle}
                    </p>
                    <Button 
                      size="lg"
                      className="group flex items-center space-x-2"
                    >
                      <span>Découvrir nos produits</span>
                      <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}